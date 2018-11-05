import firebase from 'firebase'
export default () => {
  firebase.auth().onAuthStateChanged(user => {
    const db = firebase.database();
    var amOnline = db.refFromURL('https://giuaki-1855a.firebaseio.com/.info/connected');
    var userRef = db.refFromURL('https://giuaki-1855a.firebaseio.com/presence/' + user.uid);
    
    amOnline.on('value', function (snapshot) {
      if (snapshot.val()) {
        userRef.onDisconnect().set({uid: user.uid, time: firebase.database.ServerValue.TIMESTAMP, online: false, displayName: user.displayName, photoURL: user.photoURL});
        userRef.set({uid: user.uid, time: firebase.database.ServerValue.TIMESTAMP, online: true, displayName: user.displayName, photoURL: user.photoURL});
      }
    });
  })
}