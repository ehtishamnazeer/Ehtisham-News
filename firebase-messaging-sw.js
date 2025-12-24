importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyC9Cfh60ZyeZTbhK45a_sKWBFCy8DrqDao",
    projectId: "ehtisham-news",
    messagingSenderId: "951936357732",
    appId: "1:951936357732:web:75039f69741e974e384f32"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Background Message:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
