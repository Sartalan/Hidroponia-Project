import serial
import time
import json

##? El código detectará automáticamente la inserción de un nuevo sensor
##? Lo único que debes de hacer es añadir un nuevo item al Array MY_SENSOR_LECTURES 
##? y aumentar el valor de la variable NUMBER (Importante no olvidarse).

MY_SENSOR_LECTURES = ["Temperatura:", "Humedad:", "Caudal:", "LDR:", "Fuego:"] 
BAUD_RATE = 9600
USB = "ttyACM0"
NUMBER = 4
FILE_TO_UPLOAD = "./src/data/hidroponia_uno.json"
DICT_DATA = {
    "name" : "Hidroponia_uno",
    "plant": "Lechuga",
    "plantimg" : "https://media.istockphoto.com/id/1266964720/vector/seeding-icon-sprout-ecology-concept-vector-on-isolated-white-background-eps-10.jpg?s=612x612&w=0&k=20&c=KKkyRCHrelQdswqrNE4Qpg27d028cnWeEalo4BpoXg4=",
    "sensors": {
        "temperatura" : 0,
        "humedad" : 0,
        "caudal" : 0,
        "light" : 0,
        "fuego" : 0,
        ##? For add later
    }
}

SER = serial.Serial('/dev/' + USB, BAUD_RATE, timeout=1.0)
time.sleep(3)
SER.reset_input_buffer()
print("Serial OK")

MySensorData = []

def Calculate_SensorNumberFunction(Data): ## Devuelve la cantidad de sensores en el Array
    Number = len(Data)
    return Number

Real_Sensor_Number = Calculate_SensorNumberFunction(MY_SENSOR_LECTURES)
print(Real_Sensor_Number)
##?
Sensors = []
MySensorData = []
Data = []
MyFinalValues = []
MyNumericValues = []

try:
    while True:
        time.sleep(.25) ## Cada un segundo lee el puerto serial
        if SER.in_waiting > 0:
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
                        "fuego" : (MyFinalValues[3]),
                }})
                
                except IndexError:
                    pass

                JSON_FILE = open(FILE_TO_UPLOAD, 'w')

                JSON = (json.dump(DICT_DATA, JSON_FILE, indent=6)) ## Write file

                print(JSON)
                JSON_FILE.close()

                MyFinalValues.clear()
                MySensorData.clear()
        
     

            
except KeyboardInterrupt:
    print("Close Serial Communication")
    SER.close()
 # type: ignore