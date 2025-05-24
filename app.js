// Import Firebase modules (modular SDK)  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";  
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";  
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";  

// Your Firebase config (fill with your project details)  
const firebaseConfig = {  
  apiKey: "<YOUR_FIREBASE_API_KEY>",  
  authDomain: "<YOUR_PROJECT>.firebaseapp.com",  
  databaseURL: "https://<YOUR_PROJECT>.firebaseio.com",  
  projectId: "<YOUR_PROJECT>",  
  storageBucket: "<YOUR_PROJECT>.appspot.com",  
  messagingSenderId: "<SENDER_ID>",  
  appId: "<APP_ID>"  
};  

// Initialize Firebase  
const app = initializeApp(firebaseConfig);  
const auth = getAuth(app);  
const db = getDatabase(app);  

// DOM Elements  
const loginContainer = document.getElementById('login-container');  
const appContainer = document.getElementById('app-container');  
const loginBtn = document.getElementById('login-btn');  
const logoutBtn = document.getElementById('logout-btn');  
const emailInput = document.getElementById('email');  
const passwordInput = document.getElementById('password');  
const loginError = document.getElementById('login-error');  

let map, busMarkers = {};  

// Initialize Leaflet map centered on Delhi  
function initMap() {  
  map = L.map('map').setView([28.6139, 77.2090], 12); // Delhi coords  

  L.tileLayer('https://{s
