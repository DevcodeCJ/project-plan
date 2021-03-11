import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// CONFIG DATA
const apiKey = AIzaSyDkywHqtE9gcoxwaUMgo8Rl6A5JLx9SjIw;
const authDomain = process.env.REACT_APP_FIREBASECONFIG_AUTHDOMAIN;
const projectId = process.env.REACT_APP_FIREBASECONFIG_PROJECTID;
const storageBucket = process.env.REACT_APP_FIREBASECONFIG_STORAGEBUCKET;
const messagingSenderId =
  process.env.REACT_APP_FIREBASECONFIG_MESSAGINGSENDERID;
const appId = process.env.REACT_APP_FIREBASECONFIG_APPID;
const measurementId = process.env.REACT_APP_FIREBASECONFIG_MEASUREMENTID;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
