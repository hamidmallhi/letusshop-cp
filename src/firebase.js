import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD8LsvEysaJOeH4COY3cZOIGJajGxG-S18",
    authDomain: "letusshop-cp.firebaseapp.com",
    projectId: "letusshop-cp",
    storageBucket: "letusshop-cp.appspot.com",
    messagingSenderId: "3359566438",
    appId: "1:3359566438:web:a356eb775110dc94d69ba7",
    measurementId: "G-Q9Q1ZB6KRY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };