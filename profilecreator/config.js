import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAAVnwqvPlmSmh9F_udJsvGqt7V94WUGGk",
    authDomain: "profilecreator-437fa.firebaseapp.com",
    databaseURL: "https://profilecreator-437fa-default-rtdb.firebaseio.com",
    projectId: "profilecreator-437fa",
    storageBucket: "profilecreator-437fa.appspot.com",
    messagingSenderId: "175032605155",
    appId: "1:175032605155:web:724c16c6fdcbe74e85a8d6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();