from sense_hat import SenseHat
import json
import time

DICT_DATA = {
    "station": {
        "humidity": 0,
        "temperature" : 0,
        "pressure" : 0
    }
}

Sense = SenseHat()
Sense.low_light = True

green = (0, 255, 0)
yellow = (255, 255, 0)
blue = (0, 0, 255)
red = (255, 0, 0)
white = (255,255,255)
nothing = (0,0,0)
pink = (255,105, 180)

def Plant():
    G = green
    Y = yellow
    B = blue
    O = nothing
    Logo = [
    O, O, O, O, O, O, O, O,
    O, Y, Y, Y, B, G, O, O,
    Y, Y, Y, Y, Y, B, G, O,
    Y, Y, Y, Y, Y, B, G, O,
    Y, Y, Y, Y, Y, B, G, O,
    Y, Y, Y, Y, Y, B, G, O,
    O, Y, Y, Y, B, G, O, O,
    O, O, O, O, O, O, O, O,
    ]
    return Logo
    
FILE_TO_UPLOAD = "./data/weather.json"
Data = {}

Sense.set_pixels(Plant())

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


    