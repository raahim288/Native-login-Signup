// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StatusBar, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginScreen(props) {
  return (
    <View style={{color:'black',flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize:34,color:'black'}}>Login Screen</Text>
      <Button title='Go To the Next part ' onPress={()=>props.navigation.navigate("Home")}/>
    </View>
  );
}
const HomeScreen=()=> {
  return (
    <View style={{color:'black',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:34,color:'black'}}>Home Screen</Text>
    </View>
  );
}



const Header=()=>{
  return(
    <View>
      <TextInput style={{color:'gray'}} placeholder='Enter your name' />
    </View>
  )
}
const Stack = createNativeStackNavigator();


function Multiple() {

  const Call=()=>{
    console.warn("Btn is clicked")
  }
  return (
    <>
    <StatusBar backgroundColor={'green'}/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login Screen"  component={LoginScreen}
        
        options={{



          headerTitle:()=><Button onPress={Call} title='Click'/>,
          headerRight:()=><Header/>,
          title:'Login Screen 1',
          headerStyle:{
            backgroundColor:'black'
          },
          headerTintColor:'white',
          headerTitleStyle:{
            fontSize:25
          }
        }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default Multiple;