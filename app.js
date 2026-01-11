// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNLeNACWjr0dr41g_utjpVBdGUpTwCJdg",
  authDomain: "altspace-25aed.firebaseapp.com",
  projectId: "altspace-25aed",
  storageBucket: "altspace-25aed.firebasestorage.app",
  messagingSenderId: "671097190540",
  appId: "1:671097190540:web:5cb724024e1ffd41d963a9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("🔥 Firebase Auth ready");

// SIGN UP
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Account created 🖤"))
    .catch(err => alert(err.message));
};

// LOGIN
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Logged in 💿"))
    .catch(err => alert(err.message));
};

// USER STATE
onAuthStateChanged(auth, user => {
  if (user) {
    console.log("🧠 Logged in as:", user.email);
  } else {
    console.log("❌ Not logged in");
  }
});
