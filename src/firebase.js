import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD1TUUz-UMDroZ_DJcAVLmc27f98_3PCls",
  authDomain: "messenger-f6bfc.firebaseapp.com",
  databaseURL: "https://messenger-f6bfc.firebaseio.com",
  projectId: "messenger-f6bfc",
  storageBucket: "messenger-f6bfc.appspot.com",
  messagingSenderId: "1032158535629",
  appId: "1:1032158535629:web:3529d4822a54cf7fc32e84",
  measurementId: "G-MF08DSJ8Q7",
});

const db = firebaseApp.firestore();

export { db };
