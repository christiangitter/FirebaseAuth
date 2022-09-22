// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2ZgLxXrYuhbNy5bIODuNntzRAfG-BzNw",
  authDomain: "fir-auth-expo-7d825.firebaseapp.com",
  projectId: "fir-auth-expo-7d825",
  storageBucket: "fir-auth-expo-7d825.appspot.com",
  messagingSenderId: "584970244733",
  appId: "1:584970244733:web:c67ceb8f95ab3a53195714"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else {
    app=firebase.app()
}

const auth = firebase.auth()

export {auth};