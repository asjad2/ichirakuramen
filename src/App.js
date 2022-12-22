import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Menu from "./pages/Menu/Menu"
import About from "./pages/About/About"
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart/Cart";
import List from "./Components/List/List";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Components/Cart/Checkout/Checkout";
import Loginpage from "./pages/Loginpage/Loginpage";
import Form from "./pages/Signup/Form";
import Form1 from "./pages/SignupUpdate/Form"
// import Admin from "./Admin/Admin"
function App() {

  const [show, setShow] = useState();
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !==-1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    
    cart[ind].amount += d;

    if (cart[ind].amount === 0) 
    cart[ind].amount = 1;
    setCart([...cart]);
  };
  const [auth, setAuth] = useState(false);
function getAuthenticate(value){
  setAuth(value);
}

  return (
    <div className="App">
    
     
      <Navbar setShow={setShow} size={cart.length} />
      <Routes>
          <Route exact path="/ichirakuramen" element={<Home />}></Route>
          <Route exact path="/ichirakuramen/menu" element={<Menu handleClick={handleClick} />}></Route>
          <Route exact path="/ichirakuramen/cart" element={<Cart  cart={cart} setCart={setCart}  handleChange={handleChange}/>}></Route>
          <Route exact path="/ichirakuramen/about" element={<About />}></Route>
          <Route exact path="/ichirakuramen/checkout" element={<Checkout />}></Route>
          <Route exact path="/ichirakuramen/about" element={<About />}></Route>
          <Route exact path="/ichirakuramen/membership" element={<Loginpage uplifter={getAuthenticate} />}></Route>
          <Route exact path="/ichirakuramen/signup" element={<Form/>}></Route>
          <Route exact path="/ichirakuramen/list" element={auth ? <List /> : <Loginpage uplifter={getAuthenticate}/>}></Route> 
          <Route exact path="/ichirakuramen/edit/:id" element={<Form1/>}></Route> 
          {/* <Route exact path="/list" element={<List/>}></Route>  */}

        </Routes>
       <  Footer className="appfooter"/>
    </div>
  );
}

export default App;
