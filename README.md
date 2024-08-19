# Hidroponia-Project

Proyecto creado por Electrónica. 

Se trata de una hidroponia que medirá diferentes mágnitudes del agua para tener control sobre ella.
Se busca - *idoneamente* - el control absoluto de esta.

## Código. Explicación.

En primeras antes de hablar del código debemos de hablar del circuito; consta 2 partes: una de monitoreo y otra de control, en la primera se busca tener la lectura constante de la onda senoidal para determinar sí está cruza por cero y en la segunda se busca "Disparar" hacía la onda senoidal para cortarla, y poder así **regular su intensidad**

¿Cómo la parte de control logra esto?

Ahora sí, empecemos con el código. 
Para poder determinar cuando disparar o no por el código, básicamente se la divide a la onda senoidal en varias partes.
En primeras se calcula su periodo, utilizando para ello la cuenta:

![Ecuación](./Ref/CalculoUno.png)

+ Luego se la divide en 360 partes para tener

![Ecuación](./Ref/CalculoDos.png)
