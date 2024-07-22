// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "event-scheduler-c7575.firebaseapp.com",
  projectId: "event-scheduler-c7575",
  storageBucket: "event-scheduler-c7575.appspot.com",
  messagingSenderId: "708147274282",
  appId: "1:708147274282:web:d09a4aac571581442b9953",
  measurementId: "G-6GQ4WMLKRK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
