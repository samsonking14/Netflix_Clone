import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyByEhzOYpToBMSUqwpiQ5HtY_wAMpRjO98",
  authDomain: "react-netflix-clone-7156e.firebaseapp.com",
  projectId: "react-netflix-clone-7156e",
  storageBucket: "react-netflix-clone-7156e.appspot.com",
  messagingSenderId: "286857023219",
  appId: "1:286857023219:web:a7d07f00b9af800343b186",
  measurementId: "G-LTP17VJTMZ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);