import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

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

window.signup = function () {
  createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value
  ).then(() => {
    alert("Account created 🖤");
    location.href = "astro.html";
  }).catch(e => alert(e.message));
};

window.login = function () {
  signInWithEmailAndPassword(
    auth,
    email.value,
    password.value
  ).then(() => {
    alert("Logged in 💿");
    location.href = "astro.html";
  }).catch(e => alert(e.message));
};
