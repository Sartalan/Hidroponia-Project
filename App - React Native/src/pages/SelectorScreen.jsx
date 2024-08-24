import * as React from 'react';
import { View, Text, Image } from 'react-native'
import { GeneralStyles } from '../styles/GeneralStyles'

export function SelectorScreen() {
  return (
    <View style={GeneralStyles.container}>
      <Text style={GeneralStyles.text}>
        Shuffle
      </Text>
      <Image
        source={require('./../../assets/shuffle.png')}
        style={{ width: 100, height: 100 }}
      />
    </View>

  )
}