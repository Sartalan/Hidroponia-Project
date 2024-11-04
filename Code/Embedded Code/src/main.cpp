#include <Arduino.h>
#include <TimerOne.h>
#define Disparo_Bomba 5   // 2

int GradoElectrico = 0;
int Turn_Lamp = 0;
 
// Pass our oneWire reference to Dallas Temperature sensor
void GradoZero()
{
  GradoElectrico = 0;
}

void Disparo()
{
  GradoElectrico++; 
}

void setup()
{
  Serial.begin(9600);
  //? Inicialización de Sensores | Pines
 
  pinMode(Disparo_Bomba, OUTPUT);
  // Timer
  attachInterrupt(1, GradoZero, CHANGE); //"0" es el pin 2

  //? Setea en LOW (por sí acaso)
  digitalWrite(Disparo_Bomba, LOW);
  Timer1.initialize(55);                 // Seteado a 55us
  Timer1.attachInterrupt(Disparo);

}

void loop()
{
  Serial.println("me ejecuto");
  if ( Serial.available() > 0) {
    String datoRecibido = Serial.readStringUntil('\n');  // Leer dato hasta el salto de línea
    Serial.println("Dato recibido desde Python: " + datoRecibido);  // Enviar respuesta a Python
    if(datoRecibido == "ON"){
      Turn_Lamp = 1;
    }
    else if(datoRecibido == "OFF"){
      Turn_Lamp = 0;
    }

    if(datoRecibido == "Bomba"){
      Serial.println("Lol ");
    }
  }


  switch (Turn_Lamp)
  {
    case 1:
      digitalWrite(Disparo_Bomba, HIGH);
      Serial.println("Disparé | Lampara");
    break;
  
    case 0:
      digitalWrite(Disparo_Bomba, LOW);
      Serial.println("No Disparé | Lampara");
    break;

    default:
      digitalWrite(Disparo_Bomba, LOW);
    break;
  }
}
