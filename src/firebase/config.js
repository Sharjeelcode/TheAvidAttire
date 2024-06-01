// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgSfxCpEy5cJxvlm_jUaVw56VJkeqx2mk",
  authDomain: "theavidattire-18d8a.firebaseapp.com",
  projectId: "theavidattire-18d8a",
  storageBucket: "theavidattire-18d8a.appspot.com",
  messagingSenderId: "847008862416",
  appId: "1:847008862416:web:eacd527c04d5af703d4ed5",
  measurementId: "G-Y53SF57K41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, auth, provider, database, storage, analytics };
