// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdzrddBKdWe7A5JqIuKQFL_M9xXt019Wc",
  authDomain: "fir-auth-4e6b8.firebaseapp.com",
  projectId: "fir-auth-4e6b8",
  storageBucket: "fir-auth-4e6b8.appspot.com",
  messagingSenderId: "282957825224",
  appId: "1:282957825224:web:c2e9dd064c362da69991fd"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
