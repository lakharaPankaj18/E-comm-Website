import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB5YqnBFBP-k7qvvdwpuNgEfryw6bYAOrk",
  authDomain: "e-comm-62d2a.firebaseapp.com",
  projectId: "e-comm-62d2a",
  storageBucket: "e-comm-62d2a.appspot.com",
  messagingSenderId: "386707926729",
  appId: "1:386707926729:web:728bb1e256af0aab48e718"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth}