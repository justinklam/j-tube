import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "j-tube-d1672.firebaseapp.com",
  projectId: "j-tube-d1672",
  storageBucket: "j-tube-d1672.appspot.com",
  messagingSenderId: "437545735648",
  appId: "1:437545735648:web:2676a645d91d075260c785",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
