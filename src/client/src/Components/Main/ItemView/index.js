import { Paper, Stack } from '@mui/material';
import React from 'react';
import Item from './Item';

const ITEMS = [
    {name: "Item One", price: 10.00},
    {name: "Item Two", price: 5.99},
    {name: "Item Three", price: 20.00},
    {name: "Item Four", price: 6.99},
    {name: "Item One", price: 15.99},
    {name: "Item One", price: 13.00},
]

const ItemView = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '30px'}}>
            <Stack spacing={2} style={{width: '60%'}}>
            {
                ITEMS.map((item, idx) => 
                    <Item name={item.name} price={item.price}/>
                )               
            }
            </Stack>
            <Paper style={{width: '30%', height: '75%', marginRight: '50px'}}>
                This is current cart items
            </Paper>
        </div>
        
    );
}

export default ItemView;