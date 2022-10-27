import React from 'react';
import { TextField } from '@mui/material';
import styles from '../LoginView.module.css';

const LoginFields = () => {

    return(
        <div className={styles.fieldContainer}>
            <TextField id='username' variant='filled' style={{width: '80%'}} label='Username'></TextField>
            <TextField id='password' variant='filled' style={{width: '80%'}} label='Password'></TextField>
        </div>
    );
}

export default LoginFields;