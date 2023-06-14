// import firebase from 'firebase' ;
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-NxdqLNRO34PsC-ifvkT-9fXNSHET2cE",
  authDomain: "fir-158f0.firebaseapp.com",
  projectId: "fir-158f0",
  storageBucket: "fir-158f0.appspot.com",
  messagingSenderId: "455532404515",
  appId: "1:455532404515:web:fe8719a71e714cbb26b696",
  measurementId: "G-JJ3TLJ82EV"
};

// export const Firebase = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export default Firebase;
// export const firebase = firebase.initializeapp(firebaseConfig)