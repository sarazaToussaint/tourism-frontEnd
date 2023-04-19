import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDKMVY_p1PlUZFFWS_uYLCuf5ghv5MgYzg',
  authDomain: 'guidedb-66c24.firebaseapp.com',
  projectId: 'guidedb-66c24',
  storageBucket: 'guidedb-66c24.appspot.com',
  messagingSenderId: '106634487386',
  appId: '1:106634487386:web:a0ac1404cfc04633171a63',
  measurementId: 'G-8X3JXLM7PK',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;

export const auth = getAuth(app);

const provider = new GithubAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
};
