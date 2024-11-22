import { Dimensions, Text, View } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { DiagramStyle } from "../../../styles/screens/DiagramStyle";
import { useEffect, useState } from "react";
const screenWidth = Dimensions.get("window").width;
const backgroundChart = '#121212'
const watered = "#A3C7D6"  
const humidity = "#5FA8D3"
const temperature = "#9F73AB"

//? Graph Example Data | Dont Modify this Code
//?-------------------------------------------


export function DiagramOne() {
//* Connection Status  
  const [isLoading, setIsLoading] = useState(true)
//? Received Data
  const [temperatureData, setTemperatureData] = useState(0)
  const [humidityData, setHumidityData] = useState(0)
  const [caudalData, setCaudalData] = useState(0)
  const [lightData, setLightData] = useState(0)
//? Transformed Data to Monitoring
  const [counter, setCounter] = useState(0)

  

  useEffect(() => {
    fetch("http://192.168.50.11:5000/Hidroponia")
      .then((response) => response.json())
      .then((jsondata) => {
        //console.log(jsondata)
        const localTemp = jsondata.sensors.temperatura
        const localHumidity = jsondata.sensors.humedad
        const localCaudal = jsondata.sensors.caudal
        const localLight = jsondata.sensors.light

        const dataLength = Object.keys(jsondata).length
        console.log(dataLength)

        
          setTemperatureData(localTemp)
          setHumidityData(localHumidity)
          setCaudalData(localCaudal)
          setLightData(localLight)
        

         setIsLoading(false)
      });

      setTimeout(() => setCounter(counter + 1), 1000);
  }, [counter]);

  

  const diagramData = {
    labels: ["watered", "humidity", "temperature"], // optional
    data: 
    [
      (humidityData / 50),
      (caudalData / 50), 
      (temperatureData / 50)
    ],
    colors: [(watered), (humidity), (temperature)]
  };

  switch (isLoading) {

    case true: 
        return ( 
         <>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: '#fff', fontSize: 50, textAlign: 'center'}}>No hay conexión</Text>
          </View>
         </>
        )

    case false: 
      return (
        <>
      <Text style={DiagramStyle.text}>Hidroponia</Text>

      <ProgressChart
        style={DiagramStyle.chartGraph}
        data={diagramData}
        width={screenWidth - 20}
        height={250}
        strokeWidth={10}
        radius={30}
        chartConfig={{
          backgroundColor: (backgroundChart),
          backgroundGradientFrom: (backgroundChart),
          backgroundGradientTo: (backgroundChart),
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(250, 100, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForLabels: {
            fill: 'white',
            fontSize: 20,
          }
        }}
        hideLegend={true}
        withCustomBarColorFromData
      />
      <View style={DiagramStyle.otherView}>
        <View style={DiagramStyle.inView}><Text style={[DiagramStyle.otherText, {backgroundColor: temperature}]}>{temperatureData} °C</Text></View>
        <View style={DiagramStyle.inView}><Text style={[DiagramStyle.otherText, {backgroundColor: humidity}]}>{caudalData} l/m</Text></View>
        <View style={DiagramStyle.inView}><Text style={[DiagramStyle.otherText, {backgroundColor: watered}]}>{humidityData} v/r</Text></View>
      </View>

      <Text style={DiagramStyle.text}>Wheater Station</Text>
      <Text style={DiagramStyle.text}>"(Más gráficos)"</Text>
  
    </>
  )
}}

