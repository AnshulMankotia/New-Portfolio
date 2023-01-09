import React from 'react'
import './Services.css'
import smallRect from "../../Images/Rectii.png"
import monitor from '../../Images/icon1.svg'
import heart from '../../Images/icon2.svg'
import headphone from '../../Images/icon3.svg'
const Services = () => {
  return (
    <section className="section3">
        <img className='rectangle' src={smallRect} alt="" />
    <div className="container">
        <div className="service flex-column">
            <div className="my-service flex-column">
                <h2>MY SERVICE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quam itaque quaerat nulla aut repellendus eveniet accusamus a nihil voluptatum.</p>
            </div>
            <div className="cards flex-row">
                <div className="card flex-column" id="card1">
                    <img src={monitor} alt="" />
                    <span>Fully Responsive</span>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit voluptatem amet adipisci provident culpa omnis nobis, sunt et pariatur accusamus?</span>
                </div>
                <div className="card flex-column" id="card2">
                    <img src={heart} alt="" />
                    <span>ui/ux designer</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore deleniti neque sunt autem esse velit sint repellat quis tempora!</span>
                </div>
                <div className="card flex-column" id="card3">
                    <img src={headphone} alt="" />
                    <span>24/7 support</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolores eius omnis quas voluptas? Quod dolorem adipisci deserunt nemo saepe?</span>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Services