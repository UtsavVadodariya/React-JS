// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5vHiV6T8z1dvurOgfWF5Up50hfc8HN_E",
  authDomain: "signup-and-signin-71285.firebaseapp.com",
  projectId: "signup-and-signin-71285",
  storageBucket: "signup-and-signin-71285.appspot.com",
  messagingSenderId: "765518629207",
  appId: "1:765518629207:web:af52a93a8c6ff7b253d612"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth};