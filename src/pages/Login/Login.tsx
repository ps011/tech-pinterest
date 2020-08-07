import React, {useState} from 'react';
// import {GoogleLogin} from 'react-google-login';
import {Button, Input} from 'antd';
import {UserOutlined, LockOutlined, ArrowRightOutlined} from '@ant-design/icons';

import classes from './Login.module.css';
import * as Q from '../../graphql/queries';
import {useLazyQuery} from "@apollo/client";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons/lib";

const Login: React.FC<any> = ({history, setUserInfo}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginUser, {error, loading, data}] = useLazyQuery(
        Q.LOGIN_MUTATION(email, password)
    );
    // if (error && loading) return <p>Loading ...</p>
    // if(error) {
    //    // show message invalid credentials, try again!
    //    return <div> invalid credentials, try again! </div>;
    // }

    if (data) {
        history.push('/home')
    }
    //
    // const loginAction = (response: any) => {
    //     try {
    //         const userAuth = {
    //             name: response.profileObj.name,
    //             email: response.profileObj.email,
    //             imageUrl: response.profileObj.imageUrl,
    //             token: response.googleId,
    //             tokenId: response.tokenId
    //         }
    //         localStorage.setItem("userToken", userAuth.tokenId);
    //         localStorage.setItem("userEmailId", userAuth.email);
    //         setUserInfo({userToken: userAuth.tokenId, userEmailId: userAuth.email});
    //         history.push("/");
    //
    //     } catch (error) {
    //         history.push("/login");
    //     }
    // }
    // const retryAction = (response: any) => {
    //     history.push("/login")
    // }

    return (
        <div className={classes.container}>
            <div className={classes.input}>
            <Input size="large" value={email} placeholder="Enter Email" onChange={e => setEmail(e.target.value!)}
                   prefix={<UserOutlined translate={0}/>}/>
            </div>
            <div className={classes.input}>
            <Input.Password size="large" value={password} placeholder="Enter Password"
                            iconRender={visible => (visible ? <EyeTwoTone  translate={0}/> : <EyeInvisibleOutlined translate={0}/>)}
                   onChange={e => setPassword(e.target.value!)} prefix={<LockOutlined translate={0}/>}/>
            </div>

            <div className={classes.loginButton}>
                <Button type="primary" size="large" shape="round" icon={<ArrowRightOutlined translate={0}/>}
                        onClick={() => loginUser()}>Login</Button>
            </div>
            {/*<div>*/}
            {/*    <GoogleLogin*/}
            {/*        clientId="865958668201-3upung40a7uuidhh47hp34v91rggsgl8.apps.googleusercontent.com"*/}
            {/*        buttonText="Login with Google"*/}
            {/*        onSuccess={loginAction}*/}
            {/*        onFailure={retryAction}*/}
            {/*        cookiePolicy={'single_host_origin'}*/}
            {/*        className={classes.googleSignInButton}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    );

}
export default Login;
