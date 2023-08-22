importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

import { onBackgroundMessage } from "firebase/messaging/sw";
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
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '../src/assets/logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  