// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';  // Import Firestore
import firebase from 'firebase/compat/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVpIafIQ31A7C_MhalqF6uJGhHzXmulP4",
  authDomain: "reactjs-to-do-ab288.firebaseapp.com",
  projectId: "reactjs-to-do-ab288",
  storageBucket: "reactjs-to-do-ab288.appspot.com",
  messagingSenderId: "131919653904",
  appId: "1:131919653904:web:2184f4faf98d6f1fc86e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Initialize Firestore

// Export the Firestore database
export { db };
