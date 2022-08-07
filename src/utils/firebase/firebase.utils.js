import {initializeApp} from 'firebase/app'
import {getAuth, signInWithPopup,signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'  ;
import {getFirestore,doc,getDoc,setDoc, Firestore} from 'firebase/firestore'


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

  export const db = getFirestore();

  export const createUserDocumentFrom = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db,'users',userAuth.uid );
    
const userSnapshot = await getDoc(userDocRef);

// console.log(userDocRef);
console.log(userSnapshot);

console.log(userSnapshot.exists());

if (!userSnapshot.exists()) {
  const {displayName,email} = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation,
    })
  } catch (error) {
    console.log(error.message);
  }
}

return userDocRef;

  };

export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInWithAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password)
}
