import React, { useEffect, useState } from 'react';
import { useGetItem } from '../../Services/Hooks/APIRequests';
import Header from '../Header';
import ItemView from './ItemView';
import LoginView from './LoginView';
import CartView from './CartView';
import SubmitView from './SubmitView';

const Main = () => {
    const [cart, setCart] = useState([]);
    const [view, setView] = useState(0);
    const [data, refetch] = useGetItem();
    const [cartTotal, setCartTotal] = useState(0.00);
    
    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ECF7DC', overflow: 'auto'}}>
            <Header view={view} setView={setView} />
            {     view == 0
                ? <LoginView setView={setView}/>  
                : view == 1
                ? <CartView data={data} setView={setView} cart={cart} setCart={setCart} cartTotal = {cartTotal} setCartTotal = {setCartTotal}/>
                : view == 2
                ? <ItemView data={data} setView={setView} cart={cart} setCart={setCart} cartTotal = {cartTotal} setCartTotal = {setCartTotal}/> 
                : view == 3
                ? <SubmitView data={data} setView={setView} cart={cart} setCart={setCart} cartTotal = {cartTotal} setCartTotal = {setCartTotal}/>  
                : <></>
            }   
        </div>
       
    );
}

export default Main;