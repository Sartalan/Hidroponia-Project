#include <Arduino.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include "DHT.h"

#define DHTTYPE DHT11
#define DHTPIN 10        //? DHT11
#define Disparo_Bomba 5   // 2
#define Disparo_Lampara 2     
#define Pin_Caudal 6
#define ONE_WIRE_BUS 7  //? DS18B20

int Turn_Lamp = 0;
int Bomb_Time_On = 0;
int Turn_Bomb = 0;

// OneWire oneWire(Pin_DS18B20);
// DallasTemperature S_Temperature(&oneWire);
// Sensores
unsigned long previousTime = 0;
unsigned int pulsesCounter = 0;


OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature S_Temperature(&oneWire);
DHT dht(DHTPIN, DHTTYPE);

// Pass our oneWire reference to Dallas Temperature sensor
void GradoZero()
{
  Bomb_Time_On++;

  if ( Bomb_Time_On <= 3000 && Bomb_Time_On >= 0){ //30000 = 5min
      //Prendido
      Turn_Bomb = 1;
  }
  else if(Bomb_Time_On > 3000 && Bomb_Time_On <= 6000){
      Turn_Bomb = 0;
  }

  else if(Bomb_Time_On > 6000){
    Bomb_Time_On = 0;
  }

  // Serial.println(Turn_Bomb);
}


void setup()
{
  // S_Temperature.begin();
  Serial.begin(9600);
  //? Inicialización de Sensores | Pines
  S_Temperature.begin();
  dht.begin();

  pinMode(Disparo_Bomba, OUTPUT);
  pinMode(Disparo_Lampara, OUTPUT);
  pinMode(Pin_Caudal, INPUT);
  // Timer
  attachInterrupt(1, GradoZero, CHANGE); //"0" es el pin 2

  //? Setea en LOW (por sí acaso)
  digitalWrite(Disparo_Bomba, LOW);
  digitalWrite(Disparo_Lampara, LOW);
}

void loop()
{
  // Serial.println("me ejecuto");
  // Toma de Datos Seriales
  
  if ( Serial.available() > 0) {
    String datoRecibido = Serial.readStringUntil('\n');  // Leer dato hasta el salto de línea
    Serial.println("Dato recibido desde Python: " + datoRecibido);  // Enviar respuesta a Python
    if(datoRecibido == "Lamp_ON"){
      Turn_Lamp = 1;
    }
    else if(datoRecibido == "Lamp_OFF"){
      Turn_Lamp = 0;
    }
  }

  unsigned long actualTime = millis();

//Lectura de Sensores
 if (digitalRead(Pin_Caudal) == HIGH) {
    pulsesCounter++;  // Incrementamos el contador de pulsos
  }

  // Cada segundo calculamos el flujo de agua
  if (actualTime - previousTime >= 1000) {
    float flow = pulsesCounter / 5.5; // Ajuste para obtener el flujo en L/min
    S_Temperature.requestTemperatures(); 
    float Temperature = (S_Temperature.getTempCByIndex(0));
    float h = dht.readHumidity();
    float hic = dht.computeHeatIndex( h, false);
//Sending Data vía Serial
    Serial.print("Caudal: ");
    Serial.println(flow);
    Serial.print("Temperature: ");
    Serial.println(Temperature);
    Serial.print("Humidity: ");
    Serial.println(hic);

    pulsesCounter = 0; // Reiniciamos el contador de pulsos
    previousTime = actualTime; // Actualizamos el tiempo
  }

// Disparo Bomba && Lampara
  switch (Turn_Lamp)
  {
    case 1:
      // digitalWrite(Disparo_Lampara, HIGH); 
      // Serial.println("Disparé | Lampara");
    break;

    case 0: 
      // digitalWrite(Disparo_Lampara, LOW);
      // Serial.println("No Disparé | Lampara");
    break;

    default:
      digitalWrite(Disparo_Lampara, LOW);
    break;
  }

  switch (Turn_Bomb) {
    case 1:
      Serial.println("Disparé | BOMBA");
      // digitalWrite(Disparo_Bomba, HIGH);
      break;
    case 0:
      Serial.println("No Disparé | BOMBA");
      // digitalWrite(Disparo_Bomba, LOW);
      break;
    default:
      // digitalWrite(Disparo_Bomba, LOW);
      break;
  }

}
