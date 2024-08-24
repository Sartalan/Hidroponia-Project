import React from 'react';
import {StatusBar} from 'react-native'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import {MyTabs } from './src/Main'
import {topBackgroundColor} from './src/Main'

export default function App() {
  return (    
    <NavigationContainer >
        <MyTabs style={{marginTop: Constants.statusBarHeight}} /> 
        <StatusBar
          barStyle='light-content'
          backgroundColor={topBackgroundColor}
          
        />
    </NavigationContainer>
  );
}




