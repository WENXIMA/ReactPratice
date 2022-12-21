import {createContext,useState,useEffect} from 'react';
//Create parent level component in indexJS to allow access the value.
//Once use useContext, page will re-render again.
import { createUserDocumentFromAuth, onAuthStateChangedListener,signOutUser } from '../../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {//Provider allow child to access value of useState
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};
    signOutUser();
    useEffect(() => {//Once the auth stated chanegd, it will call to update the state
        const unsubscribe = onAuthStateChangedListener((user) =>{ 
            if(user){
                createUserDocumentFromAuth(user);
            }                        
            setCurrentUser(user);
        })
        return unsubscribe;
    },[]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider> //wrap around any component inside of user context
}