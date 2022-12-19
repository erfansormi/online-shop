import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSLuYMorqaRMcXPD8yyQIS067cSdEEISY",
    authDomain: "online-shop-d006c.firebaseapp.com",
    projectId: "online-shop-d006c",
    storageBucket: "online-shop-d006c.appspot.com",
    messagingSenderId: "1075579300881",
    appId: "1:1075579300881:web:81dc9914ea45b4f49795b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);