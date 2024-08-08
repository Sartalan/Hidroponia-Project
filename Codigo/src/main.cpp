
#include <TimerOne.h>            // Incluir Librería TimerOne
volatile int i = 0;              // Variable usada por el contador.
volatile boolean cruce_cero = 0; // variable que actúa como switch al detectar cruce por cero.
int Triac = 3;                   // Salida conectada al optoacoplador MOC 3021.
int dim;                         // Controla la intensidad de iluminación, 0 = ON ; 83 = OFF
int T_int = 100;                 // Tiempo en el cual se producen la interrupciones en us.
int POT;

void deteccion_Cruce_cero()
{                    // Si existe un cruce por cero entonces la variable "cruce_cero" cambia a TRUE...
  cruce_cero = true; //...reseteando el valor de "i", y colocando la salida conectada al Triac en estado...
  i = 0;
  digitalWrite(Triac, LOW);
}

void Dimer()
{
  if (cruce_cero == true)
  {
    if (i >= dim)
    {
      digitalWrite(Triac, HIGH);
      i = 0;
      cruce_cero = false;
    }
    else
    {
      i++;
    }
  }
}

void setup()
{
  // Serial.begin(9600);
  pinMode(Triac, OUTPUT);                           // Configurar como salida.
  attachInterrupt(0, deteccion_Cruce_cero, RISING); // Realiza una interrupción al detectar el crice por cero en el pin 2
  Timer1.initialize(T_int);                         // Inicializa la librería con el tiempo deseado.
  Timer1.attachInterrupt(Dimer, T_int);             // En cada interrupción ejecuta el codigo Dimer.
}

void loop()
{

  POT = analogRead(A0);
  dim = map(POT, 0, 1023, 0, 83);
}
