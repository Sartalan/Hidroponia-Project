from datetime import datetime
import time
import serial

# datetime object containing current date and time
 
## print("now =", now)

LIGHT_ON_OFF = bool
ON_PERIOD_HOUR = 12 ## Encendido de 0 a <Variable> Hora.
USB = "ttyACM0"
BAUD_RATE = 9600

CURRENT_TIME = {
   "time": {
    "hour" : "",
    "min" : "",
   }
}
# dd/mm/YY H:M:S
Serial = serial.Serial()
Serial.port = USB
Serial = serial.Serial('/dev/' + USB, BAUD_RATE, timeout=1.0)

while True:
    time.sleep(20)
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

    if(HOUR <= 12): 
        LIGHT_ON_OFF = True
    else:
        LIGHT_ON_OFF = False


    match LIGHT_ON_OFF:
        case True:
            ##serial blabla
            print("Mandó que se encienda")
            Serial.write(b"ON\n")
        case False:
            print("Mando que se apagué")
            Serial.write(b"OFF\n")
    
    time.sleep(10)

        

    
     


