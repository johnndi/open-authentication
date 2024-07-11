import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
// import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpiNQJz3j9ONOzjNYZd5n8jQoilLI1oaQ",
  authDomain: "my-first-project-login-b5ffb.firebaseapp.com",
  projectId: "my-first-project-login-b5ffb",
  storageBucket: "my-first-project-login-b5ffb.appspot.com",
  messagingSenderId: "454775996267",
  appId: "1:454775996267:web:3a97392b6a4edd33c7162e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const fprovider = new FacebookAuthProvider();
// export const db =getFirestore(app);
export default app;
