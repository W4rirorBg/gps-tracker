// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMP0EPBKB3e_sOXj1xLlnKou9CHRS-HFo",
  authDomain: "gps-tracker-2aaf9.firebaseapp.com",
  databaseURL: "https://gps-tracker-2aaf9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gps-tracker-2aaf9",
  storageBucket: "gps-tracker-2aaf9.firebasestorage.app",
  messagingSenderId: "112704983769",
  appId: "1:112704983769:web:46dfd5d3ce11dd99e964c8",
  measurementId: "G-YZ6T9PQD0M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
