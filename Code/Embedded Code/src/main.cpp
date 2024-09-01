#include <Arduino.h>

void setup(){
Serial.begin(115200);
while(!Serial) {}
}

void loop(){
  Serial.println("Mensaje a Raspberry Pi");
  Serial.write("Lol");
  delay(1000);  
}