import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
  apiKey: "AIzaSyCQR_4z0qBKlb-VG0cm4-R-1IDRBUncpcE",
  authDomain: "crwn-db-a9282.firebaseapp.com",
  databaseURL: "https://crwn-db-a9282.firebaseio.com",
  projectId: "crwn-db-a9282",
  storageBucket: "crwn-db-a9282.appspot.com",
  messagingSenderId: "1006751508850",
  appId: "1:1006751508850:web:6023a8c6c2ac4d55ad55eb"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




