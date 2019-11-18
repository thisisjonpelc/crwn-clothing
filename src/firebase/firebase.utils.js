import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCcMZAS3LKDuX5dAZLpiB_HAzeUAw1or30",
    authDomain: "crwn-db-4d17f.firebaseapp.com",
    databaseURL: "https://crwn-db-4d17f.firebaseio.com",
    projectId: "crwn-db-4d17f",
    storageBucket: "crwn-db-4d17f.appspot.com",
    messagingSenderId: "500627135066",
    appId: "1:500627135066:web:7a9a190637833366e41663",
    measurementId: "G-1XT3VQHFL0"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;