#include <MyFunctions.h> //Todas las librerias del Proyecto más el restante del código.

#define Disparo_pin 7

const int pinDatosDQ = 3;
OneWire oneWireObjeto(pinDatosDQ);
DallasTemperature TemperatureSensor(&oneWireObjeto);

int GradoElectrico = 0;
int Value;

void Zero()
{ // g = 0
  GradoElectrico = 0;
}

void Disparo()
{
  GradoElectrico++;
  if (Value == GradoElectrico)
  {
    digitalWrite(Disparo_pin, HIGH);
    digitalWrite(Disparo_pin, LOW);
  }
}

void setup()
{
  Serial.begin(9600);
  TemperatureSensor.begin();
  attachInterrupt(0, Zero, CHANGE);
  Timer1.initialize(46);
  Timer1.attachInterrupt(Disparo);
  pinMode(Disparo_pin, OUTPUT);
  digitalWrite(Disparo_pin, LOW);
}

void loop()
{

  TemperatureTesting();


  Value = analogRead(0);
  Value = map(Value, 0, 1023, 0, 179);
  // Serial.println(Value);


  // TemperatureSensor.requestTemperatures();
  // Serial.print("Temperatura: ");
  // Serial.print(TemperatureSensor.getTempCByIndex(0));
  // Serial.println(" C");
}

/* Sensor Testing
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
