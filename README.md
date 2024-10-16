# Importante

Fork de la aplicación que se desarrolló para el Indoor antes de que se cancelará. 

La App ya se encuentra semi-avanzada, sí se quiere ver su seguimiento hasta este punto desde el primer commit del proyecto, este se encuentra ![aquí](https://github.com/Sartalan/Indoor-Project/tree/App)


## App 

Primero: La aplicación esta creada con React Native. ¿Qué es React Native? Este es un framework que te permite codear una aplicación de celular con una sintáxis similar a la libreria "React" que se utiliza para crear webs. React fue creado por Facebook (actualmente Meta) al igual que React Native. Al "fracasar" React Facebook, en su momento, decidió abandonar el proyecto, pero volverlo Open Source. A la comunidad le gustó su sintáxis que terminaron por mejorarlo. En la actualidad es una buena herramienta para codear aplicaciones, algo limitada; pero cumple su función de crear aplicaciones sencillas, después de todo, ¿Cuántas empresas *realmente* quieren una aplicación compleja para sus sistemas? la respuesta es: pocas. Por lo tanto React Native tiene buena -o más bien, decente- salida laboral.

## ¿Por qué React Native?

Sencillo. Porque nuestra aplicación es justamente sencilla. Se trata de una aplicación de monitoreo de datos -principalmente- que con mucha suerte llegaría a repercutir en nuestro proyecto con una limitada cantidad de acciones.

## Código

El código es decente y sencillo si estas metido en el tema. Explicar linea por linea no tendría sentido, en cambio, prefiero gráficarlo para que su lectura sea más sencilla para quién quiera avanzarlo.
Para quien no entienda porque lo hago; es importante gráficarlo, React -y React Native- tienen la particularidad de funcionar de forma jerárquica a la hora de renderizar gráficos en pantalla.

![Diagrama de App | Jerarquía de Componentes](./Info/App.png)

Como se ve, la comunicación entre las partes es algo *caótica*. Esto es debido a que no manejé el estado de la aplicación de manera global, terminando por haber una serie de multiples endpoints en toda la aplicación, esto justamente *no es una buena práctica.* Una forma de solucionarlo -y que me gustaría traer en un futuro- es la integración de Redux como biblioteca de manejo de estado global. 

Y... ¿Por qué todavía no lo hice? Sencillo: no tengo el tiempo. El proyecto avanzó mucho, y una de las partes más abandonadas del proyecto en consecuencia fue justamente la aplicación, no creo que seamos capaces de refactorizar la aplicación por completo a tiempo, pero fue un buen aprendizaje y para lo que es cumple su función. La implementación de Redux solo tendría sentido si tuviesemos planeadas muchas más integraciones para la aplicación, pero ese no es *tanto* el caso.


De igual forma pensamos que es importante mencionarlo por sí alguien en un futuro planea continuar la Hidroponia.