"use strict";(self.webpackChunkherzarmband_blog=self.webpackChunkherzarmband_blog||[]).push([[481],{2637:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"release/eight","metadata":{"permalink":"/Hidroponia-Project/blog/release/eight","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Notas/2024-9-9.md","source":"@site/blog/Notas/2024-9-9.md","title":"Actualizaci\xf3n [ 8 ] | Comunicaci\xf3n a MyCodo | Filtro","description":"(\uff61\u25d5\u203f\u25d5\uff61)","date":"2024-09-09T00:00:00.000Z","tags":[{"label":"MyCodo","permalink":"/Hidroponia-Project/blog/tags/my-codo"}],"readingTime":1.74,"hasTruncateMarker":false,"authors":[{"name":"Wolfsrudel","title":"All the Team","url":"https://github.com/Sartalan/Hidroponia-Project","imageURL":"https://img.desmotivaciones.es/202303/tonto-perro-imagenes.jpg","key":"Team"}],"frontMatter":{"slug":"release/eight","title":"Actualizaci\xf3n [ 8 ] | Comunicaci\xf3n a MyCodo | Filtro","authors":["Team"],"tags":["MyCodo"]},"unlisted":false,"nextItem":{"title":"Actualizaci\xf3n [ 7 ] | Avances","permalink":"/Hidroponia-Project/blog/release/seven"}},"content":"### (\uff61\u25d5\u203f\u25d5\uff61)\\n\\nLogramos comunicar correctamente la toma de datos de Python con MyCodo, esto fue realmente m\xe1s f\xe1cil de lo que pensamos al no tener que interaccionar con alg\xfan otro lenguaje de programaci\xf3n en el proceso. \\nEl resto ser\xe1 cuesti\xf3n de tiempo para que se logr\xe9.\\n\\n### Filtro\\n\\nHoy fue impreso el filtro/recipiente necesario para alojar los plantines.\\n\\n![Filtro](../Ref/Filtro.jpeg)\\n\\n### Ideas\\n\\nS\xed logramos unificar todo el proyecto con MyCodo r\xe1pidamente, pensamos que podr\xedamos crear un *programa* de escritorio para poder muestrear los datos. Todo esto con la intenci\xf3n de tener m\xe1s control sobre nuestro c\xf3digo.\\nRealmente con MyCodo *no sabemos lo que estamos haciendo*, lo cual es una ayuda realmente pr\xe1ctica porque uno no debe de saber como funciona internamente el programa; pero no nos satisface.\\nSabemos utilizar una t\xe9cnologia llamada Tauri. La cual es todo un ecosistema de herramientas que te permiten utilizar Webview (Microsoft) para crear un programa de escritorio con t\xe9cnologia web y, manejar todo su Backend utilizando el lenguaje de bajo nivel **Rust**.\\nPensamos que har\xeda que el proyecto se sintiera menos incompleto y que ser\xeda grandioso que tuviese un programa propio tambi\xe9n.\\n\\nAparte, ya tenemos un c\xf3digo; [Spectrum-IOT_WebPage](https://sartalan.github.io/Spectrum-IOT_WebPage/)\\n\\nSpectrum-IOT_WebPage es una aplicaci\xf3n web que fue creada para monitorear la lectura de datos que \xe9sta recibiera de una casa completamente autom\xe1tizada para que unos robots se movilizar\xe1n de forma auton\xf3ma en ella; como es de imaginar, el *proyecto fue cancelado*. Es justamente por ello que nos gustar\xeda reutilizar el c\xf3digo y adaptarlo al dise\xf1o de la App (por una cuesti\xf3n de consistencia). \\nAunque tambi\xe9n seria increible que pudiese ser hecho para que, a diferencia de la app, se pueda modificar alguna parte del c\xf3digo del microcontrolador y regular m\xe1gnitudes. Ser\xeda altamente pr\xe1ctico como una interfaz visual t\xe1ctil que pudiese estar instalada en la Raspberry y, simplemente con un par de touch\'s y la misma navegaci\xf3n intuitiva de la aplicaci\xf3n web, pudiese ser controlado. \\n\\nAunque muy seguramente no lleguemos con el tiempo para ello; pero puede que sea un buen c\xf3digo Open Source del que se pueda sacar mucho provecho s\xed alguien as\xed lo quiere."},{"id":"release/seven","metadata":{"permalink":"/Hidroponia-Project/blog/release/seven","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Notas/2024-9-4.md","source":"@site/blog/Notas/2024-9-4.md","title":"Actualizaci\xf3n [ 7 ] | Avances","description":"Avances","date":"2024-09-04T00:00:00.000Z","tags":[{"label":"\xe9pico","permalink":"/Hidroponia-Project/blog/tags/epico"}],"readingTime":1.115,"hasTruncateMarker":false,"authors":[{"name":"Alan Barrera","title":"Software Developer","url":"https://github.com/sartalan","imageURL":"https://github.com/sartalan.png","key":"Alan"}],"frontMatter":{"slug":"release/seven","title":"Actualizaci\xf3n [ 7 ] | Avances","authors":["Alan"],"tags":["\xe9pico"]},"unlisted":false,"prevItem":{"title":"Actualizaci\xf3n [ 8 ] | Comunicaci\xf3n a MyCodo | Filtro","permalink":"/Hidroponia-Project/blog/release/eight"},"nextItem":{"title":"Actualizaci\xf3n [ 6 ] | Comunicaci\xf3n de Dispositivos","permalink":"/Hidroponia-Project/blog/release/six"}},"content":"## Avances\\n\\n#### Entre ayer y hoy comenzamos el desarrollo del segundo PCB\\n\\nEste consta de m\xe1s sensores incorporados y la inclusi\xf3n de un nuevo disparo de triac, llevando por ende un segundo circuito de disparo (con todo lo que ello conlleva; Snubber\'s, Optoacopladores, Triac\'s, etc.) Al finalizar el PCB -y s\xed funciona- daremos una mayor explicaci\xf3n de su funcionamiento\\n\\n#### Los sensores que vamos a usar son los siguientes:\\n\\n+ [DS18B20 | **Temperatura**](https://www.analog.com/media/en/technical-documentation/data-sheets/ds18b20.pdf)\\n+ [DHT11   | **Humedad**](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.mouser.com/datasheet/2/758/DHT11-Technical-Data-Sheet-Translated-Version-1143054.pdf&ved=2ahUKEwi20Yb096mIAxVmkZUCHUF5G2QQFnoECBwQAQ&usg=AOvVaw2tdFgaeZgeQmJr3SkJiugP)\\n+ [M1592 | **Lluvia**](https://cdn.sparkfun.com/datasheets/Sensors/Temp/DS18B20.pdf) \\n+ [LDR | **Fotorresistencia**](https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs)\\n+ [YF-S201 | **Caud\xe1limetro**](http://www.mantech.co.za/datasheets/products/yf-s201_sea.pdf)\\n\\nTambi\xe9n un detalle a a\xf1adir es que decidimos utilizar el **Arduino Nano.**\\n\\n## Hoy\\n\\nB\xe1sicamente hicimos todo el esquem\xe1tico y lo pr\xf3ximo a realizar es el PCB cuando se nos d\xe9 el aprobado del mismo.\\nTesteamos nuevamente la comunicaci\xf3n serial con el Arduino Nano y funcion\xf3 correctamente, al igual que cada conexionado independiente de cada sensor con su respectiva forma de conexi\xf3n, as\xed que todo deber\xeda salir de la forma prevista. Seguramente algo salga mal, como siempre. Es parte de ser un t\xe9cnico electr\xf3nico.\\n![Fotos trabajando jdawjd](../Ref/Foto_Laburando_Dos.jpeg)\\n![Foto m\xeda jdawjd](../Ref/Foto_Laburando_Uno.jpeg)\\n\\nDato a tener en cuenta s\xed quer\xe9s que la Raspberry Pi se comunique por USB a un microcontrolador. Ten\xe9s que permitirle a tu usuario a acceder al grupo \\"dialout\\". Es importante por una cuesti\xf3n de permisos que solo el super usuario puede brindar."},{"id":"release/six","metadata":{"permalink":"/Hidroponia-Project/blog/release/six","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Notas/2024-9-1.md","source":"@site/blog/Notas/2024-9-1.md","title":"Actualizaci\xf3n [ 6 ] | Comunicaci\xf3n de Dispositivos","description":"Comunicaci\xf3n","date":"2024-09-01T00:00:00.000Z","tags":[{"label":"\xe9pico","permalink":"/Hidroponia-Project/blog/tags/epico"}],"readingTime":1.705,"hasTruncateMarker":false,"authors":[{"name":"Wolfsrudel","title":"All the Team","url":"https://github.com/Sartalan/Hidroponia-Project","imageURL":"https://img.desmotivaciones.es/202303/tonto-perro-imagenes.jpg","key":"Team"}],"frontMatter":{"slug":"release/six","title":"Actualizaci\xf3n [ 6 ] | Comunicaci\xf3n de Dispositivos","authors":["Team"],"tags":["\xe9pico"]},"unlisted":false,"prevItem":{"title":"Actualizaci\xf3n [ 7 ] | Avances","permalink":"/Hidroponia-Project/blog/release/seven"},"nextItem":{"title":"Actualizaci\xf3n [ 5 ] | Explosi\xf3n XDD","permalink":"/Hidroponia-Project/blog/release/five"}},"content":"## Comunicaci\xf3n \\n#### **Raspberry Pi - Microcontrolador**\\n\\nDecidimos finalmente comunicar la Raspberry Pi y el Microcontrolador entre s\xed v\xeda **USB** , este cambio -aunque dr\xe1stico- es mucho m\xe1s conveniente para nuestro proyecto, y de igual forma no cambiar\xe1 demasiado al tener que vernos obligados a utilizar wifi para comunicar la Raspberry Pi con la App.\\n\\n#### Quedando el gr\xe1fico tal que as\xed:\\n\\n![Gr\xe1fico piola](../Ref/Diagrama%20en%20Bloques%20I%20Raspberry%20Pi%20Server%20Communication%20TWO.png)\\n\\n#### **Nota:** En aquel momento se pensaba utilizar el ESP WROOM, luego cambiamos al Arduino Nano al no necesitar del Wifi y, tener mayor acceso a la informaci\xf3n de como programarlo.\\n\\n### Importante\\n\\nCuesti\xf3n: Aqu\xed viene lo importante:\\n+ Logramos enviar correctamente los datos del microcontrolador a la Raspberry Pi por USB. \\n\\n### \xbfC\xf3mo se logr\xf3 esto?\\n\\nB\xe1sicamente controlando el recibo de datos con Python y dependencias de \xe9ste, en este caso de **Pyserial**.\\n\\n```python\\nimport serial\\nimport time\\n\\nser = serial.Serial(\'/dev/ttyACM0\', 115200, timeout=1.0)\\ntime.sleep(3)\\nser.reset_input_buffer()\\nprint(\\"Serial OK\\")\\n\\ntry:\\n    while True:\\n        time.sleep(0.01)\\n        if ser.in_waiting > 0:\\n            line = ser.readline().decode(\'utf-8\').rstrip()\\n            print(line)\\n\\nexcept KeyboardInterrupt:\\n    print(\\"Close Serial Communication\\")\\n    ser.close()\\n```\\n\\nEn resumidas cuentas el c\xf3digo hace lo siguiente:\\n+ Se inicializan los modulos para manejar tiempos y datos seriales (Importante instalar pyserial) y luego se procede a generar un bucle el cual esperar\xeda datos por un puerto USB. Siendo \xe9ste en concreto el puerto **\\"/dev/tty/ACM0\\"**. Es el directorio donde se alojan los puertos en Raspbian (Linux).\\n+ Luego hace m\xe1s cosas como decodificar la informaci\xf3n en UTF-8 (para mostrar el texto correctamente) pero no son de importancia.\\n+ Ante una interrupci\xf3n de teclado se detiene el script.\\n\\n#### Luego el c\xf3digo en el microcontrolador es el siguiente:\\n\\n```cpp\\n#include <Arduino.h>\\n\\nvoid setup(){\\nSerial.begin(115200);\\nwhile(!Serial) {}\\n}\\n\\nvoid loop(){\\n  Serial.println(\\"Mensaje a Raspberry Pi\\");\\n  Serial.write(\\"Lol\\");\\n  delay(1000);  \\n}\\n```\\n\\nComo ven el c\xf3digo es muy sencillo; los mismos print que se pueden mostrar en consola para debuguear c\xf3digo ya bastan para enviar datos. Lo importante aqu\xed es el **script de Python**\\n\\n### Setup \xe9pico\\n\\n![Setup \xc9pico](../Ref/Setup_\xc9pico.jpeg)\\n\\n#### Por s\xed a alguien le interesa mi rice en Linux *(alto rarito)*, \xe9ste se encuentra [aqu\xed](https://github.com/Sartalan/my-linux-dotfiles)"},{"id":"release/five","metadata":{"permalink":"/Hidroponia-Project/blog/release/five","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Notas/2024-8-29.md","source":"@site/blog/Notas/2024-8-29.md","title":"Actualizaci\xf3n [ 5 ] | Explosi\xf3n XDD","description":"Montamos el circuito y... EXPLOT\xd3 XD","date":"2024-08-29T00:00:00.000Z","tags":[{"label":"\xe9pico","permalink":"/Hidroponia-Project/blog/tags/epico"}],"readingTime":0.42,"hasTruncateMarker":false,"authors":[{"name":"Wolfsrudel","title":"All the Team","url":"https://github.com/Sartalan/Hidroponia-Project","imageURL":"https://img.desmotivaciones.es/202303/tonto-perro-imagenes.jpg","key":"Team"}],"frontMatter":{"slug":"release/five","title":"Actualizaci\xf3n [ 5 ] | Explosi\xf3n XDD","authors":["Team"],"tags":["\xe9pico"]},"unlisted":false,"prevItem":{"title":"Actualizaci\xf3n [ 6 ] | Comunicaci\xf3n de Dispositivos","permalink":"/Hidroponia-Project/blog/release/six"},"nextItem":{"title":"Actualizaci\xf3n [ 4 ] | Estructura","permalink":"/Hidroponia-Project/blog/release/four"}},"content":"Montamos el circuito y... **EXPLOT\xd3 XD**\\n\\nAunque la simulaci\xf3n en Proteus fuese \xe9xitosa; no el montaje. De igual forma solo nos faltaba una resistencia y ning\xfan componente (salvo una misera resistencia) sali\xf3 da\xf1ada en el proceso. \\nEl problema fue solucionado en la misma placa que explot\xf3 al d\xeda siguiente, as\xed que no resulto en un problema grave. Fue \xe9pico, nada m\xe1s que a\xf1adir.\\n\\nAdjuntamos pruebas:\\n\\n![EXPLOSI\xd3N EPICA WUOWOWO](../Ref/PCB_EXPLOSI\xd3N.jpeg)\\n\\n#### Efectivamente, por s\xed lo pensabas: La mancha negra de la mesa es obra nuestra :p"},{"id":"release/four","metadata":{"permalink":"/Hidroponia-Project/blog/release/four","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Notas/2024-8-25.md","source":"@site/blog/Notas/2024-8-25.md","title":"Actualizaci\xf3n [ 4 ] | Estructura","description":"Hidroponia","date":"2024-08-25T00:00:00.000Z","tags":[{"label":"\xe9pico","permalink":"/Hidroponia-Project/blog/tags/epico"}],"readingTime":1.36,"hasTruncateMarker":false,"authors":[{"name":"Wolfsrudel","title":"All the Team","url":"https://github.com/Sartalan/Hidroponia-Project","imageURL":"https://img.desmotivaciones.es/202303/tonto-perro-imagenes.jpg","key":"Team"}],"frontMatter":{"slug":"release/four","title":"Actualizaci\xf3n [ 4 ] | Estructura","authors":["Team"],"tags":["\xe9pico"]},"unlisted":false,"prevItem":{"title":"Actualizaci\xf3n [ 5 ] | Explosi\xf3n XDD","permalink":"/Hidroponia-Project/blog/release/five"},"nextItem":{"title":"Actualizaci\xf3n [ 3 ] | MyCodo","permalink":"/Hidroponia-Project/blog/release/three"}},"content":"## Hidroponia\\n\\n#### **Finalmente, lo terminamos; logramos terminar la estructura de la Hidroponia**\\n\\nHoy terminamos de instalar de forma funcional la Hidroponia. \\nLa Hidroponia es, por explicarla de manera sencilla -en la foto se entiende, de igual modo- un \\"circuito\\" donde una bomba de agua se encarga de bombear el agua hac\xeda arriba y, al llegar al tope, va bajando por fuerza de la gravedad por unos ca\xf1os con una leve inclinaci\xf3n. \\n\\nPor s\xed nadie sabe lo que es una hidroponia, la funci\xf3n de este \\"mecanismo\\" b\xe1sicamente permite que, por un lado el agua no se estanque, y por el otro que las plantas esten hidratadas. Al una Hidroponia carecer de tierra justamente se le agregan minerales y/o nutrientes para compensar su carencia. Una Hidroponia -puede ser- una forma muy econ\xf3mica de cultivar plantas en espacios reducidos *si se hace bien*. Nuestra intenci\xf3n en nuestro proyecto es monitorear la mayor cantidad de m\xe1gnitudes f\xedsicas de \xe9sta.\\n\\n#### Estructura\\n\\nLa estructura de la Hidroponia no es m\xe1s que una serie de ca\xf1os **termofusionados** que le permiten el flujo de agua. En la parte superior de cada ca\xf1o -aunque no se vea en la foto- contiene unos huecos a escala para contener unos \\"recipientes/filtros\\" que las ra\xedces del plat\xedn a plantar.\\n\\nAunque se vea muy f\xe1cil el montaje de la estructura, realmente no lo fue; m\xe1s de una vez tuvimos alg\xfan problema que ocasion\xf3 alguna p\xe9rdida de agua y tuvimos que replantear alguna parte de su dise\xf1o, as\xed que s\xed alguien piensa armar una: tengalo en cuenta. \\n\\n![Hidroponia](../Ref/Hidroponia_one.jpeg)\\n\\nFinalizando con el tema. Le agradecemos mucho a nuestro profesor por habernos ayudado en el armado."},{"id":"release/three","metadata":{"permalink":"/Hidroponia-Project/blog/release/three","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Notas/2024-8-15.md","source":"@site/blog/Notas/2024-8-15.md","title":"Actualizaci\xf3n [ 3 ] | MyCodo","description":"MyCodo","date":"2024-08-15T00:00:00.000Z","tags":[{"label":"hola","permalink":"/Hidroponia-Project/blog/tags/hola"}],"readingTime":1.13,"hasTruncateMarker":false,"authors":[{"name":"Wolfsrudel","title":"All the Team","url":"https://github.com/Sartalan/Hidroponia-Project","imageURL":"https://img.desmotivaciones.es/202303/tonto-perro-imagenes.jpg","key":"Team"}],"frontMatter":{"slug":"release/three","title":"Actualizaci\xf3n [ 3 ] | MyCodo","authors":["Team"],"tags":["hola"]},"unlisted":false,"prevItem":{"title":"Actualizaci\xf3n [ 4 ] | Estructura","permalink":"/Hidroponia-Project/blog/release/four"},"nextItem":{"title":"Comentarios | App","permalink":"/Hidroponia-Project/blog/note/one"}},"content":"## MyCodo\\n\\nDecidimos utilizar MyCodo para monitorear el env\xedo de datos del ESP32 hac\xeda la Raspberry Pi y este ser\xe1 por wifi; pensamos que podr\xedamos crear un servidor dentro de la Raspberry Pi -puede que con Express- y que \xe9ste sea la v\xeda de comunicaci\xf3n entre la App y el ESP32 y, en el transcurso del trayecto, sim\xfaltaneamente monitorear dichos datos. Pero antes de proceder a hablar sobre la comunicaci\xf3n entre los dispositivos -del cual se tiene un diagrama que se mostrar\xe1 dentro de poco- hablaremos sobre MyCodo.\\n\\n### \xbfQu\xe9 es MyCodo?\\n\\nMyCodo es un Software Open Source (es decir, de c\xf3digo abierto) creado especificamente para generar un servidor web (nginx) que aloje MyCodo, la cual es una aplicaci\xf3n web creada con Python (flask) con acceso completo a los GPIO de la Raspberry. Nuestra idea es la siguiente:\\n\\n1. Enviarle los datos del ESP32 a la Raspberry v\xeda Wifi usando HTTP en forma de archivos JSON.\\n2. Tomar la lectura de MyCodo y almacenarla en su base de datos integrada (influxDB).\\n3. Crear una API con endpoints que permitan las solicitudes GET de parte de la App para as\xed solicitar el archivo JSON con las \xfaltimas lecturas almacenadas.\\n\\n### Comunicaci\xf3n\\n\\nA la comunicaci\xf3n entre las partes se las piensa as\xed:\\n\\n![Diagrama | Comunicaci\xf3n](../Ref/Diagrama%20en%20Bloques%20I%20Raspberry%20Pi%20Server%20Communication.png)\\n\\n#### *AVISO DEL FUTURO: LA COSA **NO FUE AS\xcd**; ESTE GR\xc1FICO ES INCORRECTO*"},{"id":"note/one","metadata":{"permalink":"/Hidroponia-Project/blog/note/one","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Notas/2024-8-11.md","source":"@site/blog/Notas/2024-8-11.md","title":"Comentarios | App","description":"Notas","date":"2024-08-11T00:00:00.000Z","tags":[{"label":"app","permalink":"/Hidroponia-Project/blog/tags/app"},{"label":"indoor","permalink":"/Hidroponia-Project/blog/tags/indoor"}],"readingTime":2.065,"hasTruncateMarker":false,"authors":[{"name":"Wolfsrudel","title":"All the Team","url":"https://github.com/Sartalan/Hidroponia-Project","imageURL":"https://img.desmotivaciones.es/202303/tonto-perro-imagenes.jpg","key":"Team"}],"frontMatter":{"slug":"note/one","title":"Comentarios | App","authors":["Team"],"tags":["app","indoor"]},"unlisted":false,"prevItem":{"title":"Actualizaci\xf3n [ 3 ] | MyCodo","permalink":"/Hidroponia-Project/blog/release/three"},"nextItem":{"title":"Actualizaci\xf3n [ 1 ] | Circuito - Simulaci\xf3n","permalink":"/Hidroponia-Project/blog/release/two"}},"content":"## Notas\\n\\nMuy seguramente vayamos a\xf1adiendo una secci\xf3n de \\"Notas\\" para a\xf1adir actualizaciones y/o ideas nuevas respecto a qu\xe9 pensamos integrar y que no; algo hablado con nuestro profesor fue integrar una aplicaci\xf3n que estuvimos desarrollando para el que iba a ser nuestro primer proyecto del a\xf1o, pero se cancel\xf3.\\nEste se trataba de un Indoor, el cu\xe1l iba a tener una funcionalidad muy parecida a lo que estamos haciendo con la Hidroponia al tener que, tambi\xe9n, tener el control absoluto del ambiente para cuidar de una planta. \\n\\n\xc9sta, al claramente haberse cancelado el proyecto, se le cancel\xf3 su desarrollo; pero eso no supuso su extinci\xf3n, se la quiso agregar a nuestro pr\xf3ximo proyecto: Herzarmband. \\nHerzarmband iba a ser un reloj/brazalete -nunca se decidi\xf3- que tomar\xeda la frecuencia card\xedaca y, por aprovechar el c\xf3digo previamente creado para la aplicaci\xf3n. Aunque esto claramente era **muy** impr\xe1ctico y: sin sentido. \\n\\n### \xbfQu\xe9 m\xe1s aparte de mostrar la frecuencia card\xedaca iba a hacer?\\n\\nEra un completo sin sentido, salvo que, se pensar\xe1 a\xf1adir alg\xfan tipo de algoritmo que predijera y detectar\xe1 de una forma u otra problemas cardiovasculares -como los hacen muchos en el mercado-  pero eso ya dejar\xeda de ser un proyecto de Electr\xf3nica y se convertir\xeda en uno de Software; no es la idea de la materia.\\n\\nPero afortunadamente es genuinamente pr\xe1ctica para integrarla en \xe9ste proyecto, sirviendo perfectamente como una interf\xe1z gr\xe1fica para visualizar en tiempo real por wifi el estado de tus plantas e hidroponia en general. \\n\\nA ra\xedz de esto a\xf1adiremos la app al proyecto; la idea es crear una comunicaci\xf3n HTTP entre la Raspberry Pi y la Aplicaci\xf3n de celular. Para ello nuestra idea es crear un servidor con **Javascript y Express** (Libreria Backend de Nodejs) que tenga interacci\xf3n con el recibo de datos que reciba la Raspberry del circuito -ya sea por wifi o alg\xfan diferente protocolo de comunicaci\xf3n- y, setear dichos datos con una API la cu\xe1l tendr\xe1 un endpoint donde la aplicaci\xf3n de celular, la cual tambi\xe9n est\xe1 escrita con Javascript -concretamente con el Framework de **React Native** se conectar\xe1.\\nMuy posiblemente utilizando archivos **JSON** para almacenar la informaci\xf3n.\\n\\nPara la fecha actual, la app luce de la siguiente forma:\\n\\n![App Indoor](../Ref/App-Indoor.gif)\\n\\nEl diagrama de bloques que dise\xf1amos para explicar su comunicaci\xf3n HTTP para proponerselo a nuestro profesor es:\\n\\n![Diagrama De Comunicaci\xf3n entre Servidor-Cliente | HTTP](../Ref/App-Communication.jpeg)\\n\\nS\xed usted quiere ver m\xe1s en profundidad su desarrollo, su repositorio y ramal de Github donde se programo se encuentra [aqu\xed](https://github.com/Sartalan/Indoor-Project/tree/App)."},{"id":"release/two","metadata":{"permalink":"/Hidroponia-Project/blog/release/two","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Notas/2024-8-8.md","source":"@site/blog/Notas/2024-8-8.md","title":"Actualizaci\xf3n [ 1 ] | Circuito - Simulaci\xf3n","description":"Logramos simular y realizar el circuito correctamente en Proteus, para ello hicimos muchas cosas:","date":"2024-08-08T00:00:00.000Z","tags":[{"label":"kicad","permalink":"/Hidroponia-Project/blog/tags/kicad"},{"label":"proteus","permalink":"/Hidroponia-Project/blog/tags/proteus"},{"label":"code","permalink":"/Hidroponia-Project/blog/tags/code"}],"readingTime":3.625,"hasTruncateMarker":false,"authors":[{"name":"Wolfsrudel","title":"All the Team","url":"https://github.com/Sartalan/Hidroponia-Project","imageURL":"https://img.desmotivaciones.es/202303/tonto-perro-imagenes.jpg","key":"Team"}],"frontMatter":{"slug":"release/two","title":"Actualizaci\xf3n [ 1 ] | Circuito - Simulaci\xf3n","authors":["Team"],"tags":["kicad","proteus","code"]},"unlisted":false,"prevItem":{"title":"Comentarios | App","permalink":"/Hidroponia-Project/blog/note/one"},"nextItem":{"title":"Comienzo del Proyecto","permalink":"/Hidroponia-Project/blog/release/one"}},"content":"Logramos simular y realizar el circuito correctamente en Proteus, para ello hicimos muchas cosas:\\n\\n1. Instalamos la *libreria* de Arduino en Proteus para as\xed poder simular correctamente los c\xf3digos en este programa, y luego realizamos el circuito correspondiente.\\n\\n## \xbfQu\xe9 hicimos?\\n\\nQuisimos tambi\xe9n aprovechar la realizaci\xf3n del proyecto para aprobar otra materia; Electr\xf3nica Aplicada. La cual nos daba a elegir si simular un circuito o no, as\xed que lo realizamos aplicandolo como soluci\xf3n a un problema en nuestro proyecto; regular la corriente alterna.\\n\\nSe trata de la realizaci\xf3n de un disparo en la se\xf1al de alterna a trav\xe9s de la utilizaci\xf3n de optoacopladores y triac\'s.\\n\\n\xc9sta es una forma de manipular la onda senoidal de la corriente alterna mediante el uso de la corriente contin\xfaa. En nuestro caso se busc\xf3 utilizar optoacopladores como medida \xf3ptica de separaci\xf3n entre las dos corrientes y, crear un c\xf3digo qu\xe9, mediante interrupciones, **supiera** cuando la AC oscila mediante el lado contrario; pero ello supon\xeda otro problema: se deb\xeda de saber exactamente y con gran precisi\xf3n **cuando la onda cruzaba por cero en primer lugar**. Viniendo, reci\xe9n ahora, lo **interesante** \u2282(\u25c9\u203f\u25c9)\u3064.\\n\\n---\\n\\n## Explicaci\xf3n \\n\\nEn primeras antes de hablar del c\xf3digo debemos de hablar del circuito; consta de dos partes: una de monitoreo y otra de control, en la primera se busca tener una lectura constante de la onda senoidal para determinar s\xed esta cruza por cero, y en la segunda se busca \\"disparar\\" hac\xeda la onda senoidal para cortarla, y poder as\xed **regular su intensidad**\\n\\n\xbfC\xf3mo la parte de control logra esto?\\n\\nPara poder determinar cuando disparar o no por el c\xf3digo, b\xe1sicamente se la divide a la onda senoidal en varias partes.\\n1. Primero calculando su periodo, utilizando para ello la cuenta:\\n\\n   ![Calculo Uno](../Ref/CalculoUno.png)\\n\\n2. Luego, se la divide en 360 partes para as\xed tener un ciclo entero.\\n\\n   ![Calculo Dos](../Ref/CalculoDos.png)\\n\\n+ Una vez tenidos estos datos podemos asumir diversas cosas:\\n\\n1. Un semiciclo de nuestra onda es equivalente a: 360/2.\\n2. Cada 46\u03bcs recorremos 1\xb0 de nuestra onda.\\n3. 46\u03bcs x (360/2) Es equivalente al recorrido **total** de tiempo que conlleva un solo semiciclo.\\n\\nAhora s\xed, comencemos con el c\xf3digo. \\n\\n```cpp\\n #include <TimerOne.h>\\n    int GradoElectrico = 0;\\n    \\n    void GradoZero(){\\n      GradoElectrico = 0;\\n    }\\n\\n    void Disparo() {\\n      GradoElectrico++;\\n\\n      // Resto de instrucciones...\\n      // (Instrucciones de cuando disparar)\\n      \\n    }\\n    \\n    void setup(){\\n      attachInterrupt(0, GradoZero, CHANGE);\\n      Timer1.initialize(46);\\n      Timer1.attachInterrupt(Disparo);\\n    }\\n\\n    void loop(){ \\n        // Resto de instrucciones... \\n    }\\n    \\n    ```\\n\\n### B\xe1sicamente aplicamos todo lo aprendido: \\n\\nComencemos con la funci\xf3n Setup:\\n\\n```cpp\\n    attachInterrupt(0,GradoZero,CHANGE);\\n```\\n\\nEsta linea de c\xf3digo pertenece a la libreria de TimerOne, y se encarga de inicializar una entrada de datos en el pin 0 (que por default es el 2 y, que cada vez que cambie de HIGH a LOW o viceversa, ejecuta la funci\xf3n GradoZero(), la cual reestablece los valores de la variable GradoElectrico.\\n\\n```cpp\\n    Timer1.initialize(46);\\n```\\n\\nLe indicamos al programa que inicialice un temporizador de 46\u03bcs.\\n\\n```cpp\\n    Timer1.attachInterrupt(Disparo)\\n```\\n\\n\\nCada vez que finaliza el temporizador de 46\u03bcs se ejecuta la funci\xf3n Disparo()\\n\\nEn resumidas cuentas, el c\xf3digo se encarga de ejecutar un cronometro que cada 46\u03bcs ejecuta una funci\xf3n, la cu\xe1l aumentar\xe1 una variable int; pero, reci\xe9n llegado a un valor LOW en la onda, es decir 180\xb0 o, 46\u03bcs x 180\xb0 de tiempo; el cronometro volver\xe1 a reiniciarse y la variable de grados tambi\xe9n lo har\xe1 junto con ella.\\n\\n\\nEs decir, este simple c\xf3digo tiene la posibilidad de manipular por completo un ciclo de nuestra onda senoidal partiendola a \xe9sta en 180\xb0 al detectar el cruce por cero antes de terminar el ciclo completo. Pudiendo con ello ejecutar scripts de c\xf3digo que tan solo tengan que variar entre los valores de 1 - 180 de la variable int de GradoElectrico y, as\xed, determinando cuando disparar dentro del semiciclo.\\n- Nota: Esta es una versi\xf3n *muy* b\xe1sica del accionamiento del disparo, pero sirve.\\n\\n\\nPero b\xe1sicamente, con este principio pod\xe9s hacer lo siguiente:\\n\\n![Simulaci\xf3n Proteus del Circuito](../Ref/Video-Simulacion.gif)\\n\\nEn este caso se tom\xf3 el mapeo del valor de un potenciometro el cu\xe1l fue sincronizado con un solo semiciclo de la onda senoidal, pudiendo, b\xe1sicamente elegir cuando disparar.\\n\\n#### Circuito | Proteus\\n\\n![Circuito simulable en Proteus](../Ref/Prototipo-Simulacion.jpeg)\\n\\n#### Esquem\xe1tico | Kicad\\n\\n![Esquem\xe1tico del circuito en Kicad](../Ref/Prototipo-Esquem\xe1tico.jpeg)\\n\\n#### PCB | Kicad \\n\\n![PCB de Prototipo del circuito en Kicad](../Ref/Prototipo-PCB.jpeg)\\n\\n\\n### Componentes | Datasheet -por ahora-\\n\\n1. [Optoacoplador - MOC3021](https://pdf1.alldatasheet.es/datasheet-pdf/view/53870/FAIRCHILD/MOC3021.html)\\n2. [Optoacoplador - 4N25](https://pdf1.alldatasheet.es/datasheet-pdf/view/158124/VISHAY/4N25.html)\\n3. [Triac - BT139](https://pdf1.alldatasheet.es/datasheet-pdf/view/16787/PHILIPS/BT139-600.html)"},{"id":"release/one","metadata":{"permalink":"/Hidroponia-Project/blog/release/one","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Notas/2024-8-1.md","source":"@site/blog/Notas/2024-8-1.md","title":"Comienzo del Proyecto","description":"Hidroponia - Project","date":"2024-08-01T00:00:00.000Z","tags":[{"label":"hola","permalink":"/Hidroponia-Project/blog/tags/hola"}],"readingTime":1.34,"hasTruncateMarker":false,"authors":[{"name":"Wolfsrudel","title":"All the Team","url":"https://github.com/Sartalan/Hidroponia-Project","imageURL":"https://img.desmotivaciones.es/202303/tonto-perro-imagenes.jpg","key":"Team"}],"frontMatter":{"slug":"release/one","title":"Comienzo del Proyecto","authors":["Team"],"tags":["hola"]},"unlisted":false,"prevItem":{"title":"Actualizaci\xf3n [ 1 ] | Circuito - Simulaci\xf3n","permalink":"/Hidroponia-Project/blog/release/two"}},"content":"## Hidroponia - Project\\n\\nComenz\xf3 nuestro **segundo** proyecto del a\xf1o como una empresa ficticia llamada *Wolfsrudel*.\\nSe trat\xe1 de una Hidroponia que ser\xe1 -\xeddoneamente- un sistema de control completo donde se monitorear\xe1 cada una de las m\xe1gnitudes esenciales que debe de necesitar una planta para desarrollarse adecuadamente. \\n\\nNuestra meta es la siguiente:\\n+ Montar una estructura que servir\xe1 para alojar las plantas y les permita una v\xeda de acceso a agua que est\xe1 siendo bombeada por una bomba, mientras a su vez se debe desarrollar un circuito que debe regular las m\xe1gnitudes fisicas e \xeddoneas que requiere cada tipo de planta. \\n\\n## \xbfC\xf3mo haremos \xe9sto?\\n\\nA ciencia cierta todav\xeda no lo sabemos e iremos averig\xfaandolo con el pasar del tiempo; pero nuestra propuesta es controlar una serie de sensores con un microcontrolador (mientras tanto, para las pruebas: el Arduino) y, para no gastar plata innecesariamente lo simularemos en **Proteus**.\\n\\n## \xbfC\xf3mo ser\xe1 la estructura? \\n\\nA ra\xedz de ver diversos videos de Youtube, nuestra idea es montar una estructura con ca\xf1os m\xe1s finos por un lado para subir el agua por una mini bomba y, que \xe9sta caiga, recorriendo as\xed todos los ca\xf1os donde se alojar\xe1n las plantas, los cuales ser\xe1n m\xe1s grandes. \\nPara ello aprovecharemos una estructura de metal prearmada que realizaron alumnos de Electr\xf3nica en el pasado para \xe9ste mismo proyecto.\\n\\nLa estructura ser\xe1 similar a:\\n\\n//Boceto\\n\\n---\\n\\nComo volvemos a repetir: no tomen \xe9ste blog como una informaci\xf3n completamente veraz respecto a nuestro proyecto; este puede cambiar al, justamente, no tener ni idea de lo que estamos haciendo contin\xfaamente.\\n*Habla la voz de la experiencia (\xb4\uff65_\uff65`)*"}]}')}}]);