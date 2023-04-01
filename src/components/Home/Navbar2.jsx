import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import img1 from "./images/apple1.jpg";
import "./Nav2.css";
export default function Navbar2() {

  const navigate = useNavigate();
  
  const togglePg=()=>{
    navigate("/Cart");
  }
  const clickHome = () => {
    navigate("/Home");
  };
  const clickAbout = () => {
    navigate("/About");
  };
  
  const searchRef = useRef(null);
  const navbarRef = useRef(null);
  const cartItemRef = useRef(null);

  const toggleSearch =()=>{
    searchRef.current.classList.toggle("active");
  }

  const toggleMenu = () => {
    navbarRef.current.classList.toggle("active");
  };

  const toggleCart = () => {
    cartItemRef.current.classList.toggle("active");
  };

  return (
    <div className="header">
      {/* <h1>Navbar2</h1> */}
      <nav className="navbar" ref={navbarRef}>
        <a href=" " onClick={clickHome}>home</a>
        <Link to="/About">about</Link>
        <a href="#menu">menu </a>
        <a href="#Products">products </a>
        <a href="#review">review </a>
        <a href="#contact">contact </a>
        <a href="#blogs">blogs </a>
      </nav>

      <div className="icons" >
        <div className="fas fa-search" id="search-btnn" onClick={toggleSearch}></div>
        <div
          className="fas fa-shopping-cart"
          id="cart-btnn"
          onClick={toggleCart}
        ></div>
        <div className="fas fa-bars" id="menu-btnn" onClick={toggleMenu}></div>
      </div>

      <div className="search-form"ref={searchRef}>
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>
      
      {/* CART ITEMS CONTAINER----- */}
      <div className="cart-items-container" ref={cartItemRef}>
        <div className="cart-item">
          <span className="fas fa-time"></span>
          {/* <img src={img1} width={100} height={100}  right ={0} alt = ".."></img> */}
          <div className="content">
            <h3>cart item 01</h3>
            <div className="price">200Rs/kg</div>
          </div>
        </div>
        <button className="Checkout" onClick={togglePg}>Cart</button>
      </div>
    </div>
  );
}
