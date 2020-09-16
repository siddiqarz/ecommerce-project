import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBticrKcV-G8I2VpPnLs2CjrFsK8VO1uZc",
  authDomain: "crwn-clothing-1fe21.firebaseapp.com",
  databaseURL: "https://crwn-clothing-1fe21.firebaseio.com",
  projectId: "crwn-clothing-1fe21",
  storageBucket: "crwn-clothing-1fe21.appspot.com",
  messagingSenderId: "88569204096",
  appId: "1:88569204096:web:3e8b642ad42b41095d8565",
  measurementId: "G-5E80B3RHFM",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
