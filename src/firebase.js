// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiUBlnfF3HFAVIkC5_jsTwrZjkCUs_a_I",
  authDomain: "ekwb-f8682.firebaseapp.com",
  projectId: "ekwb-f8682",
  storageBucket: "ekwb-f8682.appspot.com",
  messagingSenderId: "821053125189",
  appId: "1:821053125189:web:82c5553c0b6016cf22692c",
  measurementId: "G-HL0FBW1E0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
