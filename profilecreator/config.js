import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZdqhE7l1rZ6Z_lIkZh0bE2R2_t9n6WaM",
  authDomain: "richi-bansal.firebaseapp.com",
  databaseURL: "https://richi-bansal-default-rtdb.firebaseio.com",
  projectId: "richi-bansal",
  storageBucket: "richi-bansal.appspot.com",
  messagingSenderId: "271064435438",
  appId: "1:271064435438:web:eb5ca9558f53676faec1ff",
  measurementId: "G-HVNT11J4BE"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();
