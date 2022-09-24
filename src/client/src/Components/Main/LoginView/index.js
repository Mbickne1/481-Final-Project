import React, { useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import styles from './LoginView.module.css';
import useLoginService from './useLoginService';

const LoginView = (props) => {
    const { setShowLogin } = props;
    const [isValidUser, validate, validateGuest] = useLoginService();

    useEffect(() => {
        if(isValidUser) {
            setShowLogin(false);
        }
    }, [isValidUser])

    const attemptLogin = (event) => {
        const target = event.target;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        validate(username, password);
    }



    const guestLogin = (event) => {
        const target = event.target;

        validateGuest();
    }

    return (
        <div className={styles.container}>
            <div className={styles.fieldContainer}>
                <TextField id='username' variant='filled' style={{width: '80%'}} label='Username'></TextField>
                <TextField id='password' variant='filled' style={{width: '80%'}} label='Password'></TextField>
            </div>
            <div className={styles.buttonContainer}>
                <Button onClick={attemptLogin} variant='contained' className={styles.login}>
                    Log In
                </Button>
            </div>
            <Button variant='text' onClick={guestLogin}>Continue as Guest</Button>
        </div>
    );
}

export default LoginView;