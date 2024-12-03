// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVaGgvjUdgWEmh0ERFXT5yFrNJ6o_kmFQ",
  authDomain: "netflixclone-4a2b8.firebaseapp.com",
  projectId: "netflixclone-4a2b8",
  storageBucket: "netflixclone-4a2b8.firebasestorage.app",
  messagingSenderId: "764224600043",
  appId: "1:764224600043:web:067bcd02c57d0f0ae2cbae",
  measurementId: "G-TQZSEEHSLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();