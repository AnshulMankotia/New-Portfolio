import React from 'react'
import './Portfolio.css'
import smallRect from "../../Images/Rectii.png"
const Portfolio = () => {
    
  return (
    <section className="section5">
         <img className='rectangle' src={smallRect} alt="" />
    <div className="container">
        <div className="portfolio flex-column">
            <div className="my-portfolio flex-column">
                <h2>MY PORTFOLIO</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, quam! Eaque nisi corrupti rerum quibusdam. Voluptas eveniet deserunt quia magnam?</p>
                <div className="my-work flex-row">
                    <span>All</span>
                    <span>Design</span>
                    <span>Photoshop</span>
                    <span>Illustrate</span>
                    <span>Print</span>
                    <span>New</span>
                </div>
            </div>
            <div className="projects grid-row" >
                <div className="column" id="column1"></div>
                <div className="column" id="column2"></div>
                <div className="column" id="column3"></div>
                <div className="column" id="column4"></div>
                <div className="column" id="column5"></div>
                <div className="column" id="column6"></div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Portfolio