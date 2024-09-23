import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react';
import { GeneralStyles } from '../styles/GeneralStyles';

export function SettingsScreen() {

  
  const [text, setText] = useState('');
 
  return (
    <>
      <View style={[GeneralStyles.container, {justifyContent: 'space-between'}]}>
       <TextInput
        style={Style.input}
        placeholder="http://<YourServerIP:5000>"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        />
      <Text style={[Style.text, {fontFamily: 'serif', fontStyle: 'italic'}]}>
        Your server is: 
      </Text>
      <Text style={[Style.text, {textAlign:'center', color:'#000', backgroundColor: '#A5D8FF', padding: 15, width: 300, borderRadius: 10, margin: 50}]}>
        {text}
      </Text>
    </View>
    </>
  )
}

const Style = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    width: 350,
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    margin: 20
  },
  text: {
    padding: 10,
    fontSize: 30,
    color: '#fff'
  }
})



    // if (connection == true) {
    //   return <Text style={{ color: '#fff', fontSize: 50 }}>{text}</Text>
    // } {connection ? text : 'Desconectado'} // es lo mismo

    // else {
    //   return <Text style={{ color: '#fff', fontSize: 50 }}>Desconectado</Text>
    // }

    //? Código comentado con el objetivo de aprender (っ▀¯▀)つ







    // <View style={GeneralStyles.container}>
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //       <Text style={{ 
    // color: '#FFFFFFA1',
    // fontSize: 25,
    // fontStyle: 'italic',
    // fontFamily: 'serif',
    // }}>Coming soon...</Text>
    //   </View>
    // </View>

