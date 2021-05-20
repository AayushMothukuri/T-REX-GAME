import * as firebase from 'firebase'
require{'@firebase/firestore'}
var firebaseConfig = {
    apiKey: "AIzaSyCiOic5ZYv-PIjPSX3UNLWCust9wlwJwTQ",
    authDomain: "wili-48541.firebaseapp.com",
    projectId: "wili-48541",
    storageBucket: "wili-48541.appspot.com",
    messagingSenderId: "91287110817",
    appId: "1:91287110817:web:b476b6702da5f9c26f1ce0",
    measurementId: "G-8SF1JN7XE7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase.firestore()