// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEzbCQaNsdi-kjXawDY2jolZfmw6XbOlQ",
  authDomain: "netflixgpt-b104a.firebaseapp.com",
  projectId: "netflixgpt-b104a",
  storageBucket: "netflixgpt-b104a.firebasestorage.app",
  messagingSenderId: "208313581152",
  appId: "1:208313581152:web:747a9cbe75c16df56acd05",
  measurementId: "G-BBSHK96MZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();