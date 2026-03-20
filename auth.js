// 1. CONFIGURACIÓN DE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyA6tYooh4CtX7ww9GRyXWhuakl2nLovtsY",
  authDomain: "smartmarket-zone-e7559.firebaseapp.com",
  projectId: "smartmarket-zone-e7559"
};

// Inicialización segura para evitar errores en recargas
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

// 2. CONFIGURACIÓN ESPECIAL PARA MÓVILES
// Esto obliga al navegador a recordar al usuario aunque cierre la pestaña
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
      console.log("Persistencia de sesión activada correctamente");
  })
  .catch((error) => {
      console.error("Error en persistencia:", error);
  });

// --- FUNCIÓN DE LOGIN ---
function login() {
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPass").value.trim();

    if (!email || !password) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        console.log("Login exitoso en móvil/PC");
        verificarRutaUsuario(userCredential.user.uid);
    })
    .catch((error) => {
        console.error("Error login:", error.code);
        alert("Error: " + error.message);
    });
}

// --- FUNCIÓN DE REGISTRO ---
function register() {
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPass").value.trim();

    if (!email || password.length < 6) {
        alert("Revisa los datos. La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("¡Cuenta creada con éxito!");
        // 🔥 Redirigimos directamente a la página de selección
        window.location.href = "seleccion.html";
    })
    .catch((error) => {
        console.error("Error registro:", error.code);
        alert("Error: " + error.message);
    });
}

// --- SELECCIONAR TIPO (Comercio o Cliente) ---
function seleccionarTipo(tipo) {
    const user = firebase.auth().currentUser;

    if (!user) {
        alert("Sesión expirada. Por favor, inicia sesión de nuevo.");
        window.location.href = "login.html";
        return;
    }

    db.collection("usuarios").doc(user.uid).set({
        email: user.email,
        tipo: tipo,
        fechaRegistro: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        if (tipo === "comercio") {
            window.location.href = "registro_comercio.html";
        } else {
            window.location.href = "cliente.html";
        }
    })
    .catch((error) => {
        console.error("Error al guardar tipo:", error);
        alert("Hubo un problema al guardar tu elección.");
    });
}

// --- UTILIDAD: REDIRECCIÓN AUTOMÁTICA SEGÚN ROL ---
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
            // 🔥 Si el usuario no tiene rol, lo mandamos a elegir en seleccion.html
            window.location.href = "seleccion.html";
        }
    }).catch((error) => {
        console.error("Error verificando ruta:", error);
        // Por seguridad, si hay error de lectura, mandamos a seleccion.html
        window.location.href = "seleccion.html";
    });
}
