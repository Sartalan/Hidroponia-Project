#include <Arduino.h>
#include <TimerOne.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include "DHT.h"

#define ONE_WIRE_BUS 7 //? DS18B20
#define DHTPIN 4       //? DHT11
#define DHTTYPE DHT11
#define Disparo_Bomba 5   // 2
#define Disparo_Lampara 2 // 5
#define Caudal_Pin 6

int GradoElectrico = 0;
int LDR_Value, Lluvia_Value;
int Bomb_Time = 0;
int Lamp_Time = 0;

float Caudal_Value;
unsigned long Caudal_Pulsos = 0;
unsigned long Previous_Time = 0;

unsigned long Previus_Time_Bomba = 0;
unsigned long Previus_Time_Bomba_Dos = 0;
bool Turn_Pump = true;
bool Turn_Lamp = true;
// Setup a oneWire instance to communicate with any OneWire devices
OneWire oneWire(ONE_WIRE_BUS);
DHT S_Humidity(DHTPIN, DHTTYPE);
DallasTemperature S_Temperature(&oneWire);

// Pass our oneWire reference to Dallas Temperature sensor
void GradoZero()
{
  GradoElectrico = 0;
  Bomb_Time++;
  Lamp_Time++;

  //? Bomba de agua | 5 min

  if (Bomb_Time == 9000)
  { // 9000 == 5 min (aprox)
    Serial.println("LLEGUÉ A 9000");
    Bomb_Time = 0;
    Turn_Pump = !Turn_Pump;
  }

  switch (Turn_Pump)
  {
  case true:
    digitalWrite(Disparo_Bomba, HIGH);
    Serial.println("Me prendí");
    break;

  case false:
    digitalWrite(Disparo_Bomba, LOW);
    Serial.println("Me Apagué");
    break;
  }

  Serial.print("Timer bomba: ");
  Serial.println(Turn_Pump);

  //? Lamparas UV | 12hs

    if (Lamp_Time == 1296000)
  { // 108.000 = 1h (aprox) | 1.296.000 = 12h (aprox)
    //Serial.println("LLEGUÉ A 800");
    Lamp_Time = 0;
    Turn_Lamp = !Turn_Lamp;
  }

  switch (Turn_Lamp)
  {
  case true:
    digitalWrite(Disparo_Lampara, HIGH);
    Serial.println("Me prendí");
    break;

  case false:
    digitalWrite(Disparo_Lampara, LOW);
    Serial.println("Me Apagué");
    break;
  }

  Serial.print("Timer lampara: ");
  Serial.println(Turn_Lamp);
}

void Disparo()
{
  // Serial.println(GradoElectrico);

  //? Lógica para manejar el disparo de la lampara.

  GradoElectrico++;
  // Code
  //? Lógica para manejar el disparo de la bomba de agua | (Intervalo de 5s)
}

void setup()
{
  Serial.begin(9600);
  //? Inicialización de Sensores | Pines
  S_Temperature.begin();
  S_Humidity.begin();
  pinMode(Caudal_Pin, INPUT);
  pinMode(Disparo_Bomba, OUTPUT);
  pinMode(Disparo_Lampara, OUTPUT);
  // Timer
  attachInterrupt(1, GradoZero, CHANGE); //"0" es el pin 2
  Timer1.initialize(55);                 // Seteado a 55us
  Timer1.attachInterrupt(Disparo);

  //? Setea en LOW (por sí acaso)
  digitalWrite(Disparo_Bomba, LOW);
  digitalWrite(Disparo_Lampara, LOW);
}

void loop()
{

  // Calcular el caudal cada segundo
  if (digitalRead(Caudal_Pin) == HIGH) //? Evalúa si recibe datos del YF-S201
  {
    Caudal_Pulsos++;
    delay(5); // Para evitar rebotes
  }
  if (millis() - Previous_Time >= 1000) //? Cada un segundo devuelve el valor del YF-S201
  {
    Caudal_Value = (float)Caudal_Pulsos / 450.0; // Aproximadamente 450 pulsos por litro
                                                 // Serial.print("Caudal (L/min): ");
    // Serial.println(Caudal_Value);
    Caudal_Pulsos = 0; // Reiniciar contador
    Previous_Time = millis();
  }

  //* Toma la lectura de todos los sensores del circuito
  LDR_Value = analogRead(A0);
  LDR_Value = map(LDR_Value, 0, 1023, 0, 178);
  Lluvia_Value = analogRead(A1);
  Lluvia_Value = map(Lluvia_Value, 0, 1023, 0, 10);
  S_Temperature.requestTemperatures();
  // float Temperature = (S_Temperature.getTempCByIndex(0));
  // float Humidity = S_Humidity.readHumidity();

  //* Envía los datos a la Raspberry Pi

  //* Testea sí los sensores funcionan o no.
}
