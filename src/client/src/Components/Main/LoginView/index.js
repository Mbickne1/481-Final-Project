import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import styles from './LoginView.module.css';
import useLoginService from './useLoginService';
import LoginFields from './LoginFields';
import SignUpFields from './SignUpFields';

const LOGIN = "Login";
const SIGNUP = "Sign Up";

const LoginView = (props) => {
    const { setView } = props;
    const [tab, setTab] = useState(0);
    const [isValidUser, validate, validateGuest] = useLoginService();

    useEffect(() => {
        if(isValidUser) {
            setView(1);
        }
    }, [isValidUser])

    const attemptLogin = (event) => {
        const target = event.target;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        validate(username, password);
    }

    const toggleTab = () => {
        setTab(tab == 0 ? 1 : 0);
    }

    const guestLogin = () => { validateGuest(); }

    return (
        <div style={{height: '90%'}}>
            <div className={styles.container}>
                {tab == 0 
                    ? <LoginFields />
                    : <SignUpFields />
                }
                <div className={styles.buttonContainer}>
                    <Button onClick={attemptLogin} variant='contained' className={styles.login}>
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