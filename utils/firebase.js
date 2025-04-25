// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLx2nIwYtpC8RlHAfGWHiw3VFgjV-6RW0",
    authDomain: "movieai-57bf9.firebaseapp.com",
    projectId: "movieai-57bf9",
    storageBucket: "movieai-57bf9.firebasestorage.app",
    messagingSenderId: "167805500292",
    appId: "1:167805500292:web:05e820634496dec08e3bd1",
    measurementId: "G-QH2QVLQ7K4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();