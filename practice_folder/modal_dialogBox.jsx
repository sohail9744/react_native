import { React, useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal
} from 'react-native';
//creating a component
const App = () => {
  const [display, setDisplay] = useState(false);
  return (
    <View style={style.main}>
      <Text style={{ fontSize: 20, fontWeight: "600", color: 'blue', margin: 12 }}>Modal or Dialog box in React Native</Text>
      <Modal transparent={true} visible={display} animationType='fade'>
        <View style={style.modalParent}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Modal View</Text>
            <View style={style.modalbutton}>
              <Button title='close Modal' onPress={() => setDisplay(false)}></Button>
            </View>
          </View>
        </View>
      </Modal>
      <View style={style.submain}>
        <Button title='open Modal' onPress={() => setDisplay(true)}></Button>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  main: {
    flex: 1
  },
  submain: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalParent: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    shadowColor: 'black',
    elevation: 10,
    padding: 30,
    margin: 30,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1
  },
  modalText: {
    fontSize: 30
  },
  modalbutton: {
    marginTop: 90,
    paddingLeft: 150
  }
})
export default App;
