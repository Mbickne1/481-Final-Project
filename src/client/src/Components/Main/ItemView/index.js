import { Paper, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Item from './Item';

const ITEMS = [
    {name: "Item One", price: 10.00, qty: 0},
    {name: "Item Two", price: 5.99, qty: 0},
    {name: "Item Three", price: 20.00, qty: 0},
    {name: "Item Four", price: 6.99, qty: 0},
    {name: "Item Five", price: 15.99, qty: 0},
    {name: "Item Six", price: 13.00, qty: 0},
]

const ItemView = () => {
    const [cart, setCart] = useState([]);
    const [itemList, setItemList] = useState([]);
    const [cartTotal, setCartTotal] = useState(0.00);

    useEffect(() => {
        setItemList(ITEMS);
    }, [ITEMS]);

    //TODO: Finish Proper Total Cart Cost Calculation
    const addToCart = (idx, quantity) => (event) => {
        if (quantity == 0) return;
        const newCart = [...cart];
        
        const index = newCart.findIndex(item => item.name == ITEMS[idx].name);
        if(index == -1) {
            ITEMS[idx].qty = quantity;
            newCart.push(ITEMS[idx]);
        } else {
            ITEMS[idx].qty = quantity;
            newCart[index].qty = quantity;
        }

        setCart(newCart);
    }

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].qty;
        }
        
        setCartTotal(total);
    }, [cart]);

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '30px'}}>
            <Stack spacing={2} style={{width: '60%'}}>
            {
                itemList.map((item, idx) => 
                    <Item key={item.name} item={item} idx={idx} addItem={addToCart}/>
                )               
            }
            </Stack>
            <Cart cart={cart} setCart={setCart} total={cartTotal}/>
        </div>
        
    );
}

export default ItemView;