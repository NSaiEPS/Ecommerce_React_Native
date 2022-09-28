import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Image, Input } from 'react-native-elements'
import { auth } from '../Firebase'
import {useDispatch} from 'react-redux'
const Login = ({navigation}) => {
 
const dispatch=useDispatch()

  let [input, setInput]=useState({
    
    email:'',
    password:''

  })

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
    //  console.log(authUser.displayName, authUser.email)
     if(authUser){
      dispatch({
        type:"usersDataAction",
        payload:{
          userName:authUser.displayName,
          userEmail:authUser.email   
        }
      })
       navigation.replace("Home")
     }
    })
   
   //  return unsubscribe;
    },[])

  

  let handleLogin=()=>{
    if( input.email.trim() && input.password.trim()){
      auth.signInWithEmailAndPassword(input.email,input.password)
     
      .catch(error=>alert(error))
    }
    else {
      alert("All are madetery fields")
    }

  }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    
    >


      <Image 
      source={
        {
          uri:'https://pliki.dlahandlu.pl/i/04/64/82/046482_r0_940.jpg'
        }
      }
      style={styles.image}
    
      />

      <View
      style={
        styles.inputview
      }
      >
      <Input 
       placeholder='Email'
       value={input.email}
       name='email'
       onChangeText={(text)=>{
        setInput({
          ...input,
          email:text
        })
       }}
       type='email'
       autoFocus
       

       />


       <Input 
       placeholder='Password'
       value={input.password}
       name='password'
       onChangeText={(text)=>{
        setInput({
          ...input,
          password:text
        })
       }}
       type='password'
       secureTextEntry
       autoFocus
       onSubmitEditing={handleLogin}


       />

       <Button 
       title='Login'
       onPress={handleLogin}
       containerStyle={
        styles.button
       }
       
       />

       <Button 
       title='Register'
       type='outline'
       containerStyle={
        styles.button
       }
     
onPress={()=>{
  navigation.navigate("Register")
}}
       />
    
    

      </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:10
},

  image:{
    width:250,
    height:150,
    borderRadius:5,
    marginBottom:10
  },

  inputview:{
    width:250,
    paddingTop:15
  },
  button:
  {
      marginTop:10

  }

})