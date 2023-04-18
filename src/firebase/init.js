import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-PQvY9sqUqsM9D_PboIiRIYpWQS0oxok",
  authDomain: "toma-de-horas-3bc43.firebaseapp.com",
  projectId: "toma-de-horas-3bc43",
  storageBucket: "toma-de-horas-3bc43.appspot.com",
  messagingSenderId: "53739028161",
  appId: "1:53739028161:web:116705ee3fdde069449e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {app, auth}