import React from "react";
import "../components/Portfolio.css";
import img1 from "../img/img-1.jpg";
import img2 from "../img/img-2.jpg";
import img3 from "../img/img-3.jpg";
import img4 from "../img/img-4.jpg";
import img5 from "../img/img-5.jpg";
import img6 from "../img/img-6.jpg";


const Portfolio =() =>{
    return(
        <>

        <section id="portfolio">
            <div>
                <img src={img1} alt="img-1"/>
            </div>
            <div>
                <img src={img2} alt="img-1"/>
            </div>
            <div>
                <img src={img3} alt="img-1"/>
            </div>
            <div>
                <img src={img4} alt="img-1"/>
            </div>
            <div>
                <img src={img5} alt="img-1"/>
            </div>
            <div>
                <img src={img6} alt="img-1"/>
            </div>
        </section>


        </>
    );
};

export default Portfolio;