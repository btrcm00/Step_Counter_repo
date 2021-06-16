import firebase from 'firebase';

const firebaseConfig = {
    /* Add your Firebase configuration here
*/  apiKey: "AIzaSyCIsIX3VuHVmUW1HJ7WlG6MElZtSOVFiDI",
    authDomain: "stepcounter-32332.firebaseapp.com",
    projectId: "stepcounter-32332",
    storageBucket: "stepcounter-32332.appspot.com",
    messagingSenderId: "1050968353032",
    appId: "1:1050968353032:web:82bdbdc0448e42029aa4bd",
    measurementId: "G-NWQP410C9E"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
