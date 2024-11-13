#! Explicación

#? Soy el script que ejecuta los demás script's de la carpeta 'src/'
#? Además, soy un servidor HTTP creado con flask que se ejecuta con:
#? "flask run --host=0.0.0.0".


from flask import Flask # type: ignore
import subprocess 
import time
import json
import socket
import psutil

##? Obtiene la IP Local
Host = socket.gethostname()
Local_IP = socket.gethostbyname(Host)

List_IP = []
##todo: Copiar y pegar este código al script del Sense Hat
##? Obtiene todas las interfaces de red y sus direcciones IP
IP = psutil.net_if_addrs()

for interface, addr_info in IP.items():
    for addr in addr_info:
        ##? Filtrar solo las direcciones IPv4 que no sean la local | (Local_IP)
        if addr.family == socket.AF_INET and addr.address != Local_IP:
            ## print(f"Interfaz: {interface} - IP: {addr.address}")
            List_IP.append(addr.address)

print(List_IP) 
##? Printea todas; almacena la de valor [0]
IP_DATA = List_IP[0]

##? ---
##? Obtiene las direcciones de IP públicas brindadas
##? Por el router y las compara con la IP Local; si ésta
##? Es diferente, la almacena en una lista. La IP[0] de la 
##? Lista será la mostrada en pantalla.
##todo: Este modo de resolver el problema podría generar un bug sí 
##todo: Hay más de una interfáz wifi en el servidor; se debe tener en cuenta.
##* ----------------------------------
##* Este es el archivo main a ejecutar

subprocess.Popen(["python3", "./src/serial_communication.py"],
                ## stderr=subprocess.DEVNULL,
                ## stdout=subprocess.DEVNULL             
                 )
##TODO: Sí falla el ejecutado de los scripts de Python
##TODO: Tener en cuenta que la ruta de los archivos a abrir dentro de los scripts 
##TODO: es desde ESTE archivo; no desde los scripts.
#! Para debuguear borrar los subprocess
#! Indican sí querés sus logs o no.
time.sleep(.5)

## Servidor y API tanto para la aplicación como
## Para el programa realizado con Tauri

##? Hidroponia - Data

JSON_FILE_TO_READ = "./src/data/hidroponia_uno.json"
MY_SENSOR_LECTURES = ["Temperatura:", "Humedad:", "Caudal:", "LDR:"] 


app = Flask(__name__)


if __name__ == '__main__':
    app.run(debug=True, port=5001)
@app.route("/")
def hello_world():
    return "/"

@app.route("/Hidroponia")
def SensorData():
   
   JSON_DATA = open(JSON_FILE_TO_READ, "r")
   Data = json.load(JSON_DATA)
   print(Data)
   return Data



  # Obtiene la IP local del servidor

##? Lee la IP local 

# def Server_IP():
#     host = socket.gethostname()
#     IP = socket.gethostbyname(host)
#
#     Data = (IP) + ":5000"
#     print(Data)
# Server_IP()
#

## Habilitar .env
## Instalar Flask con pip (Reinstalar pyserial en el proyecto)
