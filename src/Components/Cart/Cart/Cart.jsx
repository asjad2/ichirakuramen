import React, { useState, useEffect } from "react";
import TableHeadercart from "../TableHeaderCart/TableHeadercart";
import { Link } from "react-router-dom";
import "./cart.css"

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
   < TableHeadercart/>
      {cart.map((item,i) => (
          
        <div className="cart_box" key={item.id}>
        <td>{i+1}</td>
          <td style={{ width: "25%" }}>
            <img src={item.img} alt="" />
            </td>
            <td style={{ width: "15%" }}>   <p >{item.title}</p></td>
          <td style={{ width: "30%" }}>
          
            <button id="btnp" onClick={() => handleChange(item, 1)}>+</button>
            <button id="btnn">{item.amount}</button>
            <button id="btnm" onClick={() => handleChange(item, -1)}>-</button>
            </td>
          <td style={{ width: "10%" }}>
            {item.price}</td>
            <td style={{ width: "15%" }}>
            <button  id="btnr" onClick={() => handleRemove(item.id)} >Remove</button>
            </td>
           
        </div>
      ))}
      <div className="total">
        <span>Total Price</span>
        <span> {price} ¥</span>
      </div>
      <Link to="/ichirakuramen/checkout"><button className="btn " id="checkoutbutton">Checkout</button></Link>
    </article>
  );
};

export default Cart;
