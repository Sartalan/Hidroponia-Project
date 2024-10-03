import subprocess 
import time
import json
import socket

from flask import Flask # type: ignore

##* Este es el archivo main a ejecutar



subprocess.Popen(["python3", "./src/filter.py"],
                 stderr=subprocess.DEVNULL,
                 stdout=subprocess.DEVNULL             
                 )

time.sleep(.5)

## Servidor y API tanto para la aplicación como
## Para el programa realizado con Tauri

##? Hidroponia - Data

JSON_FILE_TO_READ = "./src/data/hidroponia_uno.json"
MY_SENSOR_LECTURES = ["Temperatura:", "Humedad:", "Caudal:", "LDR:"] 


app = Flask(__name__)


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

def Server_IP():
    host = socket.gethostname()
    IP = socket.gethostbyname(host)

    Data = (IP) + ":5000"
    print(Data)
Server_IP()

## Habilitar .env
## Instalar Flask con pip (Reinstalar pyserial en el proyecto)
