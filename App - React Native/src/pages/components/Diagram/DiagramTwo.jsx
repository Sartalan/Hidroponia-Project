import { Dimensions, Text } from "react-native";
import { DiagramStyle } from "../../../styles/screens/DiagramStyle";
import {ContributionGraph} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;
const backgroundChart = '#121212'
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year

//? Graph Example Data | Dont Modify this Code
//?-------------------------------------------

const commitsData = [
  { date: "2024-01-02", count: 1 },
  { date: "2024-01-03", count: 1 },
  { date: "2024-01-04", count: 1 },
  { date: "2024-01-05", count: 1 },
  { date: "2024-01-06", count: 1 },
  { date: "2024-01-30", count: 1 },
  { date: "2024-01-31", count: 1 },
  { date: "2024-03-01", count: 1 },
  { date: "2024-04-02", count: 1 },
  { date: "2024-03-05", count: 1 },
  { date: "2024-02-30", count: 1 }
];


export function DiagramTwo() {
  return (
    <>
      <ContributionGraph
        style={DiagramStyle.chartGraph}
        values={commitsData}
        endDate={new Date((year) + "-" + (month + 3) + "-01")}
        numDays={100}
        width={screenWidth - 20}
        height={225}
        chartConfig={{
          backgroundGradientFrom: (backgroundChart),
          backgroundGradientTo: (backgroundChart),
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(100, 100, 200, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
      />
      <Text style={DiagramStyle.text}>Dias de Riego</Text>
    </>
  )
}