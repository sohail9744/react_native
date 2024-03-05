import { React, useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Button
} from 'react-native';
//creating a component
const App = () => {
  const [user, setUser] = useState(true)
  const [componentUpdate, setComponentUpdate] = useState(0)
  const [unMount, setUnmount] = useState(true)

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "600", color: 'blue', marginLeft: 12 }}>Life Cycle with Use Effect Hook.</Text>
      <Button title='Component Mount' onPress={() => setUser(!user)}></Button>
      {
        user ? <User /> : null
      }
      <View style={{ marginTop: 100 }}>
        <Button title='Component Mount Update' onPress={() => setComponentUpdate(componentUpdate + 1)}></Button>
        <UserUpData data={componentUpdate} />
      </View>
      <View style={{ marginTop: 100 }}>
        <Button title='Component unMount' onPress={() => setUnmount(!unMount)}></Button>
        {
          unMount ? <UnMountEffect /> : <Text>Now the Timer will not come ;)</Text>
        }
      </View>
    </View>
  )
}

const User = () => {
  //component will be mount when view renders
  useEffect(() => {
    console.warn('Component Mount')
  }, [])
  // passing blank array it will not mount on every state update.
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "600", color: 'geen', marginLeft: 12 }}>User Component Mounted</Text>
    </View>
  )
}
const UserUpData = ({ data }) => {
  useEffect(() => {
    console.warn(`Component update Mount ${data}`)
  }, [data])
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "600", color: 'geen', marginLeft: 12 }}>User Component Mounted {data}</Text>
    </View>
  )
}
const UnMountEffect = () => {
  let timer = setInterval(() => {
    console.warn("background timer start press on unmount button");
  }, 2000)
  //below useEffect whenever the Component is unmount then it will run
  useEffect(() => {
    return () => { clearInterval(timer); }
  })
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "600", color: 'geen', marginLeft: 12 }}>Press on UnMount button to stop the Background timer</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
  },
  map_items: {
    color: "#fff",
    backgroundColor: 'black',
    fontSize: 15,
    textAlign: 'center',
    width: 180,
    textAlignVertical: 'center',
    padding: 5,
    margin: 5
  }
})
export default App;