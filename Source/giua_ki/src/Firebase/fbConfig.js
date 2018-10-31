  import firebase from 'firebase'
  import 'firebase/auth'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCJtjbPbX3_mqYzXG9zELCt5JJKt3yYbx0",
    authDomain: "hocfirebase-7db4a.firebaseapp.com",
    databaseURL: "https://hocfirebase-7db4a.firebaseio.com",
    projectId: "hocfirebase-7db4a",
    storageBucket: "hocfirebase-7db4a.appspot.com",
    messagingSenderId: "327207271884"
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase,googleAuthProvider,database};