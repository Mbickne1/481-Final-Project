import { Paper, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useGetItem } from '../../../Services/Hooks/APIRequests';
import Cart from './Cart';
import Item from './Item';

const ItemView = (props) => {
    const {setView} = props;
    const [cart, setCart] = useState([]);
    const [itemList, setItemList] = useState([]);
    const [cartTotal, setCartTotal] = useState(0.00);
    const [data, refetch] = useGetItem();

    useEffect(() => {
        if(data.length > 0) {
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
                    <Item key={item.name + Math.random()} item={item} idx={idx} addItem={addToCart}/>
                )               
            }
            </Stack>
            <Cart cart={cart} setCart={setCart} total={cartTotal} setView={setView}/>
        </div>
        
    );
}

export default ItemView;