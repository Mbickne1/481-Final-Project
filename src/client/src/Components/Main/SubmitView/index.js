import { Paper, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Item from './Item';

const SubmitView = (props) => {
    const {setView, cart, setCart, data, cartTotal, setCartTotal} = props;
    const [itemList, setItemList] = useState([]);


    useEffect(() => {
        if(data.length > 0 ) {
            const items = [...data];
            items.forEach((item) => {
                item.qty = 0;
                console.log(item);
            })
            setItemList(items);
        } 
    }, [data]);

    //TODO: Finish Proper Total Cart Cost Calculation
    const addToCart = (idx, quantity) => (event) => {
        if (quantity == 0) return;
        const newCart = [...cart];
        const tempList = [...itemList];
        
        const index = newCart.findIndex(item => item.name == tempList[idx].name);
        tempList[idx].qty = quantity;
        index == -1 ? newCart.push(tempList[idx]) : newCart[index].qty = tempList[idx].qty;
        
        setCart(newCart);
        setItemList(tempList);
    }


    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px',  padding: '100px'}}>
            <Stack spacing={150} style={{width: '200%'}}>
            {
                itemList.map((item, idx) => 
                    <Item key={item.name + Math.random()} item={item} idx={idx} addItem={addToCart}/>
                )               
            }
            </Stack>
            <Cart cart={cart} setCart={setCart} total={cartTotal} setView={setView}/>
        </div>
        
    );
}
export default SubmitView;