# Hidroponia - Project 
## Proyecto
"Hidroponia - Project" Es un proyecto creado por la empresa ficticia "Wolfsrudel" (Integrantes en el pie de página), y consiste básicamente de una Hidroponia completamente monitoreada, con todo lo que ello conlleva; Sensores, Protocolos de comunicación, Servidores, Linux y... *mucho código*.

Nuestro proyecto consistirá de un circuito que controlará un número indeterminado de sensores *-aún-* y se encargará de enviarselos a una Raspberry Pi.
Dicha Raspberry alojará un servidor web (nginx) debido a que utilizamos un software Open Source llamado *MyCodo* el cuál es una aplicación web ligada a su propia base de datos (influxDB) quién alojará los datos para mostrarlos en pantalla para manipularlos/monitorearlos; y también servirá como una API y Endpoint para poder enviarle los datos de monitoreo a una aplicación de celular creada con React Native. Dicha aplicación mandará una *request* al servidor y éste le devolverá una *response* con los datos que la app solicitará en formato *JSON*. Todo utilizando el protocolo de comunicación wifi **HTTP**. 

Básicamente, nuestro objetivo es *automatizar y monitorear* toda magnitud física imprescindible de una Hidroponia.  

### Sobre el Repositorio 

El repositorio consta de 3 ramales principales:
1. **main**
   + Es donde se añadirá todo lo correspondiente al Hardware; Circuitos, Simulaciones, Modelos 3D e inclusive el propio código de los microcontroladores.
2. **App**
   + Es donde se desarrollará la aplicación de celular paso por paso.  
3. **Blog-Deploy**
   + Es donde se alojará toda la documentación en producción de nuestro proyecto en *órden crónologico*. Puede ser importante sí se quiere imitar nuestro proyecto; Hay diversas anotaciones que no estarán en el informe final al no necesitar un seguimiento en éste.
  
El detalle del funcionamiento de cada partes se encuentra **en su mismo ramal**.
Sí busca entender su funcionamiento a mayor profundidad **lea su propio README**

### Sobre **Wolfsrudel**

Wolfsrudel es una empresa *ficticia* creada por nosotros a pedido de la materia. Realmente somos un grupo de tres estudiantes de 7° año que buscan aprobar una materia. Así que se asumirá el rol con la seriedad la cual se espera de nosotros, motivo por el cual, en parte: creamos toda una documentación del desarrollo de nuestro proyecto, la cual en ciertas ocasiones pierde seriedad; la experiencia de hacer un proyecto de tal magnitud *requiere diversión* y nosotros defendemos esas ideas.

### Somos 

1. Barrera Alan 
2. Fariña Jorge
3. Dominguez Gabriel

Todos alumnos de 7°3° Electrónica | Año: 2024