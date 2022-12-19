import Forms from './form.jsx';
import Button from '../../UI/Button/button.component';
import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth,signAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";



const defaultLogIn = {
    email: '',
    password: ''
};
const SignIn = () => {
    const logGoogleUser = async () => { //Use method from other file, choose async 
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    const [LogInInput, setLogInInput] = useState(defaultLogIn);
    const { email, password } = LogInInput;
    const clearForm = () => {
        setLogInInput(defaultLogIn);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email === '' && password === '') {
            alert('enter email and password');
        }
        try{
            const {user} = await signAuthUserWithEmailAndPassword(email,password);
            clearForm();
        }catch(error){
            console.log(error.message);
        }
    };
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setLogInInput({
            ...LogInInput,
            [name]: value
        }
        )
    }
    return(
        
            <div className="sign-in">
                <form onSubmit={handleSubmit}>
                    <Forms label="Email" type="email" name="email" value={email} onChange={changeHandler} />
                    <Forms label="Password" type="text" name="password" value={password} onChange={changeHandler} />
                    <Button buttonType="inverted" type="submit">Log In</Button>
                    <Button buttonType="google-sign-in" onClick={logGoogleUser}>Sign In with Google </Button>
                </form>

            </div>
            
    )
};

export default SignIn;