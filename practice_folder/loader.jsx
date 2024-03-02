import { React, useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Button
} from 'react-native';
//creating a component
const App = () => {
  const [selRadio, setRadio] = useState(1);
  const [indicator, setIndicator] = useState(true);
  return (
    <View style={style.main}>
      <Text style={{ fontSize: 20, fontWeight: "600", color: 'blue', margin: 12 }}>Activity Indicator (Loader) in React Native</Text>
      <View style={style.submain}>
        <ActivityIndicator size={100} animating={indicator}></ActivityIndicator>
        {
          indicator ? <Button title='Click to deactivate' onPress={() => setIndicator(!indicator)}></Button> :
            <Button title='Click to Activate' onPress={() => setIndicator(!indicator)}></Button>
        }
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
    justifyContent: 'center',
    alignItems: 'center'
  }

})
export default App;
