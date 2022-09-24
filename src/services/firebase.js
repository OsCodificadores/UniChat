import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBgDUdJQGJKZfcZVWp_yIg_Veg3SICuvH4",
    authDomain: "uni-chat-8e9f7.firebaseapp.com",
    projectId: "uni-chat-8e9f7",
    storageBucket: "uni-chat-8e9f7.appspot.com",
    messagingSenderId: "1013329417056",
    appId: "1:1013329417056:web:005ed99bf765420ace4405",
    measurementId: "G-69EYFDTXM4"
};


const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };