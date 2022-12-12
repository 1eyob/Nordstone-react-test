// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCaqnHppXaDErB2DmfpoX_W4a7vJBlDU0c",
  authDomain: "nordstone-test.firebaseapp.com",
  projectId: "nordstone-test",
  storageBucket: "nordstone-test.appspot.com",
  messagingSenderId: "1054671111206",
  appId: "1:1054671111206:web:391acaed2837c9fa0492e7",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage(app);
const messaging = getMessaging(app);

// messaging.onBackgroundMessage(function (payload) {
//   console.log("Received background message ", payload);
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   // eslint-disable-next-line no-restricted-globals
//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
export { auth, db, storage, messaging };
