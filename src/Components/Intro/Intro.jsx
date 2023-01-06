import React from 'react'
import './Intro.css'
import boy from "../../Images/image.png"
import rectangle1 from "../../Images/Rectangle1.svg"
import rectangle2 from "../../Images/Rectangle2.svg"
import shape1 from "../../Images/Shape1.svg"
import shape2 from "../../Images/Shape2.svg"
const Intro = () => {
  return (
  
    <section className="section1">
       
    <div className="container">
   
      <div className="intro flex-row">
      <div className="sidenav flex-row">
        <img src={shape2} alt="" />
        <span>Facebook</span>
        <span>Twitter</span>
        <span>Behance</span>
        <span>Dribble</span>
      </div>
      
        <div className="i-left flex-column">
          <h1>Hi, I'M Anshul Mankotia</h1>
          <div className='span'>
            <span>Designer</span>
            <span>Coder </span>
             <span>Developement</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti hic non fugiat et quisquam quod quis. Consequatur
            ratione minima explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aperiam.
          </p>
          <button>Contact Us</button>
        </div>

        <div className="i-right">
          <img src={rectangle2} alt="" />
          <img src={rectangle1} alt="" />
          <img src={shape1} alt="" />
          <img src={boy} alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Intro