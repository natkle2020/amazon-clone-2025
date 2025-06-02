
import  firebase  from "firebase/compat/app";
// to use Authentication
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCF_JUZCEjKRMxp3X_3GcXoLYCBNF5kj9s",
  authDomain: "clone-ff770.firebaseapp.com",
  projectId: "clone-ff770",
  storageBucket: "clone-ff770.firebasestorage.app",
  messagingSenderId: "269012145029",
  appId: "1:269012145029:web:fefc00c8bcaa7ab0bfaaec"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =app.firestore();