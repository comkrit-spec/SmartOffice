importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyA898_Q3mtKBETkUwY-v-wrIpDQ6LUafvg",
    authDomain: "smartofficeapp-32e0a.firebaseapp.com",
    projectId: "smartofficeapp-32e0a",
    storageBucket: "smartofficeapp-32e0a.firebasestorage.app",
    messagingSenderId: "412226486577",
    appId: "1:412226486577:web:212028f120d1d940157010"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3214/3214011.png'
  });
});
