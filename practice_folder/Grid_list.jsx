import { React, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
//creating a component
const App = () => {
  const employee = [
    {
      name: 'Shafi'
    },
    {
      name: 'Sadiq'
    },
    {
      name: 'Abubaker'
    },
    {
      name: 'Hamza'
    },
    {
      name: 'Suleman'
    },
    {
      name: 'Sam'
    },
    {
      name: 'Atique'
    },
    {
      name: 'Atique'
    },
    {
      name: 'Atique'
    },
    {
      name: 'Atique'
    },
    {
      name: 'Atique'
    },
    {
      name: 'Atique'
    },
    {
      name: 'Atique'
    },
    {
      name: 'Atique'
    },
    {
      name: 'Atique'
    },
    {
      name: 'Atique'
    },
    {
      name: 'Atique'
    },
    {
      name: 'Zainab'
    },
    {
      name: 'Khadija'
    }
  ]

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "600", color: 'blue' }}>List with Map method</Text>
      <ScrollView style={{marginBottom: 'auto'}}>
        <View style={style.container}>
          {
            employee.map((item) => <Text style={style.map_items}>{item.name}</Text>)
          }
        </View>
      </ScrollView>
      {/* <Text style={{ fontSize: 20, fontWeight: "600", color: 'blue' }}>FlatList method</Text> */}
      {/* <FlatList  style={style.map_items} data={employee} keyExtractor={employee.id} renderItem={({ item }) => <Text>{item.name}</Text>} /> */}
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
    width: 120,
    height: 120,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 5,
    margin: 5
  }
})
export default App;
