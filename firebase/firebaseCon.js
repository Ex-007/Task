// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyAoBvVq4F0OQAbea9o2Zt5Gilly4uv6q2E",
    authDomain: "climate-mitigation.firebaseapp.com",
    databaseURL: "https://climate-mitigation-default-rtdb.firebaseio.com",
    projectId: "climate-mitigation",
    storageBucket: "climate-mitigation.firebasestorage.app",
    messagingSenderId: "487809679187",
    appId: "1:487809679187:web:ff152c79c2cb3a24096ba6"
  };

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);

// Export the Firestore instance
export { db, storage, auth };
