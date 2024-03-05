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
        <Stack.Screen name='Login Page' component={Login} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Home Page' component={Home} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const Login = (props) => {
  return (
    <View>
      <Text>Login Page</Text>
      <Button title='Home Screen' onPress={() => props.navigation.navigate('Home Page')}></Button>
    </View>
  )
}
const Home = (props) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button title='Login Screen' onPress={() => props.navigation.navigate('Login Page')}></Button>
    </View>
  )
}
export default App;
