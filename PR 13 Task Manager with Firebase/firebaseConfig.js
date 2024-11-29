import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtsy24canwK_8C06CvxZ9rlV-5rmBnqdc",
  authDomain: "project-task-manager-8aed6.firebaseapp.com",
  projectId: "project-task-manager-8aed6",
  storageBucket: "project-task-manager-8aed6.firebasestorage.app",
  messagingSenderId: "741986743709",
  appId: "1:741986743709:web:2ca91cb2abddb7afa76b74"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
export {auth, database}