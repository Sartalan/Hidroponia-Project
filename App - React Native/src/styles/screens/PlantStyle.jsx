import { StyleSheet } from "react-native";

export const PlantStyle = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    bottom: 10,
    right: 30,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderBottomWidth: 2.5,
    borderBottomColor: '#343737A9'

  },
  bottomBox: {
    flexDirection: 'row',
    gap: 10,
    padding: 10
  },

  bottomText: {
    color: '#FFFFFFA1',
    fontSize: 25,
    fontStyle: 'italic',
    fontFamily: 'serif',

  }

})