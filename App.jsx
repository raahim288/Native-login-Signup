// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StatusBar, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import Print from './screens/Print';


// function LoginScreen(props) {
//   return (
//     <View style={{color:'black',flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{fontSize:34,color:'black'}}>Login Screen</Text>
//       <Button title='Go To the Next part ' onPress={()=>props.navigation.navigate("Home")}/>
//     </View>
//   );
// }
// const HomeScreen=()=> {
//   return (
//     <View style={{color:'black',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{fontSize:34,color:'black'}}>Home Screen</Text>
//     </View>
//   );
// }



// const Header=()=>{
//   return(
//     <View>
//       <TextInput style={{color:'gray'}} placeholder='Enter your name' />
//     </View>
//   )
// }
const Stack = createNativeStackNavigator();


function App() {

  const Call=()=>{
    console.warn("Btn is clicked")
  }
  return (
    <>
    <StatusBar backgroundColor={'green'}/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"  component={Home}
        
        options={{



          title:'SignUp',
          headerStyle:{
            backgroundColor:'black'
          },
          headerTintColor:'white',
          headerTitleStyle:{
            fontSize:25
          }
        }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Print" component={Print} />
       
      </Stack.Navigator>
    </NavigationContainer>










    </>
  );
}

export default App;