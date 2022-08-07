import { useState } from 'react';
import { createAuthUserWithEmailAndPassword , createUserDocumentFrom,signWithGooglePopup,signInWithAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/Button.component';
import './sign-in-styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}



const SignInForm = () => {

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;
    // console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signWithGooglePopup();
       
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {

            const response = await  signInWithAuthUserWithEmailAndPassword(email,password)
            console.log(response)

            // const {user} = await createAuthUserWithEmailAndPassword(email,password);
            // await createUserDocumentFrom(user, {displayName});
            resetFormFields()
        }
        catch (error) {
            if (error.code === 'auth/incorrect password') {
                alert('incorrect password')
            
        }
    }
    }

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} >

            
            {/* <FormInput label='display Name'
             type="text" 
             required
              onChange={handleChange} 
              name='displayName' 
              value={displayName}
              /> */}

           
            <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email}/>

            <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password}/>

            
            {/* <FormInput label='Confirm Password' type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/> */}

           <div className='buttons-container'>
             <Button type="submit">Sign up</Button>
            <Button onClick={signInWithGoogle} buttonType='google' type="submit">Google</Button>
           </div>

            </form>
        </div>
        )
}

export default SignInForm;