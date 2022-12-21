import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from './FormInput'; //import format of input for styling purpose
import './register-in.scss';
import Button from '../../UI/Button/button.component'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confrimpassword: ''
}
const Register = () => {
    const [formFields, setformFields] = useState(defaultFormFields);
    const { displayName, email, password, confrimpassword } = formFields;
    const handleChange = (event) => {
        const { name, value } = event.target; //target give the input info
        setformFields({ //remain other input name and value, and 
                        // Only update this.name's value by setState
            ...formFields,
            [name]: value
        })
    };
    const clearForm = () => { //after register successfully, clear the form
        setformFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confrimpassword) {
            return;
        };
        try { //Create Email and password and store in firestore
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(
                user, { displayName }
            );
            clearForm();
        } catch (error) {
            console.log(error.message);
        }


    };


    return (
        <div className='sign-up-contianer'>
            <h2></h2>
            <form onSubmit={handleSubmit}>

                <FormInput label="Display Name" type="text" onChange={handleChange}  required name='displayName' value={displayName} />


                <FormInput label="Email" type="email" onChange={handleChange}  required name='email' value={email} />


                <FormInput label="Password" type="text" onChange={handleChange}  required name='password' value={password} />


                <FormInput label="Confrim Password" type="text" onChange={handleChange} required name='confrimpassword' value={confrimpassword} />

                <Button buttonType="inverted" type="submit">Register</Button>
            </form>

        </div>
    )
};
export default Register;