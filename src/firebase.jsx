import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD0hmw0EmGW01jba4Z3K-1gVtqQH1VIw9o",
  authDomain: "shopper-app-95.firebaseapp.com",
  projectId: "shopper-app-95",
  storageBucket: "shopper-app-95.appspot.com",
  messagingSenderId: "636653100676",
  appId: "1:636653100676:web:4dc73cc9982d362cbe6cd1",
  measurementId: "G-6Q523LG49H"
};

const app = firebase.initializeApp(firebaseConfig)

export const myDatabase = firebase.firestore()

//connect to Authentication
// GoogleAuthProvider
export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()
