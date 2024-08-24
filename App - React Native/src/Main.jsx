import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
//?[Routes]
import { SelectorScreen } from './pages/SelectorScreen'
import { PlantScreen } from './pages/PlantScreen'
import { DiagramScreen } from './pages/DiagramScreen'
import { SettingsScreen } from './pages/SettingsScreen'
//?[Icons && Design]
const Shuffle = '../assets/shuffle.png'
const Plant = '../assets/plant.png'
const Diagram = '../assets/diagram.png'
const Setting = '../assets/setting.png'
const sizeIcons = 42.5;
export const topBackgroundColor = '#181921'

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Planta'
      backBehavior='history'
      tabBarPosition='top'
      screenOptions={{
        tabBarShowIcon: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarIconStyle: { width: 50, height: 50 },
        tabBarStyle: { backgroundColor: (topBackgroundColor) },
      }}
    >
      <Tab.Screen name="Home"
        component={SelectorScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require(Shuffle)}
              style={{ tintColor: color, width: sizeIcons, height: sizeIcons }}
            />
          )
        }} />

      <Tab.Screen name="Planta" component={PlantScreen} options={{
        tabBarIcon: ({ color }) => (
          <Image
            source={require(Plant)}
            style={{ tintColor: color, width: sizeIcons, height: sizeIcons }}
          />
        )
      }} />

      <Tab.Screen name="Log" component={DiagramScreen} options={{
        tabBarIcon: ({ color }) => (
          <Image
            source={require(Diagram)}
            style={{ tintColor: color, width: sizeIcons, height: sizeIcons }}
          />
        )
      }} />

      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({ color }) => (
          <Image
            source={require(Setting)}
            style={{ tintColor: color, width: sizeIcons, height: sizeIcons }}
          />
        )
      }} />
    </Tab.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#030'
  },
  routesContainer: {
    color: '#fff'
  }
});
