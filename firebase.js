// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut,
  setPersistence, 
  browserSessionPersistence 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// TU CONFIG AQUÍ 👇
const firebaseConfig = {
  apiKey: "AIzaSyBvq0Ls_HK5UufyflFfSuKa_ssytbKCG40",
  authDomain: "caa-ict.firebaseapp.com",
  projectId: "caa-ict",
  storageBucket: "caa-ict.firebasestorage.app",
  messagingSenderId: "825632827939",
  appId: "1:825632827939:web:1d64ec3d96c011d1179f96",
  measurementId: "G-5QETF832NR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ⚡ IMPORTANTE: que NO recuerde sesión
setPersistence(auth, browserSessionPersistence);

export { auth, signInWithEmailAndPassword, signOut };