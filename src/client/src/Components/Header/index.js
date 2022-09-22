import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {

    return (
        <header className={styles.container}>
            <h1>Welcome! Login To Make An Order! </h1>
        </header>
    );

}

export default Header;