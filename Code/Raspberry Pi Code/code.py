import serial
import time

ser = serial.Serial('/dev/ttyACM0', 9600, timeout=1.0)
time.sleep(3)
ser.reset_input_buffer()
print("Serial OK")


MySensorLectures = ["Temperatura:", "Humedad:", "Caudal:", "LDR:"]
MySensorsTextSize = []
SensorsNumber = 4

MySensorData = []

def ArrayWay(x): ## Bucle controlado que le asigna a un array el numero de carácteres del string
    Char = []
    for i in range (x):    
         Char.append(len(MySensorLectures[i])) ## Asigna el número de carácteres
    
    print(Char[0])


ArrayWay(SensorsNumber) ## Llamada a la función | Argumento == Los sensores


try:
    while True:
        time.sleep(.25) ## Cada un segundo lee el puerto serial
        if ser.in_waiting > 0:
            line = ser.readline().decode('utf-8').rstrip()
            Sensor_Value = line ## Asigna los valores a Sensor_Value
            
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
                #* Files
                Temperature_FILE = open("./Files/temperature.txt", "w")
                Humidity_FILE = open("./Files/humidity.txt", "w")
                Caudal_FILE = open("./Files/caudal.txt", "w")
                Light_FILE = open("./Files/light.txt", "w")

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
                print(MyFinalValues)
                print(MySensorData)
                MySensorData.clear()

            
except KeyboardInterrupt:
    print("Close Serial Communication")
    ser.close()
