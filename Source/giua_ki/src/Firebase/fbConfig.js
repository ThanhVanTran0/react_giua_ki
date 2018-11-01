  import firebase from 'firebase'
  import 'firebase/auth'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC3GF8UBKfUlPfd2qdiFyYh4_pM_AK9ZLY",
    authDomain: "giuaki-1855a.firebaseapp.com",
    databaseURL: "https://giuaki-1855a.firebaseio.com",
    projectId: "giuaki-1855a",
    storageBucket: "giuaki-1855a.appspot.com",
    messagingSenderId: "985538339278"
  };
  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase,googleAuthProvider,database};