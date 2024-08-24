import { StyleSheet } from "react-native";

export const backgroundPages = '#090909'

//* [Pages General Styles]
export const GeneralStyles = StyleSheet.create({
  container: {
    backgroundColor: (backgroundPages),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 10
  },
  text: {
    color: '#fff',
    fontSize: 50,
    fontStyle: 'italic'
  }
});
