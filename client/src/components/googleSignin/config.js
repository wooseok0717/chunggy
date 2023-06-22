// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBKAuJwtCTIx-IS90TeDSuuaoHkrOSQYSg",
  authDomain: "chunggy-development.firebaseapp.com",
  projectId: "chunggy-development",
  storageBucket: "chunggy-development.appspot.com",
  messagingSenderId: "958381191116",
  appId: "1:958381191116:web:d7f7c4e814952793953769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};