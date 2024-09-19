

##! PRIMERA SECCIÓN DEL CÓDIGO | Sección superior | Bucle
## Los Widgets de MyCodo necesitan dos scripts de Python,
## el primero es el bucle que se repetirá aún sí ningún usuario 
## se encuentra conectado a la aplicación web.
## El segundo cuando el usuario sí lo esté.

# This code is executed first and every controller refresh period.
# This will be executed even after browser sessions have ended.


## En este ejemplo abre el archivo de texto que contendrá el valor de la humedad.
FILE = open("/home/sarti/Documents/Communication/humidity.txt")
if not hasattr(self, "stored_value"):  # Initialize objects saved across executions
    self.count = 0
    self.stored_value = None
    self.return_string = None

self.count += 1
current_value = FILE.read()  
self.return_string = "Veces del bucle: {count}<br> Último Valor: {last}<br>Nivel de Humedad: {now}".format(count=self.count, last=self.stored_value, now=current_value)
self.stored_value = current_value

##! SEGUNDA SECCIÓN DEL CÓDIGO | Sección Inferior | User

# This code will only be executed when a browser session is open on the dashboard.
# This code may be executed many times by different browser sessions viewing the dashboard.

return self.return_string

##? ----------------------------------------
## Éste código debe ser ejecutado en los Input de MyCodo que permiten 
## entradas de script's de Python. Por lo tanto está aquí para ser copiado y pegado.
