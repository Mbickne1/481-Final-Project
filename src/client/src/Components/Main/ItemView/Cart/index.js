import React, { useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const Cart = (props) => {
    const { cart, total, setCart } = props;

    return (
        <Paper elevation={10} style={{width: '30%', height: '75%', marginRight: '50px', position: 'fixed', right: '20px'}}>
            <TableContainer style={{maxHeight: "80%", borderBottom: "5px solid #f5426c"}}>
                <Table stickyHeader>
                    <TableHead>
                        <TableCell align='center'>QTY</TableCell>
                        <TableCell align='center'>ITEM</TableCell>
                        <TableCell align='center'>PRICE</TableCell>
                    </TableHead>
                    <TableBody>
                        {
                            cart.map((item, idx) => 
                                <TableRow key={item.name}>
                                    <TableCell align='center'>{item.qty}</TableCell>
                                    <TableCell align='center'>{item.name}</TableCell>
                                    <TableCell align='center'>${item.price.toFixed(2)}</TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{textAlign: 'center'}}>
                <h1>Estimated Total: ${total.toFixed(2)}</h1>
            </div>
            <Button fullWidth variant="contained" style={{position: 'absolute', bottom: '0'}}>Place Order</Button>
        </Paper>
    );
}

export default Cart;