import { FlatList, KeyboardAvoidingView, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Button, Input } from 'react-native-elements'
import { Picker } from '@react-native-picker/picker'
import { Constants } from '../Constants'
// import { Entypo } from '@expo/vector-icons'; 
// leftIcon={
//   <Entypo name="lock" size={24} color="black" />
// }


// import DropDown, {
//   Select,
//   Option,
//   OptionList,
// } from 'react-native-option-select';

const Admin = ({navigation}) => {
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:"Admin Dashboard"})},[])
      // image=url,
      //   name=srting,
      //   rating=float,
      //   reviews=num,
      //   actual price=num,
      //   instock=bool,
      //   discount=num,
      // category from avilable constants

      const [items, setitems] = useState({
        formOpen:false,
        name:'',
        imageUrl:'',
        rating:0,
        reviews:0,
        actualprice:0,
        discount:0,
        inStock:true,
        category:''

      })

      // const [selectedValue, setSelectedValue] = useState("java");
      let formReset=()=>{
        setitems({
        
          formOpen:true,
        name:'',
        imageUrl:'',
        rating:0,
        reviews:0,
        actualprice:0,
        discount:0,
        inStock:'Yes',
        category:'Shoes'

        })

      }
// const handleCancelBtn=()=>formReset()



       let handleSubmitForm=()=>{
        
         
        formReset()
        setitems({
          formOpen:false
        })
        // console.log(
        //  items.name,
        //  items.imageUrl,
        //  items.rating,
        //  items.reviews,
        //  items.actualprice,
        //  items.discount,
        //  items.inStock,
        //  items.category

        // )
       }


       const [refreshing, setRefreshing]=useState(false)
       let handleRefresh=()=>{
        setRefreshing(true)
        formReset()

        setRefreshing(false)

       }
  return (
    <View
    style={
      styles.adminDashboard
    }
    >
       
       <View
       style={
        styles.addBtn
       }
       >
        <Button 
        title='AddItem'
        onPress={()=>
          setitems({
            ...items,
            formOpen:true
          })
        }
        
        />

       </View>



{ items.formOpen &&

       <KeyboardAvoidingView
       style={
        styles.addForm
       }
       
       
       >

        <ScrollView
         style={
          styles.addFormInside
         }
         refreshControl={
          <RefreshControl 
          refreshing={refreshing}
          onRefresh={handleRefresh}
          
          />
         }
         
        >
     

        <Input
        style={styles.addFormInsideInput} 
        placeholder='Name of item Item'
        value={items.name}
        onChangeText={(text)=>{
          setitems({
            ...items,
            name:text
          })
        }}
       
        autoFocus

        />

<Input
style={styles.addFormInsideInput} 
        placeholder='Image Url of Item'
        value={items.imageUrl}
        onChangeText={(text)=>{
          setitems({
            ...items,
            imageUrl:text
          })
        }}
       keyboardType='url'

        />

       

<Input
style={styles.addFormInsideInput} 
        placeholder='Rating of item Item'
        value={items.rating}
        onChangeText={(text)=>{
          setitems({
            ...items,
            rating:text
          })
        }}
        keyboardType='numeric'


        />

<Input
style={styles.addFormInsideInput} 
        placeholder='Number of reviews to the Item'
        value={items.reviews}
        onChangeText={(text)=>{
          setitems({
            ...items,
            reviews:text
          })
        }}
        keyboardType='numeric'


        />
      
        <Input
        style={styles.addFormInsideInput} 
        placeholder='Actual price of the Item'
        value={items.actualprice}
        onChangeText={(text)=>{
          setitems({
            ...items,
            actualprice:text
          })
        }}
        keyboardType='numeric'


        />
<View
style={{
  width:'100%',
  marginLeft:10,
  marginRight:'auto',

  marginBottom:15,



}}
>
{/* <Input
            style={styles.addFormInsideInput} 
        placeholder='Instock or not (Yes or No)'
        value={items.inStock}
        onChangeText={(text)=>{
          setitems({
            ...items,
            inStock:text
          })
        }}
        // keyboardType=''
        editable={false}

        /> */}
            <Picker
        selectedValue={items.inStock}
        style={{ color:'black',
      
    
        width:'93%',
        backgroundColor:'white' }}
        onValueChange={(itemValue, itemIndex) => setitems({
          ...items,
          inStock:itemValue
        })}
      >
        <Picker.Item label="Yes" value="Yes" />
        <Picker.Item label="No" value="No" />
      </Picker>

        </View>
         
              <Input
              style={styles.addFormInsideInput} 
        placeholder='Discount % of the Item'
        value={items.discount}
        onChangeText={(text)=>{
          setitems({
            ...items,
            discount:text
          })
        }}
        keyboardType='numeric'


        />
         

{/* <View
        style={{
          position:'relative'
        }}
        >
        <Input
        style={styles.addFormInsideInput} 
        // placeholder='Select the category'
        value={items.category}
        // onChangeText={(text)=>{
        //   setitems({
        //     ...items,
        //     category:text
        //   })
        // }}
        editable={false}
  
      
/>

<Picker
        selectedValue={items.category}
        style={{ height: 50,color:'black',
      
      position:'absolute',
      right:1,
      top:-1,
      width:'97.1%'
      
      }}
        onValueChange={(itemValue, itemIndex) => setitems({
          ...items,
          category:itemValue
        })}
      >
        {Constants.products.map((item,index)=> (
               <Picker.Item
               key={index}
               
               label={item.name}  value={item.name}  />)


        )}


      </Picker>

</View> */}

<View
style={{
  width:'100%',
  marginLeft:10,
  marginRight:'auto',

  marginBottom:15,



}}
>

<Picker
        selectedValue={items.category}
        style={{ color:'black',
      
    
      width:'93%',
      backgroundColor:'white',
    
      
      }}
        onValueChange={(itemValue, itemIndex) => setitems({
          ...items,
          category:itemValue
        })}
      >
        {Constants.products.map((item,index)=> (
               <Picker.Item
               key={index}
               
               label={item.name}  value={item.name}  />)


        )}


      </Picker>
      </View>


   <Button 
   containerStyle={
    styles.formSubmitBtn
   }
   
   title='Submit the Form'
   type='outline'
   onPress={ ()=>{
    
    handleSubmitForm()
  
    setitems({
      formOpen:false
    })
  }
   }
   />


  
{/* 
      <FlatList
           data={Constants.products}
           renderItem={({item})=>
           <View>
           <Text>
         
           'sdkjh'
           </Text>
           </View>

      }


      /> */}




</ScrollView>
<Button 
   title='X'
   containerStyle={
    styles.formCancelBtn
   }
   onPress={()=>{
    formReset()
    setitems({
      formOpen:false
    })
  }
  
  }
   type='outline'
   />

       </KeyboardAvoidingView>}
 


    </View>
  )
}

export default Admin

const styles = StyleSheet.create({
  adminDashboard:{
    position:'relative'

  },
  addBtn:{
    width:'50%',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:15
  },

  addForm:{
    position:'absolute',
    top:10,
    backgroundColor:'#00008B',
    width:'95%',
    marginLeft:10,
    height:425,
    overflow:'scroll'
    
  },
  addFormInside:{
    height:840,
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:25,
    marginBottom:10


  },
  addFormInsideInput:{
  marginTop:5,
  backgroundColor:'white',
  padding:12


},
formCancelBtn:{
  position:'absolute',
  right:8,
  top:15,
  width:35,
  // backgroundColor:'red',
  // color:'white'
},
formSubmitBtn:{
  width:'75%',
  marginLeft:'auto',
  marginRight:"auto",
  marginTop:10,
  marginBottom:15
}


})