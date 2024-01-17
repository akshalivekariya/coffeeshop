import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdAddIcCall,MdEmail,MdLocationOn,MdWatchLater } from "react-icons/md";

const Contact = () => {
    return (
        <div id="contact-form">
            <section className="contact-baner-area">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content">
                            <div className="title ps-5">
                                <span className="subheading">Let’s Get in Touch</span>
                                <h2 className="title gallery-title pt-4">Contact US</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-details section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div class="contact-get-touch-wrap">
                                <div className='get-touch-icon'>< MdLocationOn /></div>
                                <h3 className='get-touch-title'>Address</h3>
                                <div className='get-touch-content'>
                                    <p className='mb-0'>14000 Fruitvale Ave, Saratoga, CA 95070, United States</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"> 
                            <div class="contact-get-touch-wrap">
                                <div className='get-touch-icon'>< MdEmail /></div>
                                <h3 className='get-touch-title'>E-mail</h3>
                                <div className='get-touch-content'>
                                  <a href="mailto:infodripcoffee@gmail.com"> infodripcoffee@gmail.com </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="contact-get-touch-wrap">
                                <div className='get-touch-icon'>< MdAddIcCall /></div>
                                <h3 className='get-touch-title'>Call us</h3>
                                <div className='get-touch-content'>
                                    <a href="tel:+919191919191"> +91 919191919191 </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="contact-get-touch-wrap">
                                <div className='get-touch-icon'>< MdWatchLater /></div>
                                <h3 className='get-touch-title'>Opening hours</h3>
                                <div className='get-touch-content'>
                                    <p>Monday - Friday<br/> 8.00 AM - 8.00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-wrap">
                        <div className="title pb-4">
                            <span className="subheading">Let’s Chat</span>
                            <h2 className="title gallery-title">Send Message</h2>
                        </div>                          
                        <div className="contact-form-main">
                            <form className="contact-form" method="post" action="" enctype="multipart/form-data">
                                <div className='row form-row'>
                                    <div className="col-md-6">
                                        <label for="name" className="form-label">Your Name</label> 
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Your name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="email" className="form-label">Your E-mail</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Your e-mail" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <label for="subject" className="form-label">Subject</label>
                                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" />
                                </div>
                                <div className="form-row">
                                    <label for="message" className="form-label">Message</label>
                                    <textarea type="text" className="form-control" id="message" name="message" placeholder="Message"></textarea>
                                </div>
                                <div className="form-row">
                                    <input type="submit" name="submit" value="Send Message" className="btn btn-submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section>
               <div className='contact-location-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.3448019064685!2d-122.01580706815952!3d37.26324998477484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e4a95954d8c31%3A0x73eeb5c7dca4579e!2sDrip%20Coffee%20Co..!5e0!3m2!1sen!2sin!4v1661362291403!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </div>
       )
}

export default Contact
