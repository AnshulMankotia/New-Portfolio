import React from 'react'
import './Intro.css'
const Intro = () => {
  return (
  
    <section className="section1">
        <div className="sidenav flex-row">
        <span>Facebook</span>
        <span>Twitter</span>
        <span>Behance</span>
        <span>Dribble</span>
        <hr />
      </div>
    <div className="container">
   
      <div className="intro flex-row">
      
        <div className="i-left flex-column">
          <h1>Hi, I'M Anshul Mankotia</h1>
          <span>Designer</span>
          <span>Coder</span>
          <span>Developement</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti hic non fugiat et quisquam quod quis. Consequatur
            ratione minima explicabo.
          </p>
          <button>Contact Us</button>
        </div>

        <div className="i-right">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Intro