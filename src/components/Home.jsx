import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Home.css";
import img from"../img/home.jpg";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="left-home">
          <h1><span>Home</span> is where "our story begins.."</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio officiis excepturi architecto odio dolorem vitae aperiam! Dolor, provident molestias! Tempore exercitationem quae esse architecto commodi excepturi non sapiente animi itaque, laborum fugit vel illo!
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos commodi odio ipsam suscipit adipisci a aliquid quas sint repellat officiis.</p>
          <NavLink to="">
            <button>More  <i className="fas fa-arrow-alt-circle-right"></i> </button>
          </NavLink>
        </div>

        <div className="right-home">
            <img src={img} alt="home"/>
        </div>
    </section>
    
      <Cards/>
      
    </>
  );
};

export default Home;
