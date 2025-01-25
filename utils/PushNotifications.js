import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken()
  }
}

const getFcmToken = async() =>{
let fcmToken =await AsyncStorage.getItem('fcmToken');
console.log('OldfcmToken',fcmToken)
if(!fcmToken){
try {
  
  const fcmToken= await messaging().getToken()
  if(fcmToken){
    console.log("New Generated Fcm Token", fcmToken)
    await AsyncStorage.setItem('fcmToken',fcmToken)
  }
} catch (error) {
  console.log("firsterror",error)
}
}
}

export const NotificationsServices =() =>{
messaging().onNotificationOpenedApp((remoteMessage)=>(
  console.log("Notifications Cause because app is open in background state ",remoteMessage.notification)

))
}
// Foreground message handler
messaging().onMessage(async remoteMessage => {
console.log("Notification From foreground",remoteMessage)
});


// check initial notification is available 
messaging()
.getInitialNotification()
.then(remoteMessage=>{
  if (remoteMessage){
    console.log('Notification Caused app open for quit satate ',
      remoteMessage.notification
    )
    


  }

})