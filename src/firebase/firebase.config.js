// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB40eOG4a6mS3YCiPyr4gPwlzOwAbYCMFk",
  authDomain: "pigeon-verse.firebaseapp.com",
  projectId: "pigeon-verse",
  storageBucket: "pigeon-verse.appspot.com",
  messagingSenderId: "1059340769189",
  appId: "1:1059340769189:web:f89abbd2fd91b775a03a4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;