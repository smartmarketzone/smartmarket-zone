const firebaseConfig = {
  apiKey: "AIzaSyA6tYooh4CtX7ww9GRyXWhuakl2nLovtsY",
  authDomain: "smartmarket-zone-e7559.firebaseapp.com",
  projectId: "smartmarket-zone-e7559"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

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

// REGISTRO
function register(){
let email = document.getElementById("regEmail").value;
let password = document.getElementById("regPass").value;

firebase.auth().createUserWithEmailAndPassword(email, password)
.then(() => alert("Cuenta creada"))
.catch(e => alert(e.message));
}

// CAMBIAR VISTAS
function showLogin(){
document.getElementById("loginBox").style.display="block";
document.getElementById("registerBox").style.display="none";
}

function showRegister(){
document.getElementById("loginBox").style.display="none";
document.getElementById("registerBox").style.display="block";
}

// GUARDAR TIPO
function seleccionarTipo(tipo){

let user = firebase.auth().currentUser;

if(!user){
alert("Error usuario");
return;
}

db.collection("usuarios").doc(user.uid).set({
email: user.email,
tipo: tipo
})
.then(() => {

if(tipo === "comercio"){
window.location.href = "registro_comercio.html";
}else{
window.location.href = "cliente.html";
}

})
.catch(() => alert("Error al guardar"));

}
