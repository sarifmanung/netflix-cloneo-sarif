import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYuBjsCffCAEsha7Ch2-IfWGTvKNsWCcw",
  authDomain: "netflix-clone-sarif.firebaseapp.com",
  projectId: "netflix-clone-sarif",
  storageBucket: "netflix-clone-sarif.appspot.com",
  messagingSenderId: "141442939998",
  appId: "1:141442939998:web:9c74a83dac19a5024448cf",
  measurementId: "G-H3TSCN8C4E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
