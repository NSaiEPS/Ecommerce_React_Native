

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import { Button, Input, Image } from 'react-native-elements';
import RegisterScreen from './screens/Register';
import HomeScreen from './screens/Home';
import AdminScreen from './Components/Admin';
import CartScreen from './screens/Cart';
// import AddChat from './screens/AddChat';
import { Provider } from 'react-redux';
import store from './Components/Redux/Store';


export default function App() {


const Stack = createNativeStackNavigator();



const globalScreenOptions={
  headerStyle:{
    backgroundColor:"#2C6BED"},
    headerTitleStyle:{
      color:'white'
    },
    headerTintColor:"white"
  }


  



  return (

    <Provider
    store={store}
    >
    <NavigationContainer>

<Stack.Navigator
screenOptions={globalScreenOptions}

>
        <Stack.Screen 
        name="Login" component={LoginScreen} 
        // options={{
        //   title:"Let's SignUp"
        // }}
        />

<Stack.Screen 
        name="Register" component={RegisterScreen} 
      
        />


<Stack.Screen 
        name="Home" component={HomeScreen} 
      
        />

<Stack.Screen 
        name="Cart" component={CartScreen} 
      
        />

<Stack.Screen 
        name="Admin" component={AdminScreen} 
      
        />


        
      </Stack.Navigator>
    
    
    </NavigationContainer>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
