import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>JB</h1>
      </Link>
      <ul>
        <li>
            <Link to ="/">Home</Link>
        </li>
        <li>
            <Link to ="/about">About</Link>
        </li>
        <li>
            <Link to ="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
