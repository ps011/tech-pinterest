import React, { useState } from 'react';
import {
    IonInput,
    IonButton
} from '@ionic/react';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (   
        <div>
            <IonInput value={email} placeholder="Enter Email" onIonChange={e => setEmail(e.detail.value!)} clearInput></IonInput>
            <IonInput value={password} placeholder="Create a Password" onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
            <IonButton color="medium">Sign Up</IonButton>
        </div>       
    );
};

export default SignUp;
