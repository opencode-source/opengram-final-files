import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDet8Q_5fVp8asc1EX9ZYyFdCHREQkdZYc",
  authDomain: "opengram-site.firebaseapp.com",
  projectId: "opengram-site",
  storageBucket: "opengram-site.appspot.com",
  messagingSenderId: "792475879174",
  appId: "1:792475879174:web:c1d83551a7d01194b1c087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore 
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export {db, storage}