
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyDfHyTXP88908XOapt7YLDuFV3cMpG_2Iw",
    authDomain: "netflix-clone-9df48.firebaseapp.com",
    projectId: "netflix-clone-9df48",
    storageBucket: "netflix-clone-9df48.appspot.com",
    messagingSenderId: "197093866026",
    appId: "1:197093866026:web:c44d537039b746fed76153"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };