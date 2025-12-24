importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyC9Cfh60ZyeZTbhK45a_sKWBFCy8DrqDao",
    projectId: "ehtisham-news",
    messagingSenderId: "951936357732", // Aapke Firebase project ka sender ID
    appId: "1:951936357732:web:75039f69741e974e304f32"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'logo.png' // Agar logo hai to uska path
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
