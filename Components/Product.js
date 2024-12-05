import { StyleSheet, Text, View ,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addToCart ,addToCartRemove,add_to_cart_remove } from './Redux/Action'
import { useDispatch, useSelector } from 'react-redux'



const Product = (props) => {
   
const carditems = useSelector((state)=>state.reducer)
console.log('provider cart data', carditems)




    const item = props.item
  

    const [isAdded,SetIsAdded]= useState(false)

   useEffect(()=>{
    let result = carditems.filter((element)=>
    {
        return element.name=== item.name
    }
);
if(result.length){
    SetIsAdded(true)
}
else {
SetIsAdded(false)
}

   },[carditems])

    const dispatch = useDispatch()
  handleAddToCart = (item) => {
// console.log(item)
dispatch(addToCart(item))
  }

  handleAddToCartRemove = (item) => {
    // console.log(item)
    dispatch(addToCartRemove(item.name))
      }

    return (
    <View style={styles.scrollview}>
          <Text> Name : {item.name} </Text>
          <Text> Color :  {item.color} </Text>
          <Text> Price : {item.price} </Text>
          {
            isAdded ? 
            <Button title='Remove To Cart' onPress={()=>handleAddToCartRemove(item)}></Button>
            :
            <Button title='Add To Cart' onPress={()=>handleAddToCart(item)}></Button>
          }
        </View>
  )
}

export default Product

const styles = StyleSheet.create({ 
     scrollview:{
    backgroundColor: 'grey',
    paddingVertical: 100,
    paddingHorizontal: 100,
    borderRadius: 9,
    alignSelf:'center',
    marginBottom: 5

},})