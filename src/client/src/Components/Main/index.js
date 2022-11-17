import React, { useEffect, useState } from 'react';
import { useGetItem } from '../../Services/Hooks/APIRequests';
import Header from '../Header';
import Admin from './Admin';
import ItemView from './ItemView';
import LoginView from './LoginView';


const Main = () => {
    const [view, setView] = useState(0);
    useGetItem();
   

    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ECF7DC', overflow: 'auto'}}>
            <Header view={view} setView={setView} />
            {view == 0
                ? <LoginView setView={setView}/>
                : view == 1
                ? <ItemView />
                : <Admin /> 
            }
        </div>
       
    );
}

export default Main;