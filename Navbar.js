import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/u-ride">U-Ride</Link></li>
        <li><Link to="/u-eat">U-Eat</Link></li>
        <li><Link to="/u-delivery">U-Delivery</Link></li>
        <li><Link to="/u-stay">U-Stay</Link></li>
        <li><Link to="/auth">Login/Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
