import { React, useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable
} from 'react-native';
//creating a component
const App = () => {
  const [display, setDisplay] = useState(false);
  return (
    <View style={style.main}>
      <Text style={{ fontSize: 20, fontWeight: "600", color: 'blue', margin: 12 }}>Modal or Dialog box in React Native</Text>

      <View style={style.submain}>
        <Pressable onLongPress={() => console.warn('on long press')}
          // onPress={() => console.warn('on Press Button')}'
          onPressIn={() => console.warn('on Press In')}
          onPressOut={() => console.warn('On press out')}
        >
          <Text style={style.pressableBt}>On Pressable buton</Text>
        </Pressable>
      </View >
    </View >
  )
}

const style = StyleSheet.create({
  main: {
    flex: 1
  },
  submain: {
    flex: 1,
    justifyContent: 'center',
  },
  pressableBt: {
    margin: 12,
    fontSize: 20,
    backgroundColor: 'blue',
    padding: 15,
    textAlign: 'center',
    color: 'white',
    borderRadius: 12,
    shadowColor: 'black',
    elevation: 2
  }
})
export default App;
