import { React, useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  ImageBackground
} from 'react-native';
//creating a component
const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onClear = () => {
    setDisplay(false);
    setForm({
      name: "",
      email: "",
      password: ""
    })
  }
  const [display, setDisplay] = useState(false)
  return (
    <ImageBackground>
      <View style={{ padding: 15 }}>
        <Text style={style.text}>Login Form</Text>
        <TextInput style={style.textInput} onChangeText={(text) => setForm((curentInput) => ({ ...curentInput, name: text }))} value={form.name} placeholder='Enter your Username'></TextInput>
        <TextInput style={style.textInput} onChangeText={(text) => setForm((curentInput) => ({ ...curentInput, email: text }))} value={form.email} keyboardType='email-address' placeholder='Enter your Email'></TextInput>
        <TextInput style={style.textInput} onChangeText={(text) => setForm((curentInput) => ({ ...curentInput, password: text }))} value={form.password} passwordRules="true" placeholder='Enter your password'></TextInput>
        <View style={{ marginBottom: 10 }}>
          <Button onPress={() => setDisplay(true)} title='Submit' color={"green"}></Button>
        </View>
        <Button onPress={() => onClear()} title='Clear' color={"red"}></Button>
        {
          display ?
            <View>
              <Text style={style.text}>User Details</Text>
              <Text style={style.formDetail}>Name: {form.name}</Text>
              <Text style={style.formDetail}>Email: {form.email}</Text>
              <Text style={style.formDetail}>Password: {form.password}</Text>
            </View>
            : null
        }
      </View>
    </ImageBackground>
  )
}

const style = StyleSheet.create({
  textInput: {
    borderWidth: 4,
    borderColor: "lightblue",
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 18,
    padding: 10
  },
  text: {
    fontWeight: "800",
    fontFamily: "sans",
    textAlign: "center",
    fontSize: 30,
    marginVertical: 20,
    color: "black"
  },
  formDetail: {
    fontWeight: "800",
    fontFamily: "sans",
    fontSize: 20,
    marginVertical: 5
  }
})
export default App;
