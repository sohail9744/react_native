import { React, useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
//creating a component
const App = () => {
  const [selRadio, setRadio] = useState(1);
  return (
    <View style={style.main}>
      <Text style={{ fontSize: 20, fontWeight: "600", color: 'blue', margin: 12 }}>Custom button + radio button in React Native</Text>
      <TouchableHighlight>
        <Text style={[style.box1, style.button1]}>Custom Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.box1, style.button2]}>Error Button</Text>
      </TouchableHighlight>
      <View style={style.subMain}>
        <TouchableOpacity onPress={()=> setRadio(1)}>
          <View style={style.radioWrapper}>
            <View style={style.radio}>
              {
                selRadio === 1 ? <View style={style.nestedRadio}></View> : null
              }
            </View>
            <Text style={style.radioBt}>Radio Button 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setRadio(2)}>
          <View style={style.radioWrapper}>
            <View style={style.radio}>
              {
                selRadio === 2 ? <View style={style.nestedRadio}></View> : null
              }
            </View>
            <Text style={style.radioBt}>Radio Button 2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  main: {
    flex: 1
  },
  box1: {
    margin: 10,
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
    color: '#fff',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
    shadowOpacity: 1
  },
  button1: {
    backgroundColor: 'green'
  },
  button2: {
    backgroundColor: 'red'
  },
  subMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  radioWrapper: {
    flexDirection: 'row',
    gap: 10
  },
  radio: {
    height: 30,
    width: 30,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20
  },
  nestedRadio: {
    height: 24,
    width: 24,
    borderRadius: 20,
    margin: 1,
    backgroundColor: 'blue'
  },
  radioBt: {
    fontSize: 20
  }

})
export default App;
