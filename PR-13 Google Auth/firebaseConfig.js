import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmq4Mya0MZg0LjdKLBa73qcHb-T2i8M-E",
  authDomain: "auth-8da2f.firebaseapp.com",
  projectId: "auth-8da2f",
  storageBucket: "auth-8da2f.firebasestorage.app",
  messagingSenderId: "925843985708",
  appId: "1:925843985708:web:729ef0772c06f39f034889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider;
const database = getFirestore(app);

export {auth,provider,database};
