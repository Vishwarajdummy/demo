// Documentation: https://firebase.google.com/docs/firestore/query-data/get-data
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjvVjWSO7iuEXVO34_ueoTBuiWQTryPzs",
  authDomain: "my-org-db.firebaseapp.com",
  projectId: "my-org-db",
  storageBucket: "my-org-db.firebasestorage.app",
  messagingSenderId: "397060842572",
  appId: "1:397060842572:web:84174ca1765b7ea6bb40e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
