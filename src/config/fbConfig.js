import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB1cTNKcaAHmssTVAXS2VtKcTfDZqf5RUE",
    authDomain: "net-ninja-mario-plan-1f3bf.firebaseapp.com",
    databaseURL: "https://net-ninja-mario-plan-1f3bf.firebaseio.com",
    projectId: "net-ninja-mario-plan-1f3bf",
    storageBucket: "net-ninja-mario-plan-1f3bf.appspot.com",
    messagingSenderId: "420244489408",
    appId: "1:420244489408:web:1f4a46efbcd2a5585f1925",
    measurementId: "G-TN5VD2NTHD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;