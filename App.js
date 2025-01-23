// // import { Button, StyleSheet, Text, View, YellowBox } from 'react-native'
// // import React, { useState } from 'react'
// // import AsyncStorage from '@react-native-async-storage/async-storage'

// // const App = () => {
// //   const [test,SetTest]=useState('Amman')
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.text}> Name : {test} </Text>
// //       <Button title='Change Name' onPress={()=>SetTest('Abc')}></Button>
// //       <Test_props name={test} />
// //     </View>
// //   )
// // }

// // const Test_props = (props) => {
// // console.warn(props.name)
// // return (
// // <View><Text> Hi I am Data from Parent Component {props.name}  </Text></View>
// //   )
// // }

// // export default App

// // const styles = StyleSheet.create({
// //   container:{
// //     flex:1,
// //     backgroundColor:'#000000'
// //   }
// //   ,
// //   text:{
// //     fontSize:20,
// //     color:'yellow',

// //   }
// // })

// //ASYNC    STORAGE

// // import {Button, StyleSheet, Text, View} from 'react-native';
// // import React, { useState } from 'react';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const App = () => {
// //   const [name,SetName]=useState('')
// //   const SetData = async () => {
// //     await AsyncStorage.setItem('name1', 'Amman');
// //   };

// //   const GetData = async () => {
// //     const name = await AsyncStorage.getItem('name1');
// //     SetName('name1')

// //   };

// //   const RemoveData = async () => {
// //     await AsyncStorage.removeItem('name1');
// //     SetName('')
// //   };
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.text}>AsyncStorage Practice {name}</Text>
// //       <Button title="SetData" onPress={SetData}></Button>
// //       <Button title="GetData" color="grey" onPress={GetData}></Button>
// //       <Button title="RemoveData" color="red" onPress={RemoveData}></Button>
// //     </View>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#000000',
// //     alignItems: 'center',
// //   },
// //   text: {
// //     fontSize: 20,
// //     color: 'yellow',
// //   },
// // });

// //redux

// import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Header from './Components/Header';
// import Product from './Components/Product';

// const App = () => {
//   const products = [
//     {
//       name: 'Laptop',
//       price: 1200,
//       color: 'Silver',
//     },
//     {
//       name: 'Smartphone',
//       price: 800,
//       color: 'Black',
//     },
//     {
//       name: 'Headphones',
//       price: 150,
//       color: 'Red',
//     },
//     {
//       name: 'Smartwatch',
//       price: 250,
//       color: 'Blue',
//     },
//     {
//       name: 'Tablet',
//       price: 500,
//       color: 'Gold',
//     },
//   ];
//   return (
//     <View style={styles.container}>
//       <Text>Products Detail</Text>
//       <Header></Header>
      
//     <ScrollView > 
//       {products.map(item => (
//         <Product item ={item} />
       
//       ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
  
//     container:{
//         flexGrow: 1,
//         backgroundColor: '#1A202C',
//         paddingVertical: 20,
//         paddingHorizontal: 10,

//     }
// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckNotification from './Screens/CheckNotification'

const App = () => {
  return (
  <CheckNotification/>
  )
}

export default App

const styles = StyleSheet.create({})