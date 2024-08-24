import { Text, View, TouchableOpacity, Image, Modal, ScrollView } from 'react-native'
import { useState } from 'react';
import { DiagramStyle } from '../styles/screens/DiagramStyle.jsx'
import { ModalStyle } from '../styles/ModalStyle.jsx';
import { DiagramGuide, GuideStyle } from './components/Diagram/DiagramGuide.jsx'
import { DiagramOne } from './components/Diagram/DiagramOne.jsx'
import { DiagramTwo } from './components/Diagram/DiagramTwo.jsx';
const helpImage = './../../assets/help.png'
const closeImage = './../../assets/close.png'

export function DiagramScreen() {

  const [modal, setModal] = useState(false)

  const HandleModal = () => {
    console.log("activaste el modal")
    console.log(modal)
    setModal(true)
  }

  const HandleModalClose = () => {
    setModal(false)
  }

  return (
    <>
      {/* //* Diagrams
//? ---------------------
*/}
      <View style={DiagramStyle.container}>

        <View style={DiagramStyle.chart} >
          <DiagramOne />
        </View>

        <View style={DiagramStyle.chart}>
          <DiagramTwo />
        </View>
      </View>
      {/*//?
//? ------------------
*/}

      {/*//* [Help , Close] Touchable
//? ---------------------      
*/}

      <View style={DiagramStyle.touchableContainer}>
        <TouchableOpacity
          activeOpacity={.5}
          onPress={HandleModal}>

          <Image style={DiagramStyle.helpImage}
            source={require(helpImage)} />
        </TouchableOpacity>
      </View>
      {/*//?
//? ------------------
*/}

      {/*//* [Help , Close] Modal View
//? ---------------------      
*/}
      <Modal visible={modal}
        animationType='fade'
        statusBarTranslucent={false}
        transparent={true}
        style={ModalStyle.modal}
      >


        <View style={ModalStyle.modalContainer}>
          <View style={ModalStyle.allContent}>
            <View style={ModalStyle.top}>

              <Text style={ModalStyle.text}>Guía</Text>
              <TouchableOpacity
                activeOpacity={.5}
                onPress={HandleModalClose}
              >
                <Image style={ModalStyle.modalImage}
                  source={require(closeImage)} />
              </TouchableOpacity>
            </View>
            {/*--------------------*/}
            <ScrollView
              style={ModalStyle.bottom}
              scrollEnabled={true}
              contentContainerStyle={GuideStyle.guideItems}
              scro
            >
              <DiagramGuide
                Info="Por cada"
              />
              <DiagramGuide
                Info="Bloque"
              />
              <DiagramGuide
                Info="Acá"
              />
              <DiagramGuide
                Info="Habría una guía"
              />
              <DiagramGuide
                Info="Sobre como recibir datos"
              />
              <DiagramGuide
                Info="De un servidor Backend"
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  )
}
