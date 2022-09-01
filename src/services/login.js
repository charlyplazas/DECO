import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

let botonLogin=document.getElementById("botonLogin")

botonLogin.addEventListener("click", function (evento) {
    evento.preventDefault();
  
    let email = document.getElementById("correoLogin").value;
    let password = document.getElementById("contrasenaPassword").value;
  
    let formulario = document.getElementById("formularioLogin");
  
    console.log(email);
  
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
        const user = userCredential.user;
        // ...
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Successful registration',
          showConfirmButton: false,
          timer: 2000
        })
        formulario.reset()   
      })
    
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    });
})