// firebase.utils.js
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  googleAuthProvider,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBZ0cidn0hbZQsokFZwu4uRDPksk9Ys9sk",
  authDomain: "test-addd1.firebaseapp.com",
  projectId: "test-addd1",
  storageBucket: "test-addd1.appspot.com",
  messagingSenderId: "308863996580",
  appId: "1:308863996580:web:9750cea4a0b5ba1c69cc31",
  measurementId: "G-DSZB9LFZ36"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new googleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
