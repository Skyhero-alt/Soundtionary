// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM4b37H0ELGpcwsnorIOzRLlqE69Tgufg",
  authDomain: "soundtionary.firebaseapp.com",
  projectId: "soundtionary",
  storageBucket: "soundtionary.appspot.com",
  messagingSenderId: "631838503175",
  appId: "1:631838503175:web:177fd8288e2fa40824d5a2",
  measurementId: "G-CLBRLKEPGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);