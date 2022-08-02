import {signWithGooglePopup,createUserDocumentFrom} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signWithGooglePopup();
        createUserDocumentFrom(user)
    }


    return(
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}> Login in</button>
        </div>
    )
}

export default SignIn;