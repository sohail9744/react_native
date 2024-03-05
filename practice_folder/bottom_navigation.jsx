import { React, useEffect, useState } from 'react';
import {
  Text,
  View, Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();
//You need to install Navigation Container
// Then you need to installa and define which navigation you need choose

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Scan Page' component={ScanPage}></Tab.Screen>
        <Tab.Screen name='Login Page' component={LoginPage}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const LoginPage = () => {
  return (
    <View>
      <Text>Login Page</Text>
    </View>
  )
}
const ScanPage = () => {
  return (
    <View>
      <Text>Scan Page</Text>
    </View>
  )
}
export default App;
