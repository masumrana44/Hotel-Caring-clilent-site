import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
    return (
        <div id='footer-container' >
            <div id='footer-main-content' className='d-flex justify-content-center   align-items-start mt-5'>
                <div id='mission-text'>
                    <h4 className='text-white'>OUR MISSION</h4>
                    <p className='text-muted'>Our mission at Hotel-Caring is to provide guests with
                        exceptional hospitality and memorable experiences. We strive to create a
                        welcoming
                        atmosphere and deliver personalized service to make every stay comfortable and
                        enjoyable. Our goal is to exceed expectations and provide guests with a home
                        away
                        from home.</p>
                </div>

                <div id='site-map'>
                    <h4 className='text-white'>SITE MAP</h4>
                    <div id='footer-navlink'>
                        <Link to='/'>Home</Link>
                        <Link to='/booking'>Booking</Link>
                        <Link to='/room'>Rooms</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                </div>

                <div id='booking'>
                    <h4 className='text-white'>BOOKING</h4>
                    <h6 className='text-white mt-3 m-0'><small>Hotel-caring</small></h6>
                    <p className='text-secondary'>Desk: 1800-535-3555</p>
                    <p className='text-secondary'>Hotline:+8803544-3455942</p>
                    <p id='footer-color'>booking@hotelcaring.com</p>
                </div>

                <div id='news-letter'>
                    <h4 className='text-white'>NEWSLETTER</h4>
                    <p className='text-secondary'>Don't miss out on events and special offers at the
                        Hotel-
                        Caring</p>

                    <div  >
                        <div >
                            <p className='text-secondary mt-4'>Email Adress <small className='text-danger'>*
                            </small>
                            </p>
                            <div className='d-flex align-items-center'>
                                <input type='email' placeholder='example@gmail.com' />
                                <button >Subscribe</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div id='footer-second-content' className='border border-secondary'  >
                 
               <p className='text-white mt-4'>2023 All Right Reserved Developed by <span className='h5' id='footer-color'>Masum Rana</span></p>

               <div id='footer-icon'>
                <li><FaFacebook/></li>
                 <li><FaInstagram/></li>
                <li> <FaTwitter/></li>
                <li> <FaLinkedinIn/></li>
               </div>
            </div>
        </div>
    );
};

export default Footer;