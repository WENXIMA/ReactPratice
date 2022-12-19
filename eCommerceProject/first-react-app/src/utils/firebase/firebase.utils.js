import {initializeApp} from 'firebase/app';
import {getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'; //accesDoc, getDoc


//configuation
const firebaseConfig = {
    apiKey: "AIzaSyBRKd7_xyg3wcZ75Wy-EjOPH6r9VItrPPQ",
    authDomain: "ecommerce-react-10b16.firebaseapp.com",
    projectId: "ecommerce-react-10b16",
    storageBucket: "ecommerce-react-10b16.appspot.com",
    messagingSenderId: "520440268620",
    appId: "1:520440268620:web:06c5316e6db806adb571e9"
  };
  
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);

//Require by google 
  const provider = new GoogleAuthProvider();
  //Has to choose an account
  provider.setCustomParameters({
    prompt:"select_account"
  });

  //Authentication Method, Same for every auth method
  export const auth = getAuth();

  //Create a method that it will sign in with google, getting the authentication method with google provider
  export const signInWithGooglePopup = () => {
    return signInWithPopup(auth,provider);
  }

  export const db = getFirestore(); //direct point to our database

  export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
    const userDocRef = doc(db,'users', userAuth.uid);   //doc took 3 indexes, database, collection, uid
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef); //get data related to the document, speific object.
    console.log(userSnapshot.exists()); // Verify that this data exist or not. 
    
    //if user data exists, return userDocRef.
    //If not, we can create 1.

    if(!userSnapshot.exists()){ // If not exists
        const {displayName,email} = userAuth;
        const createdDate = new Date(); //when signed In
        
        try{
            await setDoc(userDocRef,{ //Create 1 userDocRef with name, email and date.
                displayName,email,createdDate,...additionalInformation,
            })
        }catch(error){
            console.log(error.message);
        }
    }
    return userDocRef;

  };

  export const createAuthUserWithEmailAndPassword = async (email,password) => { //Create account with email and password
    if(!email && !password){
        return;
    }
    return await createUserWithEmailAndPassword(auth,email,password);
  }

  export const signAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email && !password){
        return;
    }
    return await signInWithEmailAndPassword(auth,email,password);
  }

  