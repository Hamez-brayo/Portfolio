import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import './DarkMode/DarkMode'

const Navbar = ({ darkMode }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      
      <div className="navbar-content">
        <Link to="/">
          <h1>JB</h1>
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <darkMode/>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: 'red' }} />
        ) : (
          <FaBars size={20} style={{ color: 'red' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
