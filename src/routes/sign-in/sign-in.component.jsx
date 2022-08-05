import {signWithGooglePopup,createUserDocumentFrom} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up -form/sign-up-form.component';



//compare password before API call with form , inside onSubmit of the form : {values.password === values.confirmPassword}?

const SignIn = () => {

    
    const logGoogleUser = async () => {
        const {user} = await signWithGooglePopup();
        const userDocRef = await createUserDocumentFrom(user)
    }

    return(
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}> Login in</button>
            <hr />
            <SignUpForm/>
        </div>
    )
}

export default SignIn;