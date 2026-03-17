// FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
getFirestore,
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// REGISTRO
window.register = async function(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let type = document.getElementById("userType").value;

try{

let userCredential = await createUserWithEmailAndPassword(auth, email, password);

await setDoc(doc(db, "users", userCredential.user.uid), {
email: email,
type: type
});

alert("Usuario registrado");

// REDIRECCIÓN
if(type === "comercio"){
window.location.href = "panel-comercio.html";
}else{
window.location.href = "index.html";
}

}catch(error){
alert(error.message);
}

}

// LOGIN
window.login = async function(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

try{

await signInWithEmailAndPassword(auth, email, password);

window.location.href = "index.html";

}catch(error){
alert(error.message);
}

}
