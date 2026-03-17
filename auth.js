// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlQ97icXfZlloHCtMrXigcEF0Ipi8UBV8",
  authDomain: "smartmarket-zone.firebaseapp.com",
  projectId: "smartmarket-zone",
  storageBucket: "smartmarket-zone.firebasestorage.app",
  messagingSenderId: "178597434110",
  appId: "1:178597434110:web:67caf941dd8d26c3328baf",
  measurementId: "G-G3KNXV64EC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
