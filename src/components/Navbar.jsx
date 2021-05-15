import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Navbar.css";



const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <div id="logo">
          <NavLink to="">
            <i className="fas fa-handshake fa-2x"></i>
            
          </NavLink>
        </div>
        <ul className="nav-links">
          <li className="nav-items">
            <NavLink exact to='home'>Home</NavLink>
          </li>
          <li className="nav-items">
            <NavLink exact to='about'>About</NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="contact">Contact</NavLink>
          </li>
          <div className="right">
            <NavLink to="">
                <button>Sign up</button>
            </NavLink>
        </div>
        </ul>
        
      </nav>
    </>
  );
};

export default Navbar;
