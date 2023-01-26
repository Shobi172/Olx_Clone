import firebase from 'firebase';
import 'firebase/auth' 
import 'firebase/firestore'
import 'firebase/storage' 

const firebaseConfig = {
    apiKey: "AIzaSyC90pvKtjk-RBO472mW6_wWKWVCYSnPMQk",
    authDomain: "olx-clone-d4fe6.firebaseapp.com",
    projectId: "olx-clone-d4fe6",
    storageBucket: "olx-clone-d4fe6.appspot.com",
    messagingSenderId: "293560590543",
    appId: "1:293560590543:web:e35d7012690b63ff72d7ba",
    measurementId: "G-74W5B4C0VR"
  };


  export default firebase.initializeApp(firebaseConfig)