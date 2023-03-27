import React, {useRef} from "react";
import { useNavigate } from "react-router";
// import img1 from "./images/apple1.jpg";
import "./Nav2.css";
export default function Navbar2() {
  
  const navigate = useNavigate();
  const clickHome=()=>{
    navigate("/Home");
  }
  const clickAbout=()=>{
    navigate("/Aboutbt")
  }
  //  let navbar = document.querySelector('.navbar');
  //  document.querySelector('#menu-btnn').onclick =()=>{
  //   navbar.classList.toggle('active');
  //  }

  //  let cartItem = document.querySelector('.cart-items-container');
  //  document.querySelector('#cart-btnn').onclick =()=>{
  //   cartItem.classList.toggle('active');
  //  }
  const navbarRef = useRef(null);
  const cartItemRef = useRef(null);

  const toggleMenu = () => {
    navbarRef.current.classList.toggle("active");
  };

  const toggleCart = () => {
    cartItemRef.current.classList.toggle("active");
  };
  
  return (
    
      <div className="header">
        {/* <h1>Navbar2</h1> */}
        <nav className="navbar" ref ={navbarRef}>
          <a href="#home" onClick={clickHome}>home </a>
          <a href="#about" onClick ={clickAbout}>about </a>
          <a href="#menu">menu </a>
          <a href="#Products">products </a>
          <a href="#review">review </a>
          <a href="#contact">contact </a>
          <a href="#blogs">blogs </a>
        </nav>

        <div className="icons">
          <div className="fas fa-search" id="search-btnn"></div>
          <div className="fas fa-shopping-cart" id="cart-btnn" onClick={toggleCart}></div>
          <div className="fas fa-bars" id="menu-btnn"onClick={toggleMenu}></div>
        </div>

        <div className="search-form">
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>

        <div className="cart-items-container" ref={cartItemRef}>
          <div className="cart-item">
            <span className="fas fa-time"></span>
            {/* <img src={img1} width={100} height={100}  right ={0} alt = ".."></img> */}
            <div className="content">
              <h3>cart item 01</h3>
              <div className="price">200Rs/kg</div>
            </div>
          </div>
          <button className="Checkout" >Checkout</button>
        </div>
      </div>
    
  );
}
