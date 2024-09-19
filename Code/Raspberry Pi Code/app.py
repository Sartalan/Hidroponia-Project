from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return 

@app.route("/HidroponicSensors")
def SensorData():
    SensorData = open("data.json", "r")
    jsonData = SensorData
    return jsonData