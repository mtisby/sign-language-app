import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAlo7HLwB1zzrWNKRVwqiyC473WBd6BqUA",
    authDomain: "sign-language-app-760e0.firebaseapp.com",
    projectId: "sign-language-app-760e0",
    storageBucket: "sign-language-app-760e0.appspot.com",
    messagingSenderId: "152087664654",
    appId: "1:152087664654:web:29d983f4fb47570367845f",
    measurementId: "G-VMHR358GDJ"
  };
  // Initialize Firebase
  const fireAuth=firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fireAuth;
