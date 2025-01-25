import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NotificationsServices, requestUserPermission } from '../utils/PushNotifications'

const CheckNotification = () => {
  useEffect(()=>{
    requestUserPermission()
    NotificationsServices()
  },[])
  return (
    <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
      <Text style={{fontSize:25, color:'yellow'}}>CheckNotification</Text>
    </View>
  )
}

export default CheckNotification

const styles = StyleSheet.create({})