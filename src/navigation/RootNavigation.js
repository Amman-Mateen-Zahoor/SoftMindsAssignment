// import {StyleSheet} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from '../screens/Home';

// const Stack = createNativeStackNavigator();

// const RootNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default RootNavigation;

// const styles = StyleSheet.create({});
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import CommonLayout from '../layout/CommonLayout'
// import Home from '../screens/Home'

// const RootNavigation = () => {
//   return (
// <Home/>
//   )
// }

// export default RootNavigation

// const styles = StyleSheet.create({})
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import AddList from '../screens/AddList'
import Description from '../screens/Description'

const Stack = createNativeStackNavigator()

const RootNavigation =() =>{
return(
<NavigationContainer  >
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='AddList' component={AddList}/>
        <Stack.Screen name='Description' component={Description}/>
    </Stack.Navigator>
</NavigationContainer>
)

}
export default RootNavigation