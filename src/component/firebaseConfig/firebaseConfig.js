// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhN2mcmQJHUjC2wZLw4I0BDrVA3Sb7n0A",
  authDomain: "alinfaaq-forms.firebaseapp.com",
  projectId: "alinfaaq-forms",
  storageBucket: "alinfaaq-forms.firebasestorage.app",
  messagingSenderId: "85717669162",
  appId: "1:85717669162:web:e4e5b56f499089dd693a53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};