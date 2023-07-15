// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBjX65NUl2gsEhQ5smK3QwtX79E8BRqF30",
  authDomain: "chunggy-production-bfdd6.firebaseapp.com",
  projectId: "chunggy-production-bfdd6",
  storageBucket: "chunggy-production-bfdd6.appspot.com",
  messagingSenderId: "802761399814",
  appId: "1:802761399814:web:631d3cbbc79b6018f2ad87",
  measurementId: "G-Z6C5ST049L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};