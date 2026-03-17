npm install firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLQ97iCxfZlLoHCtMrXigcEF0Ipi8UBV8",
  authDomain: "smartmarket-zone.firebaseapp.com",
  projectId: "smartmarket-zone"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.register = async function(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

try{
await createUserWithEmailAndPassword(auth, email, password);
alert("Usuario registrado");
}catch(error){
alert(error.message);
}

}

window.login = async function(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

try{
await signInWithEmailAndPassword(auth, email, password);
alert("Login correcto");
}catch(error){
alert(error.message);
}

}
