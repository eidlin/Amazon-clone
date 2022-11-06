import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtTuwMZPE_jYHAUy8XEsiwEA31DZYQKt4",
    authDomain: "clone-84be0.firebaseapp.com",
    projectId: "clone-84be0",
    storageBucket: "clone-84be0.appspot.com",
    messagingSenderId: "416804882910",
    appId: "1:416804882910:web:92204ed22eea08d24b754f",
    measurementId: "G-YB4R6NWJY2"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  
  export { db, auth};