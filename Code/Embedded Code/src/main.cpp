#include <Arduino.h>
#include <TimerOne.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include "DHT.h"

#define ONE_WIRE_BUS 7  //? DS18B20
#define DHTPIN 4        //? DHT11
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
DHT S_Humidity(DHTPIN, DHTTYPE);
DallasTemperature S_Temperature(&oneWire);

// Pass our oneWire reference to Dallas Temperature sensor
void GradoZero()
{
  GradoElectrico = 0;
}

void Disparo()
{
   GradoElectrico++;

   if (LDR_Value == GradoElectrico)
   {
     Serial.print(GradoElectrico);
     digitalWrite(Disparo_Calentador, HIGH);
     digitalWrite(Disparo_Calentador, LOW);
   }
  
}

void setup()
{
  Serial.begin(9600);
  //? Inicialización de Sensores | Pines
  S_Temperature.begin();
  S_Humidity.begin();
  pinMode(Caudal_Pin, INPUT);
  pinMode(Disparo_Calentador, OUTPUT);
  pinMode(Disparo_Lampara, OUTPUT);
  // Timer
  attachInterrupt(0, GradoZero, CHANGE);   //"0" es el pin 2
  Timer1.initialize(55);                 // Seteado a 55us
  Timer1.attachInterrupt(Disparo);

  //? Setea en LOW (por sí acaso)
  digitalWrite(Disparo_Calentador, LOW);
  digitalWrite(Disparo_Lampara, LOW);
}

void loop()
{
 
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
  }

  //* Toma la lectura de todos los sensores del circuito
  LDR_Value = analogRead(A0);
  LDR_Value = map(LDR_Value, 0, 1023, 0, 178);
  Lluvia_Value = analogRead(A1);
  Lluvia_Value = map(Lluvia_Value, 0, 1023, 0, 10);
  S_Temperature.requestTemperatures();
  float Temperature = (S_Temperature.getTempCByIndex(0));
  float Humidity = S_Humidity.readHumidity();

  //* Envía los datos a la Raspberry Pi 
  Serial.print("Lluvia: ");
  Serial.println(Lluvia_Value);
  Serial.print("LDR: ");
  Serial.println(LDR_Value);
  Serial.print("Temperatura: ");
  Serial.println(Temperature);
  Serial.print("Humedad: ");
  Serial.println(Humidity);

  //* Testea el sí los sensores funcionan o no.
}
