import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import { seedDatabase } from '../seed'

// we need to somehow seed the database


// we need a config here

const config = {
    apiKey: "AIzaSyDKrJ1iWKzYqzlNA2BYsoSc0wxGFuxFLc4",
    authDomain: "moovtime-58e7e.firebaseapp.com",
    projectId: "moovtime-58e7e",
    storageBucket: "moovtime-58e7e.appspot.com",
    messagingSenderId: "465471833133",
    appId: "1:465471833133:web:8f201854a3b6b726aea4a4"
};
  

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export {firebase}