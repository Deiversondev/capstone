import {signWithGooglePopup,createUserDocumentFrom} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up -form/sign-up-form.component';
import Button from '../../components/button/button.component';





const SignIn = () => {

    
    const logGoogleUser = async () => {
        const {user} = await signWithGooglePopup();
        const userDocRef = await createUserDocumentFrom(user)
    }

    return(
        <div>
            <h1>Sign in</h1>
            <Button buttonType='inverted' onClick={logGoogleUser}> Login in</Button>
            
            <SignUpForm/>
        </div>
    )
}

export default SignIn;