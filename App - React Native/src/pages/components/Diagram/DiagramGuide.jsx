import { Text, View, StyleSheet} from 'react-native'

export function DiagramGuide({Info}) {
  return (
    <View style={GuideStyle.guideBox}>
        <Text style={GuideStyle.guideText}>{Info}</Text>
    </View>
  )
}

export const GuideStyle = StyleSheet.create({
  guideItems: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  guideBox: {
    width: 275,
    height: 250,
    backgroundColor: '#050C0C',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  /*!To Delete*/
    justifyContent: 'center',
    alignItems:'center'
  },

  guideText: {
    color: '#FFFFFFA1',
    fontFamily: 'serif',
    fontStyle: 'italic',
    fontSize: 25
  }

  
})
