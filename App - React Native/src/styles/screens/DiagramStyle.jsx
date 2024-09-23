import { StyleSheet } from "react-native";
import { backgroundPages } from '../GeneralStyles'
import { Dimensions } from "react-native";
export const uiTopIconsSize = 75
const backgroundChart = '#121212'
const watered = "#A3C7D6"
const humidity = "#3F3B6C"
const temperature = "#9F73AB"


//? -----------------
//? [Diagram  Styles]
//? -----------------

export const screenWidth = Dimensions.get("window").width;


export const DiagramStyle = StyleSheet.create({

  container: {
    backgroundColor: (backgroundPages),
    padding: 10,
    flex: 1,
//    justifyContent: 'center',
    gap: 30
  },

  text: {
    textAlign: "start",
    fontSize: 30,
    margin: 10,
    fontFamily: 'serif',
    fontStyle: 'italic',
    color: '#FFFFFFA1',
    backgroundColor: (backgroundPages),
    padding: 10
  },

  chart: {
    backgroundColor: (backgroundPages),
  },

  chartGraph: {
    borderRadius: 20,
    backgroundColor: (backgroundPages)
  },

  helpImage: {
    width: uiTopIconsSize,
    height: uiTopIconsSize,
    opacity: .55
  },

  touchableContainer: {
    height: 'auto',
    width: screenWidth,
    backgroundColor: '#000',
    padding: 0,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

//? TEST DE DISEÑO

    otherView: {
      width: (screenWidth) - 20,
      height: 100,
      backgroundColor: backgroundChart ,
      marginTop: 20,
      borderRadius: 20,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10
    },

    otherText: {
      color: '#000',
      fontSize: 20,
      fontStyle: 'italic',
      fontFamily: 'serif',
      backgroundColor: watered,
      padding: 20,
      borderRadius: 10
    }
})
