import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5L5OMAe3xwXp3w5_XF5avLvCro_Ibi38",
    authDomain: "tiendita-51ca9.firebaseapp.com",
    projectId: "tiendita-51ca9",
    storageBucket: "tiendita-51ca9.appspot.com",
    messagingSenderId: "818188775555",
    appId: "1:818188775555:web:3e8fee92debf58cd192bb6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);