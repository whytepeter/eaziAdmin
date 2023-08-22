import { initializeApp } from 'firebase/app';
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBNWuJAC9y8VKwtMX3cwGKhRT3hynG_pf4",
  authDomain: "eazi-test.firebaseapp.com",
  projectId: "eazi-test",
  storageBucket: "eazi-test.appspot.com",
  messagingSenderId: "20433419746",
  appId: "1:20433419746:web:04d82779c37d1feabf4dbb",
  measurementId: "G-P26EYSLY6X"
}

const app = initializeApp(firebaseConfig);

const firebaseMessaging = getMessaging(app);
export default firebaseMessaging