import React from 'react'
import './Pricing.css'
import smallRect from "../../Images/Rectii.png"
const Pricing = () => {
  return (
    <section class="section6">
          <img className='rectangle' src={smallRect} alt="" />
    <div class="container">
        <div class="pricing flex-column">
            <div class="pricing-plan flex-column">
                <h2>PRICING PLAN</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et animi veritatis reiciendis similique praesentium inventore exercitationem necessitatibus illum ab.</p>
            </div>
            <div class="p-cards flex-row">
                <div class="p-card flex-column" id="p-card1">
                    <span>BASIC</span>
                    <span>$25</span>
                    <hr />
                    <span>35 Emails</span>
                    <span>500 GB Disk</span>
                    <span>Unlimited Bandwidth</span>
                    <span>Free Support</span>
                    <button>Get Started</button>
                </div>
                <div class="p-card flex-column" id="p-card2">
                    <span>ADVANCED</span>
                    <span>$45</span>
                    <hr />
                    <span>35 Emails</span>
                    <span>500 GB Disk</span>
                    <span>Unlimited Bandwidth</span>
                    <span>Free Support</span>
                    <button>Get Started</button>
                </div>
                <div class="p-card flex-column" id="p-card3">
                    <span>PROFESSSIONAL</span>
                    <span>$65</span>
                    <hr />
                    <span>35 Emails</span>
                    <span>500 GB Disk</span>
                    <span>Unlimited Bandwidth</span>
                    <span>Free Support</span>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    </div>
 </section>
  )
}

export default Pricing