import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQM73agGFkAbQxj08edMNmAtEGFoXD8-o",
    authDomain: "online-shop-74d78.firebaseapp.com",
    projectId: "online-shop-74d78",
    storageBucket: "online-shop-74d78.appspot.com",
    messagingSenderId: "163000088225",
    appId: "1:163000088225:web:68aff48e59976b9b1162e0",
    databaseURL: "https://online-shop-74d78.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth();
export const currentUser = auth.currentUser;

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);