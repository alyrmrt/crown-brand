import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA2Xl4uO4MnwjB_PDlUYsKEMmbM90coEPg",
    authDomain: "crown-db-02472.firebaseapp.com",
    databaseURL: "https://crown-db-02472.firebaseio.com",
    projectId: "crown-db-02472",
    storageBucket: "crown-db-02472.appspot.com",
    messagingSenderId: "138821558136",
    appId: "1:138821558136:web:292d5701ec09605e9a328d",
    measurementId: "G-3R016Y9BKL"
  };

  firebase.initializeApp(config)

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef
  }

 export const auth = firebase.auth()
 export const firestore = firebase.firestore()

// gives us access to GoogleAuth class from the auth lib
 const provider = new firebase.auth.GoogleAuthProvider()
 provider.setCustomParameters({ prompt: 'select_account '})
 export const signInWithGoogle = () => auth.signInWithPopup(provider)


 export default firebase
