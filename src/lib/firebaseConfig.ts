// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA4cCKhFSO4NCq91q3BXurZSTTcqWDMP8",
  authDomain: "llm-supply.firebaseapp.com",
  projectId: "llm-supply",
  storageBucket: "llm-supply.appspot.com",
  messagingSenderId: "411909432714",
  appId: "1:411909432714:web:412a89712e0aec18895473",
  measurementId: "G-L1EDCB6F56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
