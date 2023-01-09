import React from 'react'
import "./About.css"
import smallRect from "../../Images/Rectii.png"
import Resume from './css-cheetsheet.pdf'
const About = () => {
  return (
    <section className="section2">
            <img className='rectangle' src={smallRect} alt="" />
    <div className="container">
        <div className="about flex-row">
            <div className="a-left flex-column">
                <span>About ME</span>
                <h1>I am a Full Stack Developer and UI UX Designer based in Chandigarh.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus et quae consequuntur iusto maxime hic atque debitis facere, voluptate dignissimos inventore, ducimus mollitia itaque ab odit. Accusamus quis animi suscipit facere quod natus corporis ex, accusantium, dolor modi, dolores quam!</p>
                <a href={Resume} download>
                <button>Download Resume</button>
                </a>
             
            </div>

            <div className="a-right flex-column">
           
                  <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            
           
            </div>
        </div>
    </div>
  </section>
  )
}

export default About