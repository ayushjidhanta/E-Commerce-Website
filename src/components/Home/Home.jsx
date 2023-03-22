import React from 'react'
import Navbar from "./Navbar.js"
import Navbar2 from './Navbar2.jsx'
import  "./Home.css"
function Home() {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
       <div className = "containe">
        <h1>Interface UI</h1>
       </div>
       <section className="section__1">
        <div className="wrapper">
          <div className="head__text">
            <h1 className="head__title">Aggriculture</h1>
            <h2 className="head__desc">Site Developing</h2>
          </div>
          <div className="exp__btn">
            <p>Explore</p>
          </div>
          <div className="mouse">
            <div className="mouse__wheel"></div>
          </div>
        </div>
      </section>
      <img src="/src/components/Home/images/apple1.jpg" className="img-fluid" alt="..."></img>
    </div>
  )
}

export default Home
