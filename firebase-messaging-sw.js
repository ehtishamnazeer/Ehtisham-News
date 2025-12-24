importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "951936357732"
});

const messaging = firebase.messaging();
console.log("Service Worker Active & Firebase Ready");
