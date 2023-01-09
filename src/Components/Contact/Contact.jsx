import React from 'react'
import './Contact.css'
import phone from '../../Images/phone.svg'
import mail from '../../Images/mail.svg'
import home from '../../Images/home.svg'
const Contact = () => {
  return (
    <footer>
    <div className="container">
        <div className="contact flex-column">
            <div className="contact-us flex-column">
                <h2>CONTACT US</h2>
                <p>To know more about our Services and for Enqueries please contact us,
                    We will Provide you the best Support.
                </p>
            </div>
            <div className="form flex-row">
                <div className="address flex-column">
                    <div className="icon flex-row">
                        <img src={phone} alt="" />
                        <span>+91 8278825392</span>
                    </div>
                    <div className="icon flex-row">
                        <img src={mail} alt="" />
                        <span>anshulmankotia1997@gmail.com</span>
                    </div>
                    <div className="icon flex-row">
                        <img src={home} alt="" />
                        <span>Fanatic Coders Pvt. Ltd, Mohali (Pb), India</span>
                    </div>
                </div>
                <div className="input flex-column">
                    <input type="text" placeholder="Name:"/>
                    <input type="text" placeholder="E-mail:"/>
                    <textarea name="Message" placeholder="Messages:" ></textarea>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    </div>
    <div className="terms">
                    <span>Copyright &#169; 2023 All Right Reserved</span>
                    <span className='policy'>
                        <span> Terms of service</span>
                        <span> Privacy Policy</span>
                        </span>
                </div>
  </footer>
  )
}

export default Contact