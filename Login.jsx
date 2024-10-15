import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const Login = (props) => {
  return (
    <>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ backgroundColor: 'black', color: 'white', fontSize: 40, marginBottom: -100, marginTop: 30 }}>
          Login
        </Text>
      </View>
      
      <View style={{ backgroundColor: 'black', marginTop: 200, alignItems: 'center' }}>
       
        <TextInput

          style={{
            fontSize: 20,
            marginTop: 30,
            marginBottom: 10,
            borderColor: 'gray',
            borderWidth: 5,
            minWidth:250,
            borderRadius: 15,
            padding: 10,
            backgroundColor: '#fff',
               color:'black'
          }}
          placeholder="Email"
          placeholderTextColor="black"  // Placeholder text color set to red
        />
        <TextInput
          style={{
            fontSize: 20,
            marginTop: 20,
            borderColor: 'gray',
            borderWidth: 5,
      minWidth:250,
            borderRadius: 15,
            padding: 10,
            backgroundColor: '#fff',
            color:'black'
          }}
          placeholder="Password"
          placeholderTextColor="black"  // Placeholder text color set to red
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={() => props.navigation.navigate('Print')}>
          <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 30, color: '#fff' }}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
