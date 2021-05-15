import React from "react";
import "../components/About.css";
import {NavLink} from "react-router-dom";
import img from "../img/about.png";

const About = () => {
  return (
    <>

    <section id="about">
        <div className="about-top">
          <h1><span>About</span> Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio officiis excepturi architecto odio dolorem vitae aperiam! Dolor, provident molestias! Tempore exercitationem quae esse architecto commodi excepturi non sapiente animi itaque, laborum fugit vel illo!
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos commodi odio ipsam suscipit adipisci a aliquid quas sint repellat officiis.</p>
          <NavLink to="">
            <button>More  <i className="fas fa-arrow-alt-circle-right"></i> </button>
          </NavLink>
        </div>

        <div className="about-bottom">
            <img src={img} alt="about"/>
        </div>
    </section>
      
    </>
  );
};

export default About;
