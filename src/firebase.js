import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBaI16lvSZJCaOsdklYoLZruEVOB-lC3Sw",
    authDomain: "reservas-restaurante-3be7a.firebaseapp.com",
    projectId: "reservas-restaurante-3be7a",
    storageBucket: "reservas-restaurante-3be7a.appspot.com",
    messagingSenderId: "372389898451",
    appId: "1:372389898451:web:c9b54011b1ad53b0df8c26",
    measurementId: "G-5GQXJKKYP7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };