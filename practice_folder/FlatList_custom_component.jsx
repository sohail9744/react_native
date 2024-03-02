import { React, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';
//creating a component
const App = () => {
  const employee = [
    {
      id: 1,
      name: 'Shafi'
    },
    {
      id: 2,
      name: 'Shanwaz'
    },
    {
      id: 3,
      name: 'Atique'
    },
    {
      id: 4,
      name: 'Layek'
    },
  ]

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "600", color: 'blue', marginLeft: 12 }}>FlatList with Custom Component</Text>

      <View>
        <FlatList data={employee} keyExtractor={employee.id} renderItem={({ item }) =>
          <View style={style.container}>
            <Text style={style.map_items}>{item.id}</Text>
            <Text style={style.map_items}>{item.name}</Text>
          </View>
        } />
      </View>

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
