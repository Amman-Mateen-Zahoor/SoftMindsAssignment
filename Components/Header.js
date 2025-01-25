import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { reducer } from './Redux/Reducer'


const Header = () => {

    const[count,SetCount]=useState(0)
    const cartData = useSelector((state)=>state.reducer)
    useEffect(()=>{
        SetCount(cartData.length)
    },[cartData])
    // console.log('This is Header',cartData)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    text:{
        textAlign:'right',
        fontSize:20,
        color : 'grey',
        paddingRight:20

    },
    container:{
    backgroundColor:'khaki'

    }
})