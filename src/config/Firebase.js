import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAWwPW9zQ0Ry1hupblPGfx0qUN9E_5So7Q",
    authDomain: "moto-autoura.firebaseapp.com",
    databaseURL: "https://moto-autoura.firebaseio.com",
    projectId: "moto-autoura",
    storageBucket: "moto-autoura.appspot.com",
    messagingSenderId: "292686273094"
  };
  
export let fb =firebase.initializeApp(config);
