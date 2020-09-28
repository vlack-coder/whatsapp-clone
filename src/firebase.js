// npm i firebase
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWmYEA7EpShdaaOXvxRqgW3TVoj6IrBeA",
  authDomain: "whatsapp-clone-64096.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-64096.firebaseio.com",
  projectId: "whatsapp-clone-64096",
  storageBucket: "whatsapp-clone-64096.appspot.com",
  messagingSenderId: "711353987313",
  appId: "1:711353987313:web:15b9dea8e8c91816f87950",
  measurementId: "G-7P29VN8MGV"
};

// ----------------------------------------------------------
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
// ----------------------------------------------------------
