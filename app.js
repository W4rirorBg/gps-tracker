// Import Firebase functions (modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Your Firebase configuration (replace with your own config if needed)
const firebaseConfig = {
  apiKey: "AIzaSyDGJvL0HJIzKimGeZap9NjNBushrxFlCqY",
  authDomain: "gps-tracker-new-9685c.firebaseapp.com",
  projectId: "gps-tracker-new-9685c",
  storageBucket: "gps-tracker-new-9685c.firebasestorage.app",
  messagingSenderId: "307345855258",
  appId: "1:307345855258:web:18ac358af2260f7a6fd2a3",
  measurementId: "G-7DNGMPQN51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Get DOM elements
const statusEl = document.getElementById('status');
const locationEl = document.getElementById('location');
const startButton = document.getElementById('startTracking');

// Start geolocation tracking on button click
startButton.addEventListener('click', () => {
  if (!navigator.geolocation) {
    statusEl.textContent = 'Geolocation is not supported by your browser';
    return;
  }

  statusEl.textContent = 'Locating…';

  navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
  });
});

// Success callback saves location to Firebase
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  statusEl.textContent = 'Location found!';
  locationEl.textContent = `Latitude: ${latitude.toFixed(6)}, Longitude: ${longitude.toFixed(6)}`;

  set(ref(database, 'users/user123/location'), {
    latitude: latitude,
    longitude: longitude,
    timestamp: Date.now()
  }).catch(err => {
    statusEl.textContent = 'Error saving to database: ' + err.message;
  });
}

// Error callback
function error() {
  statusEl.textContent = 'Unable to retrieve your location';
}
