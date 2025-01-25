import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'

const Axios_Practice = () => {

    const getApiData =async() =>{

        const response = await axios.get('https://api.themoviedb.org/3')
        console.log('api data ', response)
    }
    useEffect(()=>{
        getApiData();
    },[])

  return (
    <View>
      <Text>Axios_Practice</Text>
    </View>
  )
}

export default Axios_Practice

const styles = StyleSheet.create({})