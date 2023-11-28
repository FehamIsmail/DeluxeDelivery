// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFKp_qctZt1s6WmGDO6LqG2tklSd0x4Dg",
    authDomain: "deluxe-delivery-529ce.firebaseapp.com",
    projectId: "deluxe-delivery-529ce",
    storageBucket: "deluxe-delivery-529ce.appspot.com",
    messagingSenderId: "1023381026247",
    appId: "1:1023381026247:web:e70f4af434bfc1a952d5e2",
    measurementId: "G-L56RQRQFCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);