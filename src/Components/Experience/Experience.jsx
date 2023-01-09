import React from 'react'
import './Experience.css'
const Experience = () => {
  return (
    <section className="section4">
    <div className="container">
        <div className="experience flex-row">
            <div className="box flex-column" id="box1">
                <span>275+</span>
                <span>Happy Customer</span>
            </div>
            <div className="box flex-column" id="box2">
                <span>74589</span>
                <span>Working Hours</span>
            </div>
            <div className="box flex-column" id="box3">
                <span>4960</span>
                <span>Coffee Cups</span>
            </div>
            <div className="box flex-column" id="box4">
                <span>158+</span>
                <span>Reviews and ratings</span>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Experience