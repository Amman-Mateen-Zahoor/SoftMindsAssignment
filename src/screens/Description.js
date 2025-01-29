import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonLayout from '../layout/CommonLayout'
import { Color } from '../constants/style'

const Description = ({route}) => {
    const description = route.params 
    // console.log("first",description)
  return (
   <CommonLayout heading={'Description'}>
    <Text style={{alignSelf:'center',color:Color.coal}}>{description}</Text>
   </CommonLayout>
  )
}

export default Description

const styles = StyleSheet.create({})