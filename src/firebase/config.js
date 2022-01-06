import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJlS504mGpM5osH1poyUtYw4dPCbKs3t4",
    authDomain: "fir-8c8d1.firebaseapp.com",
    projectId: "fir-8c8d1",
    storageBucket: "fir-8c8d1.appspot.com",
    messagingSenderId: "207213974799",
    appId: "1:207213974799:web:ea63b3f7f68f0a8ebb1a7a",
    measurementId: "G-9NCPGDH6C7"
  };

  firebase.initializeApp(firebaseConfig)


  const firestore = firebase.firestore()

  export {firestore}