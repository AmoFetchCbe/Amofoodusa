// Import the functions you need from the SDKs you need
//import { initializeApp } from 'firebase/app';
import firebase from '@react-native-firebase/app';
import firestore, { firebase } from '@react-native-firebase/firestore';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD-ue20x5qwK3PM8CeHGUDxZcr1Cl9oobM",
  authDomain: "amofetch-v2ionic.firebaseapp.com",
  projectId: "amofetch-v2ionic",
  storageBucket: "amofetch-v2ionic.appspot.com",
  messagingSenderId: "792226625045",
  appId: "1:792226625045:web:ddab553cd4e2dd3827001c",
  measurementId: "G-KKR5SVPH5K"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig)
//export const db = getFirestore(app);

export default firebase;
