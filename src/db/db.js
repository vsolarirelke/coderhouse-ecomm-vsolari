// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDXcGWpSQ2vaMT5cOHcNrJmdQxt2H3ijs",
  authDomain: "coderhouse-ecomm-vsolari-fb.firebaseapp.com",
  projectId: "coderhouse-ecomm-vsolari-fb",
  storageBucket: "coderhouse-ecomm-vsolari-fb.appspot.com",
  messagingSenderId: "190728342202",
  appId: "1:190728342202:web:6138443a0b14ff05f25083"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;