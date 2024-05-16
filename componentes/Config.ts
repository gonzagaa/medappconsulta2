import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth, getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhnShHRnDDrZZzKlefFindcKjyA_OINV8",
  authDomain: "medconsulta-a7c63.firebaseapp.com",
  projectId: "medconsulta-a7c63",
  storageBucket: "medconsulta-a7c63.appspot.com",
  messagingSenderId: "866846928404",
  appId: "1:866846928404:web:a2b7f7b483fcccf16c0101",
  measurementId: "G-GXZ5D0NTX1",
};

const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});


const storage = getStorage(app);

const db = getFirestore(app);

export { app, storage, db };
