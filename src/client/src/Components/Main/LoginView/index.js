import React from 'react';
import { TextField, Button } from '@mui/material';
import styles from './LoginView.module.css';

const LoginView = (props) => {
    const { setShowLogin } = props;

    const handleClick = () => {
        console.log("Validate User Credentials...");
        console.log("Load User Information...");
        console.log("Switch To Shop View...");
        setShowLogin(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.fieldContainer}>
                <TextField variant='filled' style={{width: '80%'}} label='Username'></TextField>
                <TextField variant='filled' style={{width: '80%'}} label='Password'></TextField>
            </div>
            <div className={styles.buttonContainer}>
                <Button onClick={handleClick} variant='contained' className={styles.login}>
                    Log In
                </Button>
            </div>
        </div>
    );
}

export default LoginView;