// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCDJi7PJM-birPRTL_uWzmFZawS3PBeTk",
    authDomain: "pastelaria-dfe8c.firebaseapp.com",
    projectId: "pastelaria-dfe8c",
    storageBucket: "pastelaria-dfe8c.firebasestorage.app",
    messagingSenderId: "637521675967",
    appId: "1:637521675967:web:b8faaf6bf52b5c61c2e80a",
    measurementId: "G-TNCK6P585Y"
  };
  
  // Inicializar o Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = firebase.getAnalytics(app);
  const db = firebase.firestore(app);
  const auth = firebase.auth(app);
  