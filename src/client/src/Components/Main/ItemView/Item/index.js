import React from 'react';

const Container = (props) => {
    const { children } = props;
    return (
        <div style={{width: '100%', height: '30%', display: 'flex', flexDirection: 'row', margin: '100px 0 0 100px'}}>
            {props.children}
        </div>
    );
}

const Item = (props) => {
    const {name, price} = props;

    return (
        <Container> 
            <div style={{ height: '80%', width: '15%', border: '1px solid black'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                <h1>{name}</h1>
                <h3>{price}</h3>
            </div>
            <div style={{marginLeft: 'auto', border: '1px solid black'}}>
                
            </div>
        </Container>
    );
}

export default Item;