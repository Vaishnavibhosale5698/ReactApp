import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAa-oCOv6SerMr6nCyIlXzn3hcwKsWY_Yg",
  authDomain: "fundoonotes-30e5c.firebaseio.com",
  databaseURL: "https://fundoonotes-30e5c.firebaseio.com/",
  projectId: "fundoonotes-30e5c",
  storageBucket: "fundoonotes-30e5c.appspot.com", /* */
  messagingSenderId: "482513920225", /* */
  appId: "1:577123492517:android:f03a1e2a92e0330f89234c",
  measurementId: "G-YPN0D17YL4"  /* */
}

const database = firebase
firebase.initializeApp(firebaseConfig)

export default { firebase, database }