
#? Este es un script que se encarga de tomar los datos del archivo json
#? de los sensores y lo muestra en Mycodo; es muy sencillo. No se ejecuta al iniciar el servidor
#? solo es para copiar y pegar.

##? PRIMERA SECCIÓN DEL CÓDIGO | Sección superior | Bucle
## Los Widgets de MyCodo necesitan dos scripts de Python,
## el primero es el bucle que se repetirá aún sí ningún usuario 
## se encuentra conectado a la aplicación web.
## El segundo cuando el usuario sí lo esté.

# This code is executed first and every controller refresh period.
# This will be executed even after browser sessions have ended.

import json

PATH_TO_JSON_FILE = "/home/sarti/Documents/Communication/sensor.json" ##todo: Remplazar con la ubicación de tu json

FILE = open(PATH_TO_JSON_FILE, "r")
JSON_FILE = json.load(FILE)
Dict_Data = JSON_FILE
Data = Dict_Data["sensors"]["humedad"]

if not hasattr(self, "stored_value"): #type: ignore
    self.count = 0 ## type: ignore
    self.stored_value = None ## type: ignore
    self.return_string = None ## type: ignore

self.count += 1 # type: ignore
current_value = Data  # Generate a random integer between 0 and 100
self.return_string = "Veces del bucle: {count}<br> Último Valor: {last}<br>Nivel de Luz: {now}".format(count=self.count, last=self.stored_value, now=current_value) # type: ignore
self.stored_value = current_value # type: ignore


###! 

##? SEGUNDA SECCIÓN DEL CÓDIGO | Sección Inferior | User

# This code will only be executed when a browser session is open on the dashboard.
# This code may be executed many times by different browser sessions viewing the dashboard.

return self.return_string # type: ignore

##? ----------------------------------------
## Éste código debe ser ejecutado en los Input de MyCodo que permiten 
## entradas de script's de Python. Por lo tanto está aquí para ser copiado y pegado.