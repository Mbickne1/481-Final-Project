import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import styles from './LoginView.module.css';
import useLoginService from '../../../Services/Hooks/useLoginService';
import LoginFields from './LoginFields';
import SignUpFields from './SignUpFields';
import { useUserExists } from '../../../Services/Hooks/APIRequests';

const LOGIN = "Login";
const SIGNUP = "Sign Up";

const LoginView = (props) => {
    const { setView } = props;
    const [tab, setTab] = useState(0);
    const [signUpError, setSignUpError] = useState(false);
    const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
    const [response, checkForUser] = useUserExists();
    const [isValidUser, loggedInUser, validate, validateGuest, createUser] = useLoginService();

    useEffect(() => {
        if(isValidUser) {
            console.log(loggedInUser);
            setView(1);
        }
    }, [isValidUser])

    const handleLoginSignUp = (event) => {
        if(tab == 0) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            validate(username, password);
        } else if(tab == 1) {
            const username = document.getElementById('signUpUsername').value;
            const password = document.getElementById('signUpPassword').value;
            const confirmPassword = document.getElementById('confrimPassword').value;

            if(password != confirmPassword) {
                setSignUpError(true);
                setSignUpErrorMessage("Password Do Not Match")
                return;
            }

            let nameAlphaNum = username.search(/^\w+$/);
            if(nameAlphaNum == -1) {
                setSignUpError(true);
                setSignUpErrorMessage("Username Must Only Contain Alpha-Numeric Characters");
                return;
            }

            if(username.length < 4 || username.length > 15) {
                setSignUpError(true);
                setSignUpErrorMessage("Username Must Be Between 4 & 15 Characters");
                return;
            }

            let passAlphaNum = username.search(/^\w+$/);
            if(passAlphaNum == -1) {
                setSignUpError(true);
                setSignUpErrorMessage("Password Must Only Contain Alpha-Numeric Characters");
                return;
            }

            if(password.length < 4 || password.length > 15) {
                setSignUpError(true);
                setSignUpErrorMessage("Password Must Be Between 4 & 15 Characters");
                return;
            }

            setTimeout(() => {
                checkForUser(username);
            }, [5000])

            //FIX Checking For Username Exists Error
            if(response) {
                setSignUpError(true);
                setSignUpErrorMessage("Username Already Exists");
                return;
            }

            createUser(username, password);
            validate(username, password);
        }
    }

    const toggleTab = () => {
        setTab(tab == 0 ? 1 : 0);
    }

    const guestLogin = () => { validateGuest(); }

    return (
        <div style={{height: '90%'}}>
            <div className={styles.container}>
                {tab == 0 
                    ? <LoginFields isValidUser={isValidUser}/>
                    : <SignUpFields error={signUpError} errorMessage={signUpErrorMessage}/>
                }
                <div className={styles.buttonContainer}>
                    <Button onClick={handleLoginSignUp} variant='contained' className={styles.login}>
                        {tab == 0 ? LOGIN : SIGNUP}
                    </Button>
                    <Button onClick={toggleTab}>
                        {tab == 0 ? SIGNUP : LOGIN}
                    </Button>
                </div>
                {tab == 0 &&
                    <Button variant='text' onClick={guestLogin}>Continue as Guest</Button>
                }
            </div>
        </div>
           
    );
}

export default LoginView;