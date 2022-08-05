import { useState } from 'react';
import { createAuthUserWithEmailAndPassword , createUserDocumentFrom} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}



const SignUpForm = () => {

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;
    // console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match')
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFrom(user, {displayName});
            resetFormFields()
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('email already in use')
            }
        }
    }

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    }

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} >

            <label htmlFor="">Display Name</label>
            <input type="text" required onChange={handleChange} name='displayName' value={displayName}/>

            <label htmlFor="">Email</label>
            <input type="email" required onChange={handleChange} name='email' value={email}/>

            <label htmlFor="">Password</label>
            <input type="password" required onChange={handleChange} name='password' value={password}/>

            <label htmlFor="">Confirm Password</label>
            <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

            <button type="submit">Sign up</button>

            </form>
        </div>
        )
}

export default SignUpForm;