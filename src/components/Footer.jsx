import React from "react";
import "../components/Footer.css";
import {NavLink} from "react-router-dom";

const Footer =() =>{
    return(
        <>
        <section id="footer">  
             <div className="top-foot">
                 <p>   &copy; All rights reserved | made by Harsh</p> 
             </div>
             <div className="bottom-foot">
                 <ul>
                     <li> <NavLink to=""><i className="fab fa-twitter fa-2x"></i></NavLink></li>
                     <li> <NavLink to=""><i className="fab fa-facebook-f fa-2x"></i></NavLink> </li>
                     <li> <NavLink to=""><i className="fab fa-instagram fa-2x"></i></NavLink> </li>
                 </ul>
             </div>


        </section>  

        </>
    );
};

export default Footer;