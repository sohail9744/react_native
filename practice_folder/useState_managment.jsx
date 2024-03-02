import { React, useState } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
const App = () => {
  const [name, setName] = useState('My Company');
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const decrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1))
  }
  function onStateChange() {
    setName('Almarai Company');
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{count}</Text>
      <Button style={{ fontText: 80 }} onPress={() => incrementCount()} title="Press To Increment"></Button>
      <View style={{ padding: 5, marginTop: 10 }}>
        <Button style={{ fontText: 80 }} onPress={() => decrement()} title="Press To Increment"></Button>
      </View>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Button style={{ fontText: 80 }} onPress={() => onStateChange()} title="Company Name"></Button>
      <Button style={{ fontText: 80 }} onPress={() => onStateChange()} title="pass props"></Button>
      <User name={"sohail"} />
    </View>
  )
}
const User = ({ name }) => {
  return (
    <View>
      <Text>name</Text>
    </View>
  );
}


export default App;
