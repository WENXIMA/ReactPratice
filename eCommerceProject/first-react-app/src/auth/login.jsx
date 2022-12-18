import { signInWithGooglePopup,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import Register from "../component/Register/Register";
const LogIn = () => {
    const logGoogleUser = async () => { //Use method from other file, choose async 
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <button onClick={logGoogleUser}>Sign In with Google </button>
            <Register />
        </div>
    )
};

export default LogIn;