#include <Arduino.h>
#include <TimerOne.h>
#include <OneWire.h>
#include <DallasTemperature.h>

//? Declaración de Pines | -----------------
#define Disparo_pin 7
const int pinDatosDQ = 3;
//* Variables            | -----------------
unsigned long previousMillis = 0;
const long interval = 300;
int GradoElectrico = 0;
int Value, Test;
bool BajaTemperatura = false;
//* Librerias            | -----------------
OneWire oneWireObjeto(pinDatosDQ);
DallasTemperature TemperatureSensor(&oneWireObjeto);

void GradoZero()
{ // g = 0
  GradoElectrico = 0;
}

void Disparo()
{
  GradoElectrico++;
  /* if (Value == GradoElectrico)
   {
     digitalWrite(Disparo_pin, HIGH);
     digitalWrite(Disparo_pin, LOW);
   } */

  if (GradoElectrico == 78)
  {
    switch (BajaTemperatura)
    {
    case true:
      digitalWrite(Disparo_pin, HIGH);
      digitalWrite(Disparo_pin, LOW);
      break;

      default: 
      Serial.println("No hay baja Temperatura");
      break;
    }
  }
}

void setup()
{
  Serial.begin(9600);
  TemperatureSensor.begin();
  attachInterrupt(0, GradoZero, CHANGE);
  Timer1.initialize(46);
  Timer1.attachInterrupt(Disparo);
  pinMode(Disparo_pin, OUTPUT);
  digitalWrite(Disparo_pin, LOW);
}
void loop()
{
  Value = analogRead(A0);
  Value = map(Value, 0, 1023, 0, 178);
  // Serial.println(Value);
  unsigned long currentMillis = millis(); // Obtén el tiempo actual
  Test = analogRead(A1);
  Test = map(Test, 0, 1023, 15, 30);

  // Comprueba si ha pasado el intervalo deseado
  if (currentMillis - previousMillis >= interval)
  {
    previousMillis = currentMillis; // Actualiza el tiempo anterior

    Serial.print("Temp: ");
    Serial.print(Test);
    Serial.println(" C");
    Serial.print("------");
  }
  if (Test <= 20)
  {
    BajaTemperatura = true;
  }
  else
  {
    BajaTemperatura = false;
  }

  // TemperatureSensor.requestTemperatures();
  // Serial.print("Temperatura: ");
  // Serial.print(TemperatureSensor.getTempCByIndex(0));
  // Serial.println(" C");
}

/* Código de Ejemplo con el único fin de testear el DS18B20 | Sensor de Temperatura
#include <OneWire.h>
#include <DallasTemperature.h>
#include <Arduino.h>
const int pinDatosDQ = 3;
OneWire oneWireObjeto(pinDatosDQ);
DallasTemperature sensorDS18B20(&oneWireObjeto);

void printAddress(DeviceAddress deviceAddress)
{
  for (uint8_t i = 0; i < 8; i++)
  {
    Serial.print("0x");
    if (deviceAddress[i] < 0x10) Serial.print("0");
    Serial.print(deviceAddress[i], HEX);
    if (i < 7) Serial.print(", ");
  }
  Serial.println("");
}

void setup() {
  Serial.begin(9600);
  sensorDS18B20.begin();

  // Buscamos los sensores conectados
  Serial.println("Buscando sensores");
  Serial.println("Encontrados: ");
  int sensoresConectados = sensorDS18B20.getDeviceCount();
  Serial.print(sensoresConectados);
  Serial.println(" sensores");

  // Si hemos encontrado uno mostramos su dirección
  if (sensoresConectados >= 1) {
    DeviceAddress termometro;

    Serial.println("Imprimiendo direcciones...");
    for (int i = 0;  i < sensoresConectados;  i++)
    {
      Serial.print("Sensor ");
      Serial.print(i + 1);
      Serial.print(" : ");
      sensorDS18B20.getAddress(termometro, i);
      printAddress(termometro);
    }
  }
}

void loop() {
}
*/
