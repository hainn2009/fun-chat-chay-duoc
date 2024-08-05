import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCzkxgHPe9Q-PF5WAejXg4WV2tTRQ6YuEw",
  authDomain: "fun-chat-e6095.firebaseapp.com",
  projectId: "fun-chat-e6095",
  storageBucket: "fun-chat-e6095.appspot.com",
  messagingSenderId: "1080195917383",
  appId: "1:1080195917383:web:729f44d293e8634ddc3362",
  measurementId: "G-P634MNXX6K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  auth.useEmulator('http://localhost:9099');
  db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
