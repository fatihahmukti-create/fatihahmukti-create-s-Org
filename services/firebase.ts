import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCywvd15BIc6ocQ_FKtT5hSP5ZYZcGPopw",
  authDomain: "kido-ai-777e7.firebaseapp.com",
  projectId: "kido-ai-777e7",
  storageBucket: "kido-ai-777e7.firebasestorage.app",
  messagingSenderId: "988525513968",
  appId: "1:988525513968:web:646e193c47d908c0ce0635",
  measurementId: "G-1P9EGN4N48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  console.log("Attempting Google Sign In...");
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Sign in successful", result.user.email);
    return result;
  } catch (error) {
    console.error("Detailed Auth Error:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
  }
};