import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import { seedDatabase } from '../seed'

// we need to somehow seed the database


// we need a config here

const config = {
    apiKey: "AIzaSyD7c62Ga5Br7tO7udZtqGEnJ0wFbXUyyqQ",
    authDomain: "netflix-458f4.firebaseapp.com",
    projectId: "netflix-458f4",
    storageBucket: "netflix-458f4.appspot.com",
    messagingSenderId: "650107679092",
    appId: "1:650107679092:web:6e4a780b3c80ff4ba47c21"
}


const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export {firebase}