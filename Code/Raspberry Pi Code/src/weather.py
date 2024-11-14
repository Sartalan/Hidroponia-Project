#! Explicación
#? Este script se encarga de manipular al modulo de la Raspberry "Sense Hat"
#? En el proceso se crea una estación metereológica y se muestran pixel art 
#? En pantalla.

from sense_hat import SenseHat

import json
import time
import socket

def Server_IP():
    host = socket.gethostname()
    IP = socket.gethostbyname(host)

    Data = (IP) + ":5000"
    print(Data)

Server_IP()

DICT_DATA = {
    "station": {
        "humidity": 0,
        "temperature" : 0,
        "pressure" : 0
    }
}

Sense = SenseHat()
Sense.low_light = True


fondo = (0,188,212)
rosa1 = (247,183,205)
rosaclaro = (252,126,172)
rosatenue = (245,79,137)
rosafuerte = (197,17,98)
otrorosa = (216,27,96)

negro = (0,0,0)
ojo = (63,81,181)

def Pacman():
   A1 = (249, 183, 1)
   B1 = (255,255,255)
   NE = (0,0,0)

   logo = [
 B1, B1, A1, A1, A1, A1, B1, B1,
B1, A1, A1, A1, A1, A1, A1, B1,
A1, A1, A1, A1, A1, B1, B1, B1,
A1, A1, A1, B1, B1, B1, B1, B1,
A1, A1, A1, A1, A1, B1, B1, B1,
A1, A1, A1, A1, NE, A1, A1, A1,
B1, A1, A1, A1, A1, A1, A1, B1,
 B1, B1, A1, A1, A1, A1, B1, B1,  ] 
   return logo

def Yoshi():   
   V1 = (124,179,66)
   V2 = (104, 159, 56)
   N1 = (255,87,34)
   B1 = (255,255,255)
   G1 = (224, 224, 224)
   R1 = (244, 67, 54)
   R2 = (183,28,28)
   C1 = (187, 222, 251)
   VI = (136,14,79)
   NE = (0,0,0)

   logo = [
   C1, C1, R2, R2, C1, VI, VI, C1,
C1, V2, V1, V2, G1, G1, V2, V2, 
V2, N1, V2, V2, G1, G1, V2, C1,
C1, C1, R1, G1, B1, B1, B1, C1,
C1, N1, B1, B1, V1, V1, V1, V1,
C1, C1, B1, B1, V1, V1, V1, V1,
C1, N1, V1, NE, V1, V1, V1, V1,
 C1, C1, N1, V1, V2, V1, C1, C1,
    ]
   return logo

def Kirby():
    F = fondo
    OR = otrorosa
    N = negro
    V = ojo
    R1 = rosa1
    RT = rosatenue
    RC =  rosaclaro
    RF = rosafuerte

    logo = [
    F, RF, OR, OR, F, RF, OR, F,
   F, RF, RC, RC, R1, R1, RF, F,
      RC, RC, RT, R1, R1, R1, RT, F,
     RC, R1, R1, V, R1, V, R1, RC,
    F, RC, R1, N, R1, N, R1, RC,
    F, R1, R1, R1, R1, R1, R1, F,
     F, F, R1, R1, R1, R1, F, F,
     F, F, F, F, F, F, F, F,

    ]
    return logo



def Link():
  V1 = (0,230,118)
  V2 = (76,175,80)
  A1 = (255,235,59)
  N1 = (255,193,7)
  P1 = (255,224,178)
  G1 = (207, 216, 220)
  C1 = (3,169,244)
  M1 = (93,64,55)
  NE = (0,0,0)
  
  logo = [
 NE, NE, M1, NE, NE, M1, NE, NE,
NE, P1, V2, V1, V1, V2, NE, G1,
C1, C1, C1, M1, N1, M1, V2, G1,
NE, G1, V1, V1, P1, V2, NE, G1,
NE, G1, NE, P1, P1, P1, P1, NE,
V2, G1, P1, A1, NE, P1, NE, NE,
NE, G1, V1, A1, P1, A1, A1, N1,
NE, NE, V1 ,V1, A1, A1, N1, NE, 
  ]
  
  return logo

FILE_TO_UPLOAD = "./data/weather.json"
Data = {}

## for i in range(1):
##   Sense.show_message("192.168.50:5000") ##todo: Mostrar la IP

Sense.set_pixels(Pacman())

# for i in range 5:
# time.sleep(5)
# Sense.set_pixels(Kirby())

time.sleep(1)

while True:
    time.sleep(.5)
    Temperature = Sense.get_temperature()
    Humidity = Sense.get_humidity()
    Pressure = Sense.get_pressure()
    
    Rounded_Temperature = round((Temperature), 1)
    Rounded_Humidity = round(Humidity, 1)
    Rounded_Pressure = round(Pressure, 1)

    DICT_DATA.update({
      "station" : {
          "temperature" : (Rounded_Temperature),
          "humidity" : (Rounded_Humidity),
          "pressure" : (Rounded_Pressure),
      }
    })
    
    JSON_FILE = open(FILE_TO_UPLOAD, 'w')

    JSON = json.dump(DICT_DATA, JSON_FILE, indent=6)

    JSON_FILE.close()

    print(DICT_DATA["station"])


    
