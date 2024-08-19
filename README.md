# Hidroponia-Project

Proyecto creado por Electrónica. 

Se trata de una hidroponia que medirá diferentes mágnitudes del agua para tener control sobre ella.
Se busca - *idoneamente* - el control absoluto de esta.

## Código. Explicación.

En primeras antes de hablar del código debemos de hablar del circuito; consta 2 partes: una de monitoreo y otra de control, en la primera se busca tener la lectura constante de la onda senoidal para determinar sí está cruza por cero y en la segunda se busca "Disparar" hacía la onda senoidal para cortarla, y poder así **regular su intensidad**

¿Cómo la parte de control logra esto?

Para poder determinar cuando disparar o no por el código, básicamente se la divide a la onda senoidal en varias partes.
En primeras se calcula su periodo, utilizando para ello la cuenta:

<div align="center"> 
    ![Ecuación](./Ref/CalculoUnoUno.png)
</div>

+ Luego se la divide en 360 partes para así tener un ciclo entero.

<div align="center"> 
    ![Ecuación](./Ref/CalculoDosDos.png)
</div>

+ Una vez tenidos estos datos poder asumir diversas cosas:
 1. Un semiciclo de nuestra onda es equivalente a: 360/2.
 2. Cada 46μs recorremos 1° de nuestra onda.
 3. 46μs x (360/2) Es equivalente al recorrido **total** de tiempo que conlleva un solo semiciclo.

Ahora sí, empecemos con el código. 

    #include <TimerOne.h>
    int GradoElectrico = 0;
    
    void GradoZero(){
      GradoElectrico = 0;
    }

    void Disparo() {
      GradoElectrico++;

      // Resto de instrucciones...
      // (Instrucciones de cuando disparar)
      
    }
    
    void setup(){
      attachInterrupt(0, GradoZero, CHANGE);
      Timer1.initialize(46);
      Timer1.attachInterrupt(Disparo);
    }

    void loop(){ // Resto de instrucciones...}

Básicamente aplicamos todo lo aprendido: 
Comencemos con la función Setup:

    attachInterrupt(0,GradoZero,CHANGE);
      
Esta linea de código pertenece a la libreria de TimerOne, y se encarga de inicializar una entrada de datos en el pin 0 (que por default es el 2 y, que cada vez que cambie de HIGH a LOW o viceversa, ejecuta la función GradoZero(), la cual reestablece los valores de nuestros grados.

      Timer1.initialize(46);
      
Le indicamos al programa que inicialice un temporizador de 46μs.

    Timer1.attachInterrupt(Disparo)
          
Cada vez que finaliza el temporizador de 46μs se ejecuta la función Disparo()

En resumidas cuentas, el código se encarga de ejecutar un cronometro que cada 46μs ejecuta una función, la cuál aumentará una variable int; pero recién llegado a un valor LOW en la onda, es decir 180° o, 46μ x 180 de tiempo; el cronometro volverá a reiniciarse y la variable de grados también lo hará junto con ella.
Es decir, este simple código tiene la posibilidad de manipular por completo un semiciclo de nuestra onda senoidal partiendola a esta en 180° al detectar el cruce a cero antes de terminar el ciclo completo. Pudiendo con ello ejecutar scripts de código que tan solo tengan que variar entre los valores de 1 - 180 de la variable int de GradoElectrico y, así, determinando cuando disparar.
- Nota: Esta es una versión *muy* básica del accionamiento del disparo, pero sirve.