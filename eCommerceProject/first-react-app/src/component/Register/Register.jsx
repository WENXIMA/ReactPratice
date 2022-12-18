import {useState} from 'react';
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confrimpassword:''
}
const Register = () => {
    const [formFields,setformFields] = useState(defaultFormFields);
    const{displayName,email,password,confrimpassword} = formFields;
    const handleChange=(event) => {
        const {name,value} = event.target; //target give the input info

        setformFields({
            ...formFields,
            [name]:value
        })
    };
    const clearForm = () => { //after register successfully, clear the form
        setformFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password!==confrimpassword){
            return;
        };
        try{ //Create Email and password and store in firestore
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(
                user,{displayName}
            );
            clearForm();
        }catch(error){
            console.log(error.message);
        }


    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Name</label>
                <input  type="text" onChange={handleChange} placeholder="Name" required name='displayName' value={displayName}/>

                <label>Email</label>
                <input  type="email" onChange={handleChange} placeholder="email" required name='email' value={email}/>

                <label >Password</label>
                <input  type="text" onChange={handleChange} placeholder="password" required name='password' value={password}/>

                <label >Confrim Password</label>
                <input  type="text" onChange={handleChange} placeholder="Confrim Password" required  name='confrimpassword' value={confrimpassword}/>

                <button type="submit">Register</button>
            </form>

        </div>
    )
};
export default Register;