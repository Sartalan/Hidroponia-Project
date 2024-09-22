import { Dimensions, Text, View } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { DiagramStyle } from "../../../styles/screens/DiagramStyle";
import { useEffect, useState } from "react";
const screenWidth = Dimensions.get("window").width;
const backgroundChart = '#121212'
const watered = "#A3C7D6"
const humidity = "#3F3B6C"
const temperature = "#9F73AB"

//? Graph Example Data | Dont Modify this Code
//?-------------------------------------------


export function DiagramOne() {
  

  
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(1)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    fetch("http://192.168.50.109:5000/Sensor")
      .then((response) => response.json())
      .then((jsondata) => {
         console.log(jsondata.temperatura)
         const num = (jsondata.temperatura / 10)
         console.log(num)  
         setData(Number(num))
         setIsLoading(false)
      });

      setTimeout(() => setCounter(counter + 1), 1000);
  }, [counter]);

  

  const diagramData = {
    labels: ["watered", "humidity", "temperature"], // optional
    data: [(data), 0.3, 0.8],
    colors: [(watered), (humidity), (temperature)]
  };

    if (isLoading) {
      return ( 
        <Text style={{color: '#fff', fontSize: 50, textAlign: 'center'}}>Estoy esperando datos</Text>
      )
    }

    else {
      return (
        <>
        <Text style={{color: '#fff', fontSize: 50, textAlign: 'center'}}>"Modo Datos"</Text>

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
      <Text style={DiagramStyle.text}>Sensores</Text>
    </>
  )
}}
