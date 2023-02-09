import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo-1.png';
import { FaHome,FaRestroom, FaUserCheck, FaUserPlus, FaClipboardCheck, FaStream, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className='navigate-container'>
      <div className='logo'>
        <img src={logo} />
        <h2>Hotel-Caring</h2>
      </div>
      <div className={`navLinks ${open?'top-5':'top-6'}`}>
        <Link className='icon-p'  to='/'><FaHome />Home</Link>
        <Link className='icon-p' to='/booking'><FaClipboardCheck  />Booking</Link>
        <Link className='icon-p' to='/room'><FaRestroom />Rooms</Link>
        <Link to='/login'><FaUserCheck  />Login</Link>
        <Link className='icon-p' to='/register'><FaUserPlus  />Register</Link>
      </div>
      
      <div onClick={() => { setOpen(!open) }} className='menu-icon'>
        {
          open ? <FaTimes style={{ fontSize: '1.7em' }} /> : <FaStream style= 
           {{ fontSize: '1.7em' }} />
        }
      </div>


    </nav>
  );
};

export default Navigation;