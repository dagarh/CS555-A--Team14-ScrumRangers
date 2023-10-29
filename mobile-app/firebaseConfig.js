import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  

  apiKey: "AIzaSyDZ3AKmhvrnv5avyj_yO0AwIgUk43Lsyp4",
  authDomain: "awesomeproject-51ad1.firebaseapp.com",
  projectId: "awesomeproject-51ad1",
  storageBucket: "awesomeproject-51ad1.appspot.com",
  messagingSenderId: "351832548973",
  appId: "1:351832548973:web:4b2860b64b206737f00164",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
