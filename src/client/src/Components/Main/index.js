import React, { useState } from 'react';
import Header from '../Header';
import ItemView from './ItemView';
import LoginView from './LoginView';


const Main = () => {
    const [view, setView] = useState(0);

    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex',flexDirection: 'column', backgroundColor: '#D6D6D6'}}>
            <Header view={view} setView={setView} />
            {view == 0
                ? <LoginView setView={setView}/>
                : <ItemView /> 
            }
        </div>
       
    );
}

export default Main;