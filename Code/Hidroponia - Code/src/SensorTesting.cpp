#include "MyFunctions.h" 

void TemperatureTesting()
{
    unsigned long currentMillis = millis(); // Obtén el tiempo actual
    unsigned long previousMillis = 0;       // Almacena el tiempo anterior
    const long interval = 500;              // Intervalo de 1 segundo
    int Test;

    Test = analogRead(A1);
    Test = map(Test, 0, 1023, 15, 30);
    Serial.println(" C");

    // Comprueba si ha pasado el intervalo deseado
    if (currentMillis - previousMillis >= interval)
    {
        previousMillis = currentMillis; // Actualiza el tiempo anterior
        Serial.print("------");
        Serial.print("Temp: ");
        Serial.print(Test);
        Serial.println(" C");
    }
}
