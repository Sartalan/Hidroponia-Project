import { Text, View, Button } from 'react-native'
import { PlantOne } from './components/PlantAnimation.jsx';
import { GeneralStyles } from '../styles/GeneralStyles.jsx'
import { PlantStyle } from '../styles/screens/PlantStyle.jsx'


var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year

export function PlantScreen() {

  const Manzana = () => {
    console.log("soh goloso eee pibe")
  }

  return (
    <View style={GeneralStyles.container}>

      <PlantOne />
      <Button onPress={Manzana} title='Tocame 7w7' />



      <View style={PlantStyle.bottomContainer}>
        <View style={PlantStyle.bottomBox}>
          <Text style={PlantStyle.bottomText}>{date + ' /'}</Text>
          <Text style={PlantStyle.bottomText}>{month + ' /'}</Text>
          <Text style={PlantStyle.bottomText}>{year}</Text>
        </View>
      </View>
    </View>

  )
}








