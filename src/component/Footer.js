import React from 'react';
import { NavLink } from 'react-router-dom'
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdAddIcCall,MdEmail,MdLocationOn,MdWatchLater } from "react-icons/md";
import "./style.css";

const Footer = () => (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className='footer-site-logo pb-4'>
                        <img src='./images/footer-site-logo.png' className='img-fluid'/>
                    </div>
                    <p>Good Coffee – Cheaper than Prozac!</p>
                    <div className="socialMediaIcons">
                        <a href='#'>
                            <FaYoutube className='icon' />
                        </a> 
                        <a href='#'>
                            <FaInstagram className='icon' />
                        </a> 
                        <a href='#'>
                            <FaFacebook className='icon' />
                        </a> 
                        <a href='#'>
                            <FaTwitter className='icon' />
                        </a> 
                    </div>
                </div>
                <div className="col-md-4">
                   <h2 className="pb-3">Our Contact</h2>
                    <div className='footer-location-map'>
                    <div className="footer-get-touch-wrap">
                            <div className="row footer-get-touch">
                                <div className="col-12">
                                    <div className='get-touch'>< MdAddIcCall /><a href="tel:+919191919191"> +91 919191919191 </a></div>
                                    {/* <div className='get-touch'>< MdAddIcCall /><a href="tel:+919191919191"> +91 9773145557</a></div>
                                    <div className='get-touch'>< MdAddIcCall /><a href="tel:+919191919191"> +91 8849121025 </a></div>
                                    <div className='get-touch'>< MdAddIcCall /><a href="tel:+919191919191"> +91 9624241299 </a></div> */}
                                </div>
                            </div>
                            <div className="row footer-get-touch">
                                <div className="col-12">
                                    <div className='get-touch'> <MdEmail/> <a href="mailto:infodripcoffee@gmail.com"> infodripcoffee@gmail.com </a></div> 
                                </div>
                            </div>
                            <div className="row footer-get-touch">
                                <div className="col-12">
                                <div className='get-touch'>< MdLocationOn /><p className='mb-0'>Dollyben Desai Institute of Computer And Allied Sciences,Palsana, Gujarat</p></div>
                                </div>
                            </div>
                            <div className="row footer-get-touch">
                                <div className="col-12">
                                    <div className='get-touch'>< MdWatchLater /><p>Open Hours<br/>Monday - Friday<br/> 8.00 AM - 8.00 PM</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2 className="pb-3">Our Location</h2>
                    <div className='footer-location-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.6150698288757!2d72.9842993138467!3d21.088030985966334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05bfa10db7071%3A0xe22966717dc145a6!2sDollyben%20Desai%20Institute%20of%20Computer%20And%20Allied%20Sciences!5e0!3m2!1sen!2sin!4v1661847621123!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="copyright">
                <h6>
                    <p className="footer-text">Copyright © {new Date().getFullYear()} All rights reserved by <a href="/" target="_blank">Drip Coffeeshop</a></p>
                </h6>
            </div>
        </div>
    </div>
);
export default Footer;