import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    return (
      <div>
        <h3>Order Summary</h3>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${}</p>
        <p>Total Shipping Charge: $5</p>
        <p>Tax: $114</p>
        <p>Grand Total: ${}</p>
      </div>
    );
};

export default Cart;