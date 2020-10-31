import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const loadDBFirebase = () => {
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
    firebase.auth();
  }

  return firebase;
};

// apiKey: process.env.FIREBASE_API_KEY,
// authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// databaseURL: process.env.FIREBASE_DATABASE_URL,
// projectId: process.env.FIREBASE_PROJECT_ID,
// storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID

// apiKey: "AIzaSyB1w1R1YpWx1oD_3FjZBwXQgs-S37oS0yA",
// authDomain: "thaivintagewhitchurch.firebaseapp.com",
// databaseURL: "https://thaivintagewhitchurch.firebaseio.com",
// projectId: "thaivintagewhitchurch",
// storageBucket: "thaivintagewhitchurch.appspot.com",
// messagingSenderId: "539053704455"
