import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_Y8z23o2aDlEhc-OhRMlsAOxEFmuUpLM",
    authDomain: "county-clothing.firebaseapp.com",
    databaseURL: "https://county-clothing.firebaseio.com",
    projectId: "county-clothing",
    storageBucket: "county-clothing.appspot.com",
    messagingSenderId: "920399930014",
    appId: "1:920399930014:web:373ff3a9c9271147bed18f",
    measurementId: "G-YQLXXY5TTK"

};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
