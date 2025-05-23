import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMP0EPBKB3e_sOXj1xLlnKou9CHRS-HFo",
  authDomain: "gps-tracker-2aaf9.firebaseapp.com",
  databaseURL: "https://gps-tracker-2aaf9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gps-tracker-2aaf9",
  storageBucket: "gps-tracker-2aaf9.firebasestorage.app",
  messagingSenderId: "112704983769",
  appId: "1:112704983769:web:46dfd5d3ce11dd99e964c8",
  measurementId: "G-YZ6T9PQD0M" // This is for Google Analytics, optional if you don't use it
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get service instances
export const db = getDatabase(app);
export const auth = getAuth(app);

// You would then use 'db' and 'auth' throughout your app to interact with
// Realtime Database and Authentication respectively.
