import React, { useEffect, useState } from 'react';
import { useGetItem } from '../../Services/Hooks/APIRequests';
import Header from '../Header';
import ItemView from './ItemView';
import LoginView from './LoginView';
import CartView from './CartView';
import Cart from './ItemView/Cart';


const Main = () => {
    const [cart, setCart] = useState([]);
    const [view, setView] = useState(0);
    const [data, refetch] = useGetItem();
    useGetItem();

    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ECF7DC', overflow: 'auto'}}>
            <Header view={view} setView={setView} />
            {view == 0
                ? <LoginView setView={setView}/>
                : view == 1
                ? <ItemView data={data} setView={setView} cart={cart} setCart={setCart}/>
                : <CartView data={data} cart={cart} setCart={setCart}/> 
            }
        </div>
       
    );
}

export default Main;