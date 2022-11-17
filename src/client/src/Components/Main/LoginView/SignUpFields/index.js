import React from 'react';
import { TextField } from '@mui/material';
import styles from '../LoginView.module.css';

const SignUpFields = (props) => {
    const {error, errorMessage} = props;


    return (
        <div className={styles.fieldContainer}>
            <TextField id='signUpUsername' variant='filled' style={{width: '80%'}} label='Username'></TextField>
            <TextField id='signUpPassword' variant='filled' style={{width: '80%'}} label='Password'></TextField>
            <TextField id='confrimPassword' variant='filled' style={{width: '80%'}} label='Confirm Password'></TextField>
            {error &&
                <p style={{color: 'red', textAlign: 'center'}}>{errorMessage}</p>
            }
        </div>
    );
}

export default SignUpFields;