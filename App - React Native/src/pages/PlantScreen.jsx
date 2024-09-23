import { Text, View, Button } from 'react-native'
import { PlantOne } from './components/PlantAnimation.jsx';
import { GeneralStyles } from '../styles/GeneralStyles.jsx'
import { PlantStyle } from '../styles/screens/PlantStyle.jsx'
import { useEffect, useState } from 'react';


var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year



export function PlantScreen() {

  const [connection, setConnection] = useState(true)

  const [image, setImage] = useState("https://reactnative.dev/img/tiny_logo.png")
  const [plant, setPlant] = useState("Name")
  const [counter, setCounter] = useState(0)
 
  useEffect(() => {
    fetch('http://10.0.11.184:5000/')
    .then((response) => response.json())
    .then((res) => {
      console.log(res)
      setPlant(res[0])
      setImage(res[1])
      console.log(image)
      setConnection(false)
      setTimeout(() => setCounter(counter + 1), 1000);
    })
  },[counter])

  switch(connection) {
    case true: 
      return (
      <View style={GeneralStyles.container}>
        <Text style={{color:'#fff', fontSize: 50}}>No hay conexión</Text>
      </View>
      )
    case false:
      return (
        <View style={GeneralStyles.container}>
    
          <PlantOne 
            name={plant}
            imagen={image}
          />
    
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

}








