import { Dimensions, Text } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { DiagramStyle } from "../../../styles/screens/DiagramStyle";
const screenWidth = Dimensions.get("window").width;
const backgroundChart = '#121212'
const watered = "#A3C7D6"
const humidity = "#3F3B6C"
const temperature = "#9F73AB"

//? Graph Example Data | Dont Modify this Code
//?-------------------------------------------

let data = {
  labels: ["watered", "humidity", "temperature"], // optional
  data: [0.2, 0.6, 0.8],
  colors: [(watered), (humidity), (temperature)]
};

export function DiagramOne() {


  return (
    <>
      <ProgressChart
        style={DiagramStyle.chartGraph}
        data={data}
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
}

