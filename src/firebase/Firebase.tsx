// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC7wNo1Xe1PEJn4Ztt1wYKHBqwvnfD7vq0",
  authDomain: "restaruantapp-42643.firebaseapp.com",
  projectId: "restaruantapp-42643",
  storageBucket: "restaruantapp-42643.appspot.com",
  messagingSenderId: "1057065227236",
  appId: "1:1057065227236:web:46508b6953bb2c2abaedf1",
  measurementId: "G-QF0W5Z16TC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default getFirestore();
