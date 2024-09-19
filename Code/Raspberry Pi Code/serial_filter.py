import serial
import time
import json

ser = serial.Serial('/dev/ttyACM0', 9600, timeout=1.0)
time.sleep(3)
ser.reset_input_buffer()
print("Serial OK")

## El código detectará automáticamente la inserción de un nuevo sensor
## Lo único que debes de hacer es añadir un nuevo item al Array MySensorLectures
## (Importante no olvidarse)

MySensorLectures = ["Temperatura:", "Humedad:", "Caudal:", "LDR:", "Fuego:"] 
MySensorsTextSize = []

MySensorData = []

def Calculate_SensorNumberFunction(SensorsArray): ## Devuelve la cantidad de sensores en el Array
    Number = len(SensorsArray)
    return Number

SensorsNumber = Calculate_SensorNumberFunction(MySensorLectures)

def Filter(SensorsNumber):
        # Verifica el sí la variable ya se lleno de su cupo máximo de datos (4)
        # De ser así se ejecuta un bucle controlado que asigna los valores; en caso de
        # llenarse el cupo, todos los datos se eliminarán y se repetirá el bucle.
        if len(MySensorData) < SensorsNumber: 
            for i in range(SensorsNumber):
                if Sensor_Value.startswith(MySensorLectures[i]):  
                    # Verifica por cada salto de linea
                    # Sí comienza con los string del array "MySensorLectures"
                    MySensorData.append(Sensor_Value)
            
        else: 
                ## Acá se sobreescribirá el archivo con los datos
                ## Sí quieres otro sensor debes crear una variable manualmente y escribirlo acá
                #* Files
                Temperature_FILE = open("./Files/temperature.txt", "w")
                Humidity_FILE = open("./Files/humidity.txt", "w")
                Caudal_FILE = open("./Files/caudal.txt", "w")
                Light_FILE = open("./Files/light.txt", "w")
                Fuego_FILE = open("./Files/fuego.txt", "w")

                MyFinalValues = []
                ## Luego de haber filtrado los datos y haberle eliminado al array todos los strings
                ## Creo un nuevo array con solo los números y es lo único que mandó al archivo
                for i in range(SensorsNumber):
                    Data = MySensorData[i].strip(MySensorLectures[i])
                    MyFinalValues.append(Data)


                Temperature_FILE.write(MyFinalValues[0])
                Humidity_FILE.write(MyFinalValues[1])
                Caudal_FILE.write(MyFinalValues[2])
                Light_FILE.write(MyFinalValues[3])
                Fuego_FILE.write(MyFinalValues[3])
                print(MyFinalValues)
                Data = MyFinalValues
                print(MySensorData)
                MySensorData.clear()

                return Data

def ArrayWay(x): ## Bucle controlado que le asigna a un array el numero de carácteres del string
    Char = []
    for i in range (x):    
         Char.append(len(MySensorLectures[i])) ## Asigna el número de carácteres
    
    print(Char[0])


## ArrayWay(SensorsNumber) ## Llamada a la función | Argumento == Los sensores


try:
    while True:
        time.sleep(.25) ## Cada un segundo lee el puerto serial
        if ser.in_waiting > 0:
            line = ser.readline().decode('utf-8').rstrip()
            Sensor_Value = line ## Asigna los valores a Sensor_Value
            
            Data_To_Send = Filter(SensorsNumber)


            if Data_To_Send: ## if data == true | data != none
                Data = {
                    "temperatura": Data_To_Send[0],
                    "humedad": Data_To_Send[1],
                    "caudal": Data_To_Send[2],
                    "luz": Data_To_Send[3]
                }

                json_data = json.dumps(Data)
                json_file = open("data.json", "w")
                json_file.write(json_data)
        
     

            
except KeyboardInterrupt:
    print("Close Serial Communication")
    ser.close()
 # type: ignore