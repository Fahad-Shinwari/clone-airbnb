import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDPxFE1TlCFAZCYFYUwzjM4t_9Si0MDAjA",
    authDomain: "airbnb-clone-fdc7f.firebaseapp.com",
    projectId: "airbnb-clone-fdc7f",
    storageBucket: "airbnb-clone-fdc7f.appspot.com",
    messagingSenderId: "212523491299",
    appId: "1:212523491299:web:72f467811e104f5d78cad6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };

  