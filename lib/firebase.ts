// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwwG6tgOAcf82jzkMGZwMwebpqdbznmgg",
  authDomain: "my-portfolio-5d0d5.firebaseapp.com",
  projectId: "my-portfolio-5d0d5",
  storageBucket: "my-portfolio-5d0d5.appspot.com",
  messagingSenderId: "230379488177",
  appId: "1:230379488177:web:78e69306c4ca9842b83390",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
