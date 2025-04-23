import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { writable } from "svelte/store";

// 🔹 Replace with your Firebase project config
const firebaseConfig = {
    apiKey: "AIzaSyCzYfRjnkvVnDEEjNnZhSzJikNXVdF0A-4",
    authDomain: "moveease-1da05.firebaseapp.com",
    projectId: "moveease-1da05",
    storageBucket: "moveease-1da05.firebasestorage.app",
    messagingSenderId: "1054514485553",
    appId: "1:1054514485553:web:607572bb8404af8c22f810",
    measurementId: "G-634K2ZE3VQ"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 🔹 Reactive Svelte store to track authentication status
export const user = writable(null);

// 🔹 Monitor auth state changes
onAuthStateChanged(auth, (firebaseUser) => {
  user.set(firebaseUser);
});

// Logout function
export const logout = async () => {
  await signOut(auth);
};