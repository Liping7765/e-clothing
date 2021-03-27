import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDBUIG68D1LGj0gIYvW45b1HZgt7cdC8xI",
    authDomain: "crwndb-d9de0.firebaseapp.com",
    projectId: "crwndb-d9de0",
    storageBucket: "crwndb-d9de0.appspot.com",
    messagingSenderId: "769772715628",
    appId: "1:769772715628:web:6eecee5d60c0ece7b62249",
    measurementId: "G-ZED47J7DVK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;