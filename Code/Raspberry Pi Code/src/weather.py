
##? Esta es una Estación Metereólogica que toma los valores
##? del Sense Hat, el cuál es un modulo de la Raspberry PI.

from sense_hat import SenseHat
import time

Sense = SenseHat()

Data = {}

while True:
    time.sleep(.5)
    Temperature = Sense.get_temperature()
    Humidity = Sense.get_humidity()
    Pressure = Sense.get_pressure()

    Data = {
        "Weather_Temperature" : (Temperature),
        "Weather_Temperature" : (Humidity),
        "Weather_Temperature" : (Pressure),
    }

    
