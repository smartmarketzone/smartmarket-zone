// CONFIGURACIÓN DE FIREBASE (Tomada de tu base actual)
const firebaseConfig = {
  apiKey: "AIzaSyA6tYooh4CtX7ww9GRyXWhuakl2nLovtsY",
  authDomain: "smartmarket-zone-e7559.firebaseapp.com",
  projectId: "smartmarket-zone-e7559"
};

// Inicializar Firebase solo si no se ha inicializado antes
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

// --- FUNCIÓN DE LOGIN ---
function login() {
    // Usamos regEmail/regPass para mantener consistencia con los IDs del HTML
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPass").value;

    if (!email || !password) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Al entrar, verificamos qué tipo de usuario es para saber a dónde mandarlo
        const user = userCredential.user;
        verificarRutaUsuario(user.uid);
    })
    .catch((error) => {
        alert("Error al iniciar sesión: " + error.message);
    });
}

// --- FUNCIÓN DE REGISTRO ---
function register() {
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPass").value;

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("¡Cuenta creada con éxito!");
        // Después de registrar, lo mandamos a elegir si es Cliente o Comercio
        window.location.href = "tipo.html";
    })
    .catch((error) => {
        alert("Error en el registro: " + error.message);
    });
}

// --- SELECCIONAR TIPO (Comercio o Cliente) ---
function seleccionarTipo(tipo) {
    const user = firebase.auth().currentUser;

    if (!user) {
        alert("Debes estar autenticado para elegir un rol.");
        return;
    }

    // Guardamos el rol en la colección "usuarios" vinculada al UID de Firebase
    db.collection("usuarios").doc(user.uid).set({
        email: user.email,
        tipo: tipo,
        fechaRegistro: new Date()
    })
    .then(() => {
        // Redirección dinámica según la elección
        if (tipo === "comercio") {
            window.location.href = "registro_comercio.html";
        } else {
            window.location.href = "cliente.html";
        }
    })
    .catch((error) => {
        console.error("Error al guardar tipo:", error);
        alert("Hubo un error al guardar tu elección.");
    });
}

// --- UTILIDAD: VERIFICAR RUTA AL LOGUEARSE ---
function verificarRutaUsuario(uid) {
    db.collection("usuarios").doc(uid).get().then((doc) => {
        if (doc.exists) {
            const datos = doc.data();
            if (datos.tipo === "comercio") {
                window.location.href = "comercio.html";
            } else {
                window.location.href = "cliente.html";
            }
        } else {
            // Si el usuario existe en Auth pero no tiene datos en Firestore, va a elegir tipo
            window.location.href = "tipo.html";
        }
    });
}
