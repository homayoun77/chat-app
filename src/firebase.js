import firebase from "firebase/app";
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB6f_oJeaQdMxvAVZ4_Ld3Py4pi0JkRJSI",
    authDomain: "homagram-c8e06.firebaseapp.com",
    projectId: "homagram-c8e06",
    storageBucket: "homagram-c8e06.appspot.com",
    messagingSenderId: "113194669794",
    appId: "1:113194669794:web:318e66980c2e8294d7b0bb"
  }).auth();