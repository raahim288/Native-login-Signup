import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { Button, ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'

export const Home = (props) => {


  const [name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const handle_change = () => {
    console.log(name)
    console.log(Email)
    console.log(Password)
    setName('');
    setEmail('')
    setPassword('')
  }


  // const [get, SetGet] = useState();
  // const SetData = async () => {

  //   let val = {
  //     name,
  //     Email,
  //     Password
  //   }
  //   const data = JSON.stringify(val)
  //   await AsyncStorage.setItem("ser", data)
  // }

  // const GetData = async () => {
  //   const User = await AsyncStorage.getItem("ser")
  //   console.warn(User)
  //   SetGet(User)
  // }

  // const remove_data = async () => {
  //   const User = await AsyncStorage.removeItem("ser")
  //   console.warn(User)
  //   SetGet(User)
  // }
  return (

    
    //    <View style={{color:'black',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text style={{fontSize:34,color:'black'}}>Home Screen</Text>
    // </View>

    <ScrollView>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
{/* 
        <Button title='SET' onPress={SetData} />
        <Button title='GEt' onPress={GetData} />
        <Button title='Remove data' onPress={remove_data} />
        <Text style={{ color: 'red' }}>Hn bhai data agya {get}</Text> */}
        <Text style={{ backgroundColor: 'black', color: 'white', fontSize: 40, marginBottom: -100, marginTop: 30 }}>
          Sign Up
        </Text>
      </View>

      <View style={{ backgroundColor: 'black', marginTop: 200, alignItems: 'center' }}>
        <TextInput
          onChangeText={text => setName(text)}
          value={name}
          style={{
            fontSize: 20,
            marginTop: 20,
            borderColor: 'gray',
            borderWidth: 5,
            minWidth: 250,
            borderRadius: 15,
            padding: 10,
            backgroundColor: '#fff',
            color: 'black'
          }}
          placeholder="Name"
          placeholderTextColor="black"  // Placeholder text color set to red
        />
        <TextInput

          onChangeText={text => setEmail(text)}
          value={Email}
          style={{
            fontSize: 20,
            marginTop: 30,
            marginBottom: 10,
            borderColor: 'gray',
            borderWidth: 5,
            minWidth: 250,
            borderRadius: 15,
            padding: 10,
            backgroundColor: '#fff',
            color: 'black'
          }}
          placeholder="Email"
          placeholderTextColor="black"  // Placeholder text color set to red
        />
        <TextInput
          onChangeText={text => setPassword(text)}
          value={Password}
          style={{
            fontSize: 20,
            marginTop: 20,
            borderColor: 'gray',
            borderWidth: 5,
            minWidth: 250,
            borderRadius: 15,
            padding: 10,
            backgroundColor: '#fff',
            color: 'black'
          }}
          placeholder="Password"
          placeholderTextColor="black"  // Placeholder text color set to red
          secureTextEntry={true}
        />
        {/* <Button title='save input data' onPress={handle_change} /> */}

        <TouchableOpacity onPress={() =>{handle_change(); props.navigation.navigate("Login")}}>



          <Text style={{ color: 'white', textAlign: 'center', fontSize: 30, marginTop: 30 }}>Sign Up</Text>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Already have an account</Text>

        </TouchableOpacity>
      </View>

    </ScrollView>

  )
}
