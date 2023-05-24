// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsfTIfQWn66bY66QJlu3FX_xh_YFyKBoA",
  authDomain: "fir-auth-b5812.firebaseapp.com",
  projectId: "fir-auth-b5812",
  storageBucket: "fir-auth-b5812.appspot.com",
  messagingSenderId: "1025299257045",
  appId: "1:1025299257045:web:37122b528e5fc724b9b45c",
  measurementId: "G-278SNDFBJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();

export { app, auth };