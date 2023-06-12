// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXon3bSTlPttZ6t-0CT9dRumqlzMjTyjc",
    authDomain: "haihtuv-tallinn.firebaseapp.com",
    projectId: "haihtuv-tallinn",
    storageBucket: "haihtuv-tallinn.appspot.com",
    messagingSenderId: "817065624614",
    appId: "1:817065624614:web:b2a22d854a0c2eb2f892e7",
    measurementId: "G-8QVKH8NVG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
