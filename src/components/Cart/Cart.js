import React, { useState } from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart, clearCart, children } = props;
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h3 className="heading">Order Summary</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
      <button onClick={clearCart}>Clear Cart</button>
      {children}
    </div>
  );
};

export default Cart;
/*****************************************************
                using reducer calculation
*****************************************************/

/******************Calculate quantity*******************
const quantityReducer = (previous, current) => previous + current.quantity;
const totalQuantity = cart.reduce(quantityReducer, 0);

*****************Calculate total price*************
const totalPriceReducer = (previous, current) => previous + current.price;
const totalPrice = cart.reduce(totalPriceReducer, 0);

*************calculate total shipping charge*********
const totalShippingReducer = (prev, curr) => prev + curr.shipping;
const totalShippingPrice = cart.reduce(totalShippingReducer, 0);

const tax = parseFloat((totalPrice * 0.1).toFixed(2));
const grandTotal = totalPrice + totalShippingPrice + tax;

*********************************************************/
