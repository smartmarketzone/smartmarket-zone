const firebaseConfig = {
  apiKey: "AIzaSyA6tYooh4CtX7ww9GRyXWhuakl2nLovtsY",
  authDomain: "smartmarket-zone-e7559.firebaseapp.com",
  projectId: "smartmarket-zone-e7559",
};

// INICIALIZAR
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// CAMBIO DE VISTAS
function showLogin(){
document.getElementById("loginBox").style.display="block";
document.getElementById("registerBox").style.display="none";
}

function showRegister(){
document.getElementById("loginBox").style.display="none";
document.getElementById("registerBox").style.display="block";
}

// REGISTRO
function register(){

let email = document.getElementById("regEmail").value;
let password = document.getElementById("regPass").value;

firebase.auth().createUserWithEmailAndPassword(email, password)
.then(() => alert("Cuenta creada correctamente"))
.catch(e => alert(e.message));

}

// LOGIN
function login(){

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPass").value;

firebase.auth().signInWithEmailAndPassword(email, password)
.then(() => {
window.location.href = "tipo.html";
})
.catch(e => alert(e.message));

}
function seleccionarTipo(tipo){
localStorage.setItem("tipoUsuario", tipo);

if(tipo === "comercio"){
window.location.href = "comercio.html";
}else{
window.location.href = "cliente.html";
}
}
