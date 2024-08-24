import { StyleSheet } from "react-native";
import { backgroundPages } from '../GeneralStyles'
import { Dimensions } from "react-native";
export const uiTopIconsSize = 75

//? -----------------
//? [Diagram  Styles]
//? -----------------

export const screenWidth = Dimensions.get("window").width;


export const DiagramStyle = StyleSheet.create({

  container: {
    backgroundColor: (backgroundPages),
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },

  text: {
    textAlign: "center",
    fontSize: 25,
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
  }

})
