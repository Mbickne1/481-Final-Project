import { Button, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    const { view, setView } = props;

    const logout = () => {
        console.log("Logging Out");
        setView(0);
    }

    return (
        <header className={styles.container}>
            {view == 0 && 
                <h1>Welcome! Login To Make An Order! </h1>
            }
            {view == 1 &&
                <div style={{color: 'white', justifySelf: 'flex-end', alignItems: 'center'}}>
                    <IconButton onClick={logout} style={{color: 'white'}}>
                        <LogoutIcon fontSize='large'/>
                    </IconButton>
                </div>
            }
        </header>
    );

}

export default Header;