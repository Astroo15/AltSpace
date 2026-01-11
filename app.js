// DEBUG: confirm file loads
console.log("app.js loaded");

// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

// Firebase auth
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDNLeNACWjr0dr41g_utjpVBdGUpTwCJdg",
  authDomain: "altspace-25aed.firebaseapp.com",
  projectId: "altspace-25aed",
  storageBucket: "altspace-25aed.firebasestorage.app",
  messagingSenderId: "671097190540",
  appId: "1:671097190540:web:5cb724024e1ffd41d963a9",
  measurementId: "G-LSD853EXQV"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  console.log("auth state changed:", user);

  if (user && !window.location.pathname.includes("home.html")) {
    console.log("redirecting to home.html");
    window.location.href = "/AltSpace/home.html";
  }
});

    }
  }
});

// Logout function
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "/AltSpace/index.html";
  });
};

  });
};

