import {signWithGooglePopup} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const res = await signWithGooglePopup();
        console.log(res);
    }


    return(
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}> Login in</button>
        </div>
    )
}

export default SignIn;