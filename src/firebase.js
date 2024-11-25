// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// const firebaseConfig = {
//   apiKey: "AIzaSyD5dlkMbWN8Gy30XCqhgDMY7knpo52rzNg",
//   authDomain: "task-ac48f.firebaseapp.com",
//   projectId: "task-ac48f",
//   storageBucket: "task-ac48f.firebasestorage.app",
//   messagingSenderId: "1042616056911",
//   appId: "1:1042616056911:web:94da85db18a955e621fe3a",
//   measurementId: "G-XG2WGC7P26"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';  // Importing signInWithEmailAndPassword for login
import { getFirestore } from 'firebase/firestore'; // Import Firestore for database access

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD5dlkMbWN8Gy30XCqhgDMY7knpo52rzNg",
  authDomain: "task-ac48f.firebaseapp.com",
  projectId: "task-ac48f",
  storageBucket: "task-ac48f.firebasestorage.app",
  messagingSenderId: "1042616056911",
  appId: "1:1042616056911:web:94da85db18a955e621fe3a",
  measurementId: "G-XG2WGC7P26"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app); // For Authentication
export const db = getFirestore(app); // For Firestore database

// Export the signInWithEmailAndPassword method to use in your components
export { signInWithEmailAndPassword };
