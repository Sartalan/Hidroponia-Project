#! Explicación

#? Este script se encarga de manejar el envío y recibo de datos en un USB determinado.
#? Recibe los datos de los sensores y los filtra, subiendolos a un archivo JSON
#? Simúltaneamente toma el horario local y se encarga de prender o apagar la lampara UV
#? Envíandole un dato serial al microcontrolador.

from datetime import datetime
import serial
import time
import json
import threading
##? El código detectará automáticamente la inserción de un nuevo sensor
##? Lo único que debes de hacer es añadir un nuevo item al Array MY_SENSOR_LECTURES 
##? y aumentar el valor de la variable NUMBER (Importante no olvidarse).

MY_SENSOR_LECTURES = ["Temperatura:", "Humedad:", "Caudal:", "LDR:"] 
BAUD_RATE = 9600
USB = "ttyUSB0"
NUMBER = 4
FILE_TO_UPLOAD = "./data/hidroponia_uno.json" ##? Ruta desde app.py
DICT_DATA = {
    "name" : "Hidroponia_uno",
    "plant": "Lechuga",
    "plantimg" : "https://media.istockphoto.com/id/1266964720/vector/seeding-icon-sprout-ecology-concept-vector-on-isolated-white-background-eps-10.jpg?s=612x612&w=0&k=20&c=KKkyRCHrelQdswqrNE4Qpg27d028cnWeEalo4BpoXg4=",
    "sensors": {
        "temperatura" : 0,
        "humedad" : 0,
        "caudal" : 0,
        "light" : 0,        ##? For add later
    }
}



##! Comienzo del código

SER = serial.Serial('/dev/' + USB, BAUD_RATE, timeout=1.0)
time.sleep(3)
SER.reset_input_buffer()
print("Serial OK")

##? Sensor Number Function()
MySensorData = []
def Calculate_SensorNumberFunction(Data): ##? Devuelve la cantidad de sensores en el Array
    Number = len(Data)
    return Number


##? Light Trigger Function()
LIGHT_ON_OFF = bool
ON_PERIOD_HOUR = 12 ## Encendido de 0 a <Variable> Hora.

CURRENT_TIME = {
   "time": {
    "hour" : "",
    "min" : "",
   }
}

Real_Sensor_Number = Calculate_SensorNumberFunction(MY_SENSOR_LECTURES)
print(Real_Sensor_Number)
##?
Sensors = []
MySensorData = []
Data = []
MyFinalValues = []
MyNumericValues = []

def SendData():
    start = time.time()
    switch = False

    while True:
        time.sleep(2)
        now = datetime.now()

        current_hour = now.hour
        current_min = now.minute

    ##now = now.strftime("%H:%M:%S")
        CURRENT_TIME.update({"time" : {
            "hour" : current_hour,
            "min" : current_min
        }})

    ##print(CURRENT_TIME["time"]["hour"])

        HOUR = int((CURRENT_TIME["time"]["hour"]))
        MINUTES = int(CURRENT_TIME["time"]["min"])

        if(HOUR >= 12): 
            LIGHT_ON_OFF = True
            SER.write(b"Lamp_ON\n")
            print("Lamp_ON")
        else:
            LIGHT_ON_OFF = False
            SER.write(b"Lamp_OFF\n")
            print("Lamp_OFF")

        tiempo_transcurrido = time.time() - start
        if tiempo_transcurrido >= 60*5:
            switch = not switch
            start = time.time()

        if switch == False:
            SER.write(b"Bomba_OFF\n")
            print("Bomba_OFF")
        else:
            SER.write(b"Bomba_ON\n")
            print("Bomba_ON")

        # print(switch)

        

        # print(LIGHT_ON_OFF)
        # match LIGHT_ON_OFF:
        #     case True:
        #         ##serial blabla
        #         print("Mandó que se encienda")
        #         SER.write(b"ON\n")
        #     case False:
        #         print("Mando que se apagué")
        #         SER.write(b"OFF\n")



def ReceiveData():
    while True:
        time.sleep(1) ## Cada un segundo lee el puerto serial
        if SER.in_waiting > 0:
            # print("me ejecuto")
            line = SER.readline().decode('utf-8').rstrip().strip().replace('-','')
            Sensor_Value = line ## Asigna los valores a Sensor_Value
            if len(MySensorData) < Real_Sensor_Number:
                for i in range(Real_Sensor_Number):
                    if Sensor_Value.startswith(MY_SENSOR_LECTURES[i]):
                        MySensorData.append(Sensor_Value)

            else: ## Sí supera la cantidad de Sensores
                for i in range(Real_Sensor_Number):
                    Data = MySensorData[i].strip(MY_SENSOR_LECTURES[i]) ##Elimina números
                    try:
                        MyFinalValues.append(float(Data))
                    except ValueError:
                        MyFinalValues.clear()


               
                print(MyFinalValues)
                
                try:
                    DICT_DATA.update({"sensors" : {
                        "temperatura" : (MyFinalValues[0]),
                        "humedad" : (MyFinalValues[1]),
                        "caudal" : (MyFinalValues[2]),
                        "light" : (MyFinalValues[3]),
                }})
                
                except IndexError:
                    pass

                JSON_FILE = open(FILE_TO_UPLOAD, 'w')

                JSON = (json.dump(DICT_DATA, JSON_FILE, indent=6)) ## Write file

                print(JSON)
                JSON_FILE.close()

                MyFinalValues.clear()
                MySensorData.clear()

                ##Light_Trigger()

hilo_send_data = threading.Thread(target = SendData)
hilo_receive_data = threading.Thread(target = ReceiveData)

time.sleep(5)
try:
          
  hilo_receive_data.start() 
  hilo_send_data.start()     
            
except KeyboardInterrupt:
    print("Close Serial Communication")
    SER.close()
 # type: ignore
threading
