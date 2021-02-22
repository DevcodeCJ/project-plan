import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBSUa_gryppe1c0UB17wumhZvhrm3pH4IQ",
  authDomain: "project-app-db898.firebaseapp.com",
  projectId: "project-app-db898",
  storageBucket: "project-app-db898.appspot.com",
  messagingSenderId: "150711403124",
  appId: "1:150711403124:web:0a756a72dd4baed91dc721",
  measurementId: "G-ZRBYTN898R",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
