/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import {firebase} from '@react-native-firebase/app';
// const firebaseConfig = {
//   apiKey: 'AIzaSyDkUqRbVxKwg-3rfpJix7u-aRbYTlPSvY0',
//   authDomain: 'com.firebaseauth_1',
//   projectId: 'rn-firebase-auth-4efae',
//   storageBucket: 'rn-firebase-auth-4efae.appspot.com',
//   messagingSenderId: '1:293854280150:android:3ad6a4c1eba303f22ecc77',
//   appId: '1:293854280150:android:3ad6a4c1eba303f22ecc77',
// };

// async ()=>{
//     await firebase.initializeApp(firebaseConfig);
// }

AppRegistry.registerComponent(appName, () => App);
