import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton

} from '@ionic/react';
import classes from './Login.module.css';
import { useQuery } from '@apollo/react-hooks';
import * as Q from '../../graphql/queries';

const Login: React.FC<any> = ({ history, setUserInfo }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        // const { loading, error, data } = useQuery(Q.LOGIN_MUTATION);
        // if(!data) {
        //     // invalid credentials popup
        //     history.push('/');
        // }
        // if(loading) {
        //     // show spinner;
        // }
        // if(error) {
        //     // show error message
        // } 
        
        // history.push()
    }

    const loginAction = (response: any) => {
        try {
            const userAuth = {
                name: response.profileObj.name,
                email: response.profileObj.email,
                imageUrl: response.profileObj.imageUrl,
                token: response.googleId,
                tokenId: response.tokenId
            }
            localStorage.setItem("userToken", userAuth.tokenId);
            localStorage.setItem("userEmailId", userAuth.email);
            setUserInfo({ userToken: userAuth.tokenId, userEmailId: userAuth.email });
            history.push("/");

        } catch (error) {
            history.push("/login");
        }
    }
    const retryAction = (response: any) => {
        history.push("/login")
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div>
                    <IonInput value={email} placeholder="Enter Email" onIonChange={e => setEmail(e.detail.value!)} clearInput></IonInput>
                    <IonInput value={password} placeholder="Enter Password" onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
                    <IonButton color="medium" onClick={login}>Continue</IonButton>
                </div>
                <GoogleLogin
                    clientId="865958668201-3upung40a7uuidhh47hp34v91rggsgl8.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={loginAction}
                    onFailure={retryAction}
                    cookiePolicy={'single_host_origin'}
                    className={classes.googleSignInButton}
                />
            </IonContent>
        </IonPage>

    );

}
export default Login;