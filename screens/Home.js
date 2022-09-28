import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import { Avatar, Button, Image } from 'react-native-elements'
import { auth } from '../Firebase'
import { Entypo,Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native'
import { Constants } from '../Constants'
import { TextInput } from 'react-native'
// import { AntDesign } from '@expo/vector-icons'; 
// import { AntDesign } from '@expo/vector-icons'; 

{/* <AntDesign name="menufold" size={24} color="black" /> */}
{/* <AntDesign name="menuunfold" size={24} color="black" /> */}

const Home = ({navigation}) => {

  useLayoutEffect(()=>{
    // navigation.setOptions({
    //   title:null,
      // headerStyle:{
      //   backgroundColor:"white",
      
      // },
      // headerTitleStyle:{
      //   color:'black'
      // },
      // headerTintColor:'black',
    //   headerLeft:()=>(
    //  ),
      // headerRight:()=>(
       
      // )

      navigation.setOptions({headerShown: false})

    // })
  },[])




let [leftMoreOptions,setleftMoreOptions]=useState(false)

let handleMoreOptions=()=>{
  setleftMoreOptions(!leftMoreOptions)
}

const windowHeight = Dimensions.get('window').height;

  return (
    <View>

      <View
      style={{
        backgroundColor:'white'
      }}
      >

      <View
      style={
        
     styles.header
    
    }
      >

<View
     style={
      styles.leftHeader
     }
      
      >
          


        <TouchableOpacity
        
       
        >

     <AntDesign name="menufold" size={24} color="black" 
     
     onPress={handleMoreOptions}
     />
     

   
        </TouchableOpacity>
        <Image 
       
       source={{
        uri:'https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000'
       }}
       style={styles.image}

       />

     


      </View>

      <View
        style={styles.headerrightOptions}
        >
  <TouchableOpacity
  activeOpacity={0.5}>

<Avatar
           rounded
           source={{
          uri: "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png"
           }}
           />

  </TouchableOpacity>


  <TouchableOpacity
  activeOpacity={0.5}
  style={styles.cart}
  
  onPress={()=>{
    navigation.navigate("Cart")
  }}
  >

   
    <Entypo name="shopping-cart" size={24} color="black" />
   

     
  </TouchableOpacity>

  <View
  style={{
    position:'absolute',
    top:35,
    right:15,
    elevation:3,
    backgroundColor:'white',
    width:150,
    borderWidth:1
  }}
  >
    <Button 
    title='Logout'
    />

    <Button 
    
    title='DashBoard'
    onPress={()=>
      navigation.navigate("Admin")
    }
    
    />
  </View>

        </View>
        </View>

    
        <View
        style={{
          width:'90%',
            marginLeft:'auto',
            marginRight:'auto',
            backgroundColor:'#D3D3D3',
            borderRadius:10,
            marginTop:5,
            position:'relative',
            color:'black',
            marginBottom:7


        }}
        >
          <TextInput 
          
          placeholder='Search...'
          style={{
            paddingLeft:35,
            padding:5,
            
            
            
          }}
          />
          <Feather name="search" size={24} color="gray"
          style={{
            position:'absolute',
            top:7,
            left:7
          }}
          />
        </View>
        </View>


      



      {leftMoreOptions &&

      <View
      style={{
        position:'absolute',
        top:0,
    // transform: translateX(0px);
    // transform: [{ translateX: -50 }]
        

      }}
      >
        {/* <View /> */}
      <View
      style={
        {
          width:'100%',
          // backgroundColor:"red",
          height:windowHeight,
          marginTop:50,
          // overflow:'scroll',
          
            
        
          flex:1,
          color:'black',
          flexDirection:'row'
        }
      }
      >
        <SafeAreaView
        style={
          styles.leftOptions
        }
        >
           <FlatList
           data={Constants.products}
           renderItem={({item})=>

           <View
           style={{
            flexDirection:'row',
            paddingTop:10,
            width:'75%',
            justifyContent:'space-between',
            paddingLeft:20,
    //         borderWidth:1,
    // borderColor:'red'
            
           }}
           >

            <Image 
           resizeMode='contain'
            
            source={
              {
                uri:item.imgurl
              }
             }
             style={{
              width:75,
              height:75
             }}
            />
            <Text
            style={{
              alignSelf:'center',
              fontWeight:'800',
              justifyContent:'flex-start',
              width:'50%'
            }}
            >
             {item.name}
             </Text>
           </View>
           }
           
           
           
           />

          </SafeAreaView>
          <View
          style={
            {
              
              flexDirection:'column',
              width:'20%',
            }
          }

          
          
        
          >
            <Button
            title='X'
            color='red'
            onPress={handleMoreOptions}
            

       

            
            />

            <View
            
            style={{
              opacity:0.5,
              backgroundColor:"black",
              width:'100%',
              height:windowHeight,


            }}
            onPress={()=>{
              alert('clicked')
            }}

            />  
            
           
          </View>

      </View>
      </View>
      }
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  header:{
    
      flexDirection:'row',
      paddingTop:55,
      backgroundColor:'white',
      justifyContent:'space-between',
      width:'100%',
      borderBottomColor:'red',
    //   borderWidth: 1,
    // borderColor: "thistle",
    // borderRadius: 50,
    alignItems:'center'
  },
  image:{
    width:75,
    height:25,
  },
  leftHeader:{
    flexDirection:'row',
    width:'55%',
    marginLeft:25,
    justifyContent:'space-between',
    color:'black',
    
  },
  cart:{
    // marginTop:5
    alignSelf:'flex-end',
    // height:35
  },

  headerrightOptions:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'20%',
    marginRight:20,
    position:'relative'
  },



  // leftOptions:{
  //   width:'100%',
  //   backgroundColor:"red",
    
      
  //   position:'absolute',
  //   top:0,
  //   flex:1,
  //   color:'black'

  // },
  leftOptions:{
    width:'80%',
    backgroundColor:'white'
  }
})

// git remote set-url origin https://github.com/username/repository.git
// git remote set-url origin https://github.com/NSaiEPS/Ecommerce_React_Native.git

// git@github.com:NSaiEPS/Ecommerce_React_Native.git