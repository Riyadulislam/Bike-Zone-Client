// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOZe1CNZ9Pw09hYy74X5291wMNYfCbOpE",
  authDomain: "used-bike-sell.firebaseapp.com",
  projectId: "used-bike-sell",
  storageBucket: "used-bike-sell.appspot.com",
  messagingSenderId: "895475217143",
  appId: "1:895475217143:web:639dfb26ef0d359f6b99f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;