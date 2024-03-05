import { React, useEffect, useState } from 'react';
import {
  Text,
  View, Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//You need to install Navigation Container
// Then you need to installa and define which navigation you need choose

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login Page' component={Login} options={{ headerBackButtonMenuEnabled: true }}></Stack.Screen>
        <Stack.Screen name='Home Page' component={Home} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const Login = (props) => {
  const name = 'agyea second page pr check kro kaise ayea hu'
  return (
    <View>
      <Text>Login Page</Text>
      <Button title='Home Screen' onPress={() => props.navigation.navigate('Home Page', { name })}></Button>
    </View>
  )
}
const Home = (props) => {
  const { name } = props.route.params
  return (
    <View>
      <Text>{name}</Text>
      <Button title='Login Screen' onPress={() => props.navigation.navigate('Login Page')}></Button>
    </View>
  )
}
export default App;
