import React from 'react'
import './Nav2.css'
export default function Navbar2() {
  return (
    <>
    <div className ="header">
      {/* <h1>Navbar2</h1> */}
      <nav className = "navbar">
      <a href ="#home">home </a>
      <a href ="#about">about </a>
      <a href ="#menu">menu </a>
      <a href ="#Products">products </a>
      <a href ="#review">review </a>  
      <a href ="#contact">contact </a>
      <a href ="#blogs">blogs </a>
      </nav>
      
      <div className= "icons">
      <div className="fas fa-search" id="search-btn"></div>
      <div className="fas fa-shopping-cart" id="cart-btn"></div>
      <div className="fas fa-bars" id = "menu-btn"></div>
      </div>

      <div className= "search-form">
        <input type="search" id="search-box" placeholder="search here..."/>
        <label for="search-box" class="fas fa-search"></label>
      </div>

      <div className="cart-items-container">
      <div className="cart-item">
          <span className="fas fa-time"></span>
          <img src="/src/components/Home/images/applecart1.jpg" className="img-fluid" alt=""></img>
          <div className="content">
            <h3>cart item 01</h3>
            <div className="price">200Rs/kg</div>
          </div>
      </div>
      </div>
    </div>
    </>
  )
}
