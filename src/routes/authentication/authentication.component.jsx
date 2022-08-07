import {signWithGooglePopup,createUserDocumentFrom} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up -form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form.component/sign-in-form.component';



//compare password before API call with form , inside onSubmit of the form : {values.password === values.confirmPassword}?

const Authentication = () => {

    
    const logGoogleUser = async () => {
        const {user} = await signWithGooglePopup();
        const userDocRef = await createUserDocumentFrom(user)
    }

    return(
        <div>
            <h1>Sign in</h1>
            {/* <button onClick={logGoogleUser}> Login in</button> */}
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication;