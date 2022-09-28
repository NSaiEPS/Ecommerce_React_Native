import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Image, Input } from 'react-native-elements'
import { auth } from '../Firebase'

const Register = () => {
 
  let [input, setInput]=useState({
    name:'',
    email:'',
    password:''

  })

  let handleRegister=()=>{
    if( input.email.trim() && input.password.trim() && input.name.trim() ){
    auth.createUserWithEmailAndPassword(input.email,input.password).then(
      authUser=>{
        authUser.user.updateProfile({
          displayName:input.name,
         
        })

      }
    ).catch(error=>alert(error.message))}
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
        styles.inputView
      }
      >

       <Input 
       placeholder='Name'
       value={input.name}
       name='email'
       onChangeText={(text)=>{
        setInput({
          ...input,
          name:text
        })
       }}
       type='email'

       />
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

       />
         <Input 
       placeholder='Password'
       value={input.password}
       name='email'
       onChangeText={(text)=>{
        setInput({
          ...input,
          password:text
        })
       }}
       type='email'
       secureTextEntry
       />
     


       <Button 
       title='Register'
       onPress={handleRegister}
       
       
       />
      </View>
    </KeyboardAvoidingView>
  )
}

export default Register

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
    borderRadius:5
  },
  inputView:{
    width:250,
    paddingTop:15
  }
})

