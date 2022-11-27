import React from 'react';
import Basket from './componenets/Basket';
import Main from './componenets/Main';
import Header from './Header';
import './index.css';

const CartView = () => {

    return (
      <div className="App">
        <Header></Header>
        <div className ="row">
          <Main></Main>
          <Basket></Basket>
        </div>
      </div>
    );
}

export default CartView;