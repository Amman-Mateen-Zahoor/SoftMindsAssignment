/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
// import Store from './Components/Redux/Store;
import Axios_Practice from './Components/Axios_Practice';

// const AppRedux= () =>(
//     <Provider store={Store} >
//         <App/>
//     </Provider>
// )

// AppRegistry.registerComponent(appName, () => AppRedux);
AppRegistry.registerComponent(appName, () => Axios_Practice);
