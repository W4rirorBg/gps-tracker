// Your Firebase config  
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

firebase.initializeApp(firebaseConfig);  
const auth = firebase.auth();  
const db = firebase.firestore();  

const loginContainer = document.getElementById("login-container");  
const appContainer = document.getElementById("app-container");  
const loginBtn = document.getElementById("login-btn");  
const logoutBtn = document.getElementById("logout-btn");  
const emailInput = document.getElementById("email");  
const passwordInput = document.getElementById("password");  
const loginError = document.getElementById("login-error");  

let currentUserRole = null;  
let map;  
let busMarkers = {};  

// Auth change listener  
auth.onAuthStateChanged(async user => {  
  if (user) {  
    loginContainer.style.display = "none";  
    appContainer.style.display = "flex";  

    // Get role from Firestore users collection  
    try {  
      const doc = await db.collection("users").doc(user.uid).get();  
      if (doc.exists) {  
        currentUserRole = doc.data().role;  
      } else {  
        currentUserRole = "viewer"; // default  
      }  
    } catch {  
      currentUserRole = "viewer";  
    }  

    setupUIForRole(current
