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
  }

  firebase.initializeApp(config)

 export const auth = firebase.auth()
 export const firestore = firebase.firestore()

 const provider = new firebase.auth.GoogleAuthProvider()
 provider.setCustomParameters({ prompt: 'select_account '})
 export const signInWithGoogle = () => auth.signInWithPopup(provider)


 export default firebase
