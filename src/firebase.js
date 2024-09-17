// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1ocJYUqgqnMU7E90vNgSq-p8b1tlR5QA",
  authDomain: "aluno-d3928.firebaseapp.com",
  projectId: "aluno-d3928",
  storageBucket: "aluno-d3928.appspot.com",
  messagingSenderId: "1072159158094",
  appId: "1:1072159158094:web:d3c91dd250bd19ebc0f81f",
  measurementId: "G-0KZSD6ZRWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
export { db };
