/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
// import Store from './Components/Redux/Store;
import Axios_Practice from './Components/Axios_Practice';
import messaging from '@react-native-firebase/messaging';

// const AppRedux= () =>(
//     <Provider store={Store} >
//         <App/>
//     </Provider>
// )
// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
// AppRegistry.registerComponent(appName, () => AppRedux);
AppRegistry.registerComponent(appName, () => App);
