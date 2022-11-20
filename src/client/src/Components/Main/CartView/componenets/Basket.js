import React from 'react';


const data = [
  { id: "1", name: "trident", quantity: 1, price: "4.00" },
  { id: "2", name: "orbit", quantity: 1, price: "3.90" },
  { id: "3", name: "aloe", quantity: 2, price: "2.99"},
]
const itemsPrice = data.reduce((a,c) => a + c.price * c.quantity, 0);
const taxPrice = itemsPrice * 0.06;
const totalPrice = itemsPrice + taxPrice;

export default function Basket(props) {
    return (
    <aside className = "block col-1">
      <h2>Shopping Cart</h2>
      {data.map((item) => (
        <div key={item.id} className = "row"> 
        <div className="col-2">{item.name}</div>
        <div className = "col-2">
          <button3>+</button3>
          {item.quantity}
          <button2>-</button2>
        </div>
        <div className = "col-2 text-right"> ${item.price} </div>
        </div>
      ))}
      {data.length !== 0 && (
        <>
        <hr></hr>
        <div className = "row">
          <div className = "col-2">Subtotal</div>
          <div className = "col-1 text-right">${itemsPrice.toFixed(2)}</div>
        </div>
        <div className = "row">
        <div className = "col-2">Tax</div>
        <div className = "col-1 text-right">${taxPrice.toFixed(2)}</div>
        </div>
        <div className = "row">
        <div className = "col-2"><strong>Total Price</strong></div>
        <div className = "col-1 text-right">${totalPrice.toFixed(2)}</div>
        </div>
        <div className = "row">
        <div className = "col-2">
          <button>Checkout</button>
          </div>
        </div>
        </>
      )}
    </aside>
    );
}