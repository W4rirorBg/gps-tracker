// Your Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      // Redirect based on role
      switch(role) {
        case 'admin':
          window.location.href = 'admin.html';
          break;
        case 'viewer':
          window.location.href = 'viewer.html';
          break;
        case 'tracked':
          window.location.href = 'tracked.html';
          break;
      }
    })
    .catch(error => {
      document.getElementById('error').innerText = error.message;
      const users = {
  admin: { password: "GDGISpass2025", type: "admin" },
  viewer1: { password: "viewer123", type: "viewer" },
  student1: { password: "trackme", type: "tracked" },
};

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error-message");

  if (users[user] && users[user].password === pass) {
    showPanel(users[user].type);
  } else {
    error.textContent = "Invalid login";
  }
}

function showPanel(type) {
  document.querySelector(".login-container").classList.add("hidden");
  document.getElementById("admin-panel").classList.add("hidden");
  document.getElementById("viewer-panel").classList.add("hidden");
  document.getElementById("tracked-panel").classList.add("hidden");

  if (type === "admin") document.getElementById("admin-panel").classList.remove("hidden");
  if (type === "viewer") document.getElementById("viewer-panel").classList.remove("hidden");
  if (type === "tracked") document.getElementById("tracked-panel").classList.remove("hidden");
}

function logout() {
  document.querySelector(".login-container").classList.remove("hidden");
  document.getElementById("admin-panel").classList.add("hidden");
  document.getElementById("viewer-panel").classList.add("hidden");
  document.getElementById("tracked-panel").classList.add("hidden");
  document.getElementById("error-message").textContent = "";
}
    });
}
