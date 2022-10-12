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
        <div style={{width: '100vw', height: '100vh'}}>
            {
                ITEMS.map((item, idx) => 
                    <Item name={item.name} price={item.price}/>
                )               
            }
        </div>
    );
}

export default ItemView;