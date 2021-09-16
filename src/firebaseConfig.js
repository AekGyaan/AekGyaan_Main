import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl1K_iuV6lf5etYomUEGjX71nMwrYbMMw",
  authDomain: "aekgyaan-f1f12.firebaseapp.com",
  projectId: "aekgyaan-f1f12",
  storageBucket: "aekgyaan-f1f12.appspot.com",
  messagingSenderId: "111429650108",
  appId: "1:111429650108:web:022ce1ac7a6b5f682932b9",
};
initializeApp(firebaseConfig);
export const db = getFirestore();
