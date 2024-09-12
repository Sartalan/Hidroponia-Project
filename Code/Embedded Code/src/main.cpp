#include <Arduino.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include "DHT.h"

// Data wire is conntec to the Arduino digital pin 4
#define ONE_WIRE_BUS 7
#define DHTPIN 4 // what pin we're connected to
#define DHTTYPE DHT11
// Setup a oneWire instance to communicate with any OneWire devices
OneWire oneWire(ONE_WIRE_BUS);
DHT dht(DHTPIN, DHTTYPE);

// Pass our oneWire reference to Dallas Temperature sensor
DallasTemperature S_Temperature(&oneWire);

void setup()
{
  Serial.begin(9600);
  S_Temperature.begin();
  dht.begin();
}

void loop()
{
  S_Temperature.requestTemperatures();
  Serial.print("Celsius temperature: ");
  Serial.print(S_Temperature.getTempCByIndex(0));

  float h = dht.readHumidity();
  delay(1000);

  if (isnan(h))
  {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Humidity: ");
  Serial.print(h);
}
