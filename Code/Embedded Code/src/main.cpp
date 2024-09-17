#include <Arduino.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <TimerOne.h>
#include "DHT.h"

#define ONE_WIRE_BUS 7
#define DHTPIN 4
#define DHTTYPE DHT11
#define Disparo_Calentador 3
#define Disparo_Lampara 5
#define Caudal_Pin 6

int GradoElectrico = 0;
int LDR_Value;
int Lluvia_Value;
float Caudal_Value;
unsigned long Caudal_Pulsos = 0;
unsigned long Previous_Time = 0;
// Setup a oneWire instance to communicate with any OneWire devices
OneWire oneWire(ONE_WIRE_BUS);
DHT dht(DHTPIN, DHTTYPE);

// Pass our oneWire reference to Dallas Temperature sensor
DallasTemperature S_Temperature(&oneWire);

void GradoZero()
{
  GradoElectrico = 0;
}

void Disparo()
{
  // GradoElectrico++;
  /*
   if (LDR_Value == GradoElectrico)
   {
     Serial.print(GradoElectrico);
     digitalWrite(Disparo_pin, HIGH);
     digitalWrite(Disparo_pin, LOW);
   }
   */
}

void setup()
{
  Serial.begin(9600);
  // Inicialización de Sensores
  S_Temperature.begin();
  dht.begin();
  pinMode(Caudal_Pin, INPUT);
  // Timer
  attachInterrupt(0, GradoZero, CHANGE); //"0" es el pin 2
  Timer1.initialize(55);                 // Seteado a 55us
  Timer1.attachInterrupt(Disparo);

  // Inicialización de Pines
  pinMode(Disparo_Calentador, OUTPUT);
  digitalWrite(Disparo_Calentador, LOW);
  pinMode(Disparo_Lampara, OUTPUT);
  digitalWrite(Disparo_Lampara, LOW);
}

void loop()
{
  S_Temperature.requestTemperatures();
  Serial.print("Celsius temperature: ");
  Serial.print(S_Temperature.getTempCByIndex(0));
  float h = dht.readHumidity();

  // Lectura pines analógicos.
  LDR_Value = analogRead(A0);
  LDR_Value = map(LDR_Value, 0, 1023, 0, 178);
  Serial.print("LDR: ");
  Serial.println(LDR_Value);

  Lluvia_Value = analogRead(A1);
  Lluvia_Value = map(Lluvia_Value, 0, 1023, 0, 10);
  Serial.print("Lluvia: ");
  Serial.println(Lluvia_Value);

  if (isnan(h))
  {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  if (digitalRead(Caudal_Pin) == HIGH)
  {
    Caudal_Pulsos++;
    delay(5); // Para evitar rebotes
  }

  // Calcular el caudal cada segundo
  if (millis() - Previous_Time >= 1000)
  {
    Caudal_Value = (float)Caudal_Pulsos / 450.0; // Aproximadamente 450 pulsos por litro
    Serial.print("Caudal (L/min): ");
    Serial.println(Caudal_Value);
    Caudal_Pulsos = 0; // Reiniciar contador
    Previous_Time = millis();
  }3

  Serial.print("Humedad: ");
  Serial.println(h);

  delay(5000);
}
