
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCOwcPfI1pOcaygG5EWIRekT4f_U54ROHw",
    authDomain: "tiendasurajpc.firebaseapp.com",
    projectId: "tiendasurajpc",
    storageBucket: "tiendasurajpc.appspot.com",
    messagingSenderId: "263033822377",
    appId: "1:263033822377:web:d7052dc1cab7affd951db8",
    measurementId: "G-NL2KS5VXV4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
