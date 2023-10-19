
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB8N5amH5CA6PWm-lcCxEFyLd1g8VfqoU0",
  authDomain: "login-60881.firebaseapp.com",
  projectId: "login-60881",
  storageBucket: "login-60881.appspot.com",
  messagingSenderId: "521645672852",
  appId: "1:521645672852:web:97a1f21cdd3561c5f5a781"
};


const app = firebase.initializeApp(firebaseConfig);
export const data=firebase.firestore()

export const Auth=getAuth(app)
export const Provider=new GoogleAuthProvider()