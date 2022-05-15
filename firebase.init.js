// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth”`
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLpZ9XhG3O87DuXBrVPKfitxcuHreLyaE",
    authDomain: "warehouse-management-94ab6.firebaseapp.com",
    projectId: "warehouse-management-94ab6",
    storageBucket: "warehouse-management-94ab6.appspot.com",
    messagingSenderId: "602088831447",
    appId: "1:602088831447:web:fa32d615cfd49f683d7392"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth