import React from "react";
import {NavLink} from "react-router-dom";
import "../components/Cards.css";

const Cards =() =>{
    return(
        <>
        
        <div id="cards">
            <div className="box">
            <i className="fas fa-globe fa-3x"></i>
            <h4 className="box-heading">New Things</h4>
            <p className="box-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia maxime reprehenderit recusandae.</p>
            <NavLink to="about">
                <button className="box-btn">Expore !!</button>
            </NavLink>
            </div>
            <div className="box">
            <i className="fas fa-warehouse fa-3x"></i>
            <h4 className="box-heading">Sale/Rent</h4>
            <p className="box-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore consequatur rerum.</p>
            <NavLink to="">
                <button className="box-btn">
                    Know More !!
                </button>
            </NavLink>
            </div>
            <div className="box">
            <i className="fas fa-parking fa-3x"></i>
            <h4 className="box-heading">Parking Facility</h4>
            <p className="box-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero repellat unde!</p>
            <NavLink to="">
                <button className="box-btn">
                    Check !!
                </button>
            </NavLink>
            </div>
            <div className="box">
            <i className="fab fa-angellist fa-3x"></i>
              <h4 className="box-heading">Best Deals</h4>
              <p className="box-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat corporis omnis obcaecati.</p>
              <NavLink to="">
                  <button className="box-btn">Get Now !!</button>
              </NavLink>
            </div>
        </div>


        </>
    );
};

export default Cards;