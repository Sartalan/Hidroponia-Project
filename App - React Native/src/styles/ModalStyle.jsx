import { StyleSheet } from "react-native";
import {screenWidth} from './screens/DiagramStyle'
export const uiTopIconsSize = 75
const modalRadius = 25
export const ModalStyle = StyleSheet.create({

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

  },

  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  allContent: {
    width: screenWidth - 100,
    height: 550,

  },

  /*Top */
/*------- */

  top: {
    borderTopEndRadius: modalRadius,
    borderTopStartRadius: modalRadius,
    width: 'auto',
    height: 75,
    backgroundColor: '#181921',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15
  },

  modalImage: {
    width: 50,
    height: 50,
    opacity: .5
  },


  /*Bottom */
/*---------- */

  bottom: {
    backgroundColor: '#1C1F27',
    flex: 1,
    borderBottomEndRadius: modalRadius,
    borderBottomStartRadius: modalRadius,
    gap: 25,
    height: 100,
  },

  text: {
    color: '#FFFFFFA1',
    fontFamily: 'serif',
    fontStyle: 'italic',
    fontSize: 25
  },

  
  /*Guide Styles */
/*---------- */

});

