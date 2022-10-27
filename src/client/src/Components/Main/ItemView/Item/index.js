import { Card, IconButton, TextField, Button } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import React, { useState } from 'react';

const Item = (props) => {
    const {item, addItem, idx} = props;
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        setQuantity(quantity - 1);
    }

    return (
            <Card elevation={10} style={{width: '100%', height: '30%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '50px'}}>
                <div style={{ height: '80%', width: '15%', border: '1px solid black', alignSelf: 'center', marginLeft: '10px'}}></div>
                <div style={{width: '15%', display: 'flex', flexDirection: 'column', marginLeft: '20px', marginRight: 'auto'}}>
                    <h1>{item.name}</h1>
                    <h3>${item.price.toFixed(2)}</h3>
                </div>
                <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center', alignItems: 'center', alignSelf: 'center', height: '80%', width: '30%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '10px'}}>
                        <IconButton size='large' onClick={increaseQuantity}>
                            <ArrowCircleUpIcon fontSize='large'/>
                        </IconButton>
                        <TextField value={quantity} style={{width: '50px', alignSelf: 'center', textAlign: 'center'}} inputProps={{style: {textAlign: 'center'}}}/>
                        <IconButton size='large' onClick={decreaseQuantity}>
                            <ArrowCircleDownIcon fontSize='large'/>
                        </IconButton>
                    </div>
                    <Button variant='contained' onClick={addItem(idx, item.qty + quantity)} style={{width: '150px', height: '50px'}}>Add To Cart</Button>
                </div>
            </Card>
    );
}

export default Item;