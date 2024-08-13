
#include <Arduino.h>
#include <TimerOne.h>            // Incluir Librería TimerOne

int ge=0,pot;
int disparo = 7;

void Zero(){
  ge = 0;
}

void Grado_Electrico(){
  ge++;
  if(pot==ge){
    digitalWrite(disparo,HIGH);
    digitalWrite(disparo,LOW);
  }
}

void setup()
{
  Serial.begin(9600);
  attachInterrupt(0,Zero,CHANGE);
  Timer1.initialize(46);
  Timer1.attachInterrupt(Grado_Electrico);
  pinMode(disparo,OUTPUT);
  digitalWrite(disparo,LOW);
}

void loop()
{
  pot = analogRead(0);
  pot = map(pot,0,1023,0,179);
}
