// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjijCvnG6Ep6fVqfc2rehE0CKHfHOiFXs",
  authDomain: "pr-11-fire-base.firebaseapp.com",
  projectId: "pr-11-fire-base",
  storageBucket: "pr-11-fire-base.firebasestorage.app",
  messagingSenderId: "558739962279",
  appId: "1:558739962279:web:fd42f34ec613c48fae5e82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };