import React from 'react'
import './Blog.css'
import smallRect from "../../Images/Rectii.png"
import portfolio from "../../Images/portfolio.jpg"
import flexbox from "../../Images/flexbox.webp"

const Blog = () => {
  return (
    <section className="section8">
                <img className='rectangle' src={smallRect} alt="" />
                <div className="container">
                    <div className="blogs flex-column">
                        <div className="latest-blog flex-column">
                            <h2>LATEST BLOG</h2>
                            <p>How to Build a Portfolio using React, fully responsive with functionality,</p>
                        </div>
                        <div className="tiles flex-row">
                            <div className="tile flex-column" id="tile1">
                                  <img src={portfolio} alt="" />
                                <h2>How to Build a Portfolio using React, fully responsive with functionality,</h2>
                                <p>To create a portfolio using React, you will need to have a basic understanding of HTML, CSS, and JavaScript. You will also need to have Node.js and npm (Node Package Manager) installed on your computer.</p>
                                <button>Read More</button>
                            </div>
                            <div className="tile flex-column" id="tile2">
                                  <img src={flexbox} alt="" />
                                <h2>How to use flex-box and grid-box and learn about its basic cancepts,</h2>
                                <p>Flexbox is a layout module in CSS that makes it easier to create flexible, responsive layouts with HTML and CSS. It provides a way to align elements in a container, distribute space between elements, and specify how elements should grow or shrink to fit the available space.</p>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
             </section>
  )
}

export default Blog