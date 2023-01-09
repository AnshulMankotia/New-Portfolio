import React from 'react'
import './Team.css'
import rahul from '../../Images/rahul.jpg'
import nikhil from '../../Images/nikhil.png'
import akhil from '../../Images/akhil.jpg'
import kartik from '../../Images/kartik.png'
import smallRect from "../../Images/Rectii.png"
const Team = () => {
  return (
    <section className="section7">
           <img className='rectangle' src={smallRect} alt="" />
    <div className="container">
        <div className="members flex-column">
            <div className="team-members flex-column">
                <h2>TEAM MEMBERS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur iusto dolores porro maxime suscipit quae vel commodi at iste.</p>
            </div>
            <div className="m-cards flex-row">
                <div className="m-card flex-column" id="m-card1">
                 <img src={rahul} alt=""/>
                 <span>Rahul Malviya</span>
                 <span>UI/UX Designer</span>                                
                </div>
                <div className="m-card flex-column" id="m-card2">
                 <img src={nikhil} alt="" />
                 <span>Nikhil Dhiman</span>
                 <span>Full Stack Developer</span>
                </div>
                <div className="m-card flex-column" id="m-card3">
                 <img src={akhil} alt="" />
                 <span>Akhil Rana</span>
                 <span>Full Stack Developer</span>
                </div>
                <div className="m-card flex-column" id="m-card4">
                 <img src={kartik} alt="" />
                 <span>Kartik MAlviya</span>
                 <span>Full Stack Developer</span>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Team