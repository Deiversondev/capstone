import {initializeApp} from 'firebase/app'
import {getAuth, signInWithPopup,signInWithRedirect, GoogleAuthProvider} from 'firebase/auth'  


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKJLSrRsfVzonGg5jcSAGsaqw2F6gdeiU",
    authDomain: "capstone-261a6.firebaseapp.com",
    projectId: "capstone-261a6",
    storageBucket: "capstone-261a6.appspot.com",
    messagingSenderId: "787370995664",
    appId: "1:787370995664:web:af25dc4d5f3e801c7a53d5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signWithGooglePopup = () => signInWithPopup(auth,provider);

