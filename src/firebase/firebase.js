// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU-aiLrkpUfTu4aGWpXvQuv0sAf88TxVk",
  authDomain: "movie-app-e7ac6.firebaseapp.com",
  projectId: "movie-app-e7ac6",
  storageBucket: "movie-app-e7ac6.appspot.com",
  messagingSenderId: "335939767539",
  appId: "1:335939767539:web:e5407ba4ea14e224513b86",
  measurementId: "G-VRPM1HL63F",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
