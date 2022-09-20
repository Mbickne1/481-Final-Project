import React, { useState } from 'react';
import ItemView from './ItemView';
import LoginView from './LoginView';


const Main = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex'}}>
            {showLogin 
                ? <LoginView setShowLogin={setShowLogin}/>
                : <ItemView /> 
            }
        </div>
       
    );
}

export default Main;