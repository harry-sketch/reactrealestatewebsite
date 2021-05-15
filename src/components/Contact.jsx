import React from "react";
import "../components/Contact.css";
import {ToastContainer,toast} from "react-toastify";

const Contact =() =>{

    
     return(
         <>
         <section id="contact">
         <h1>Reach Us</h1>
         <div className="contact-section">
             <form action="">
                 <div className="form-group">
                     <label htmlFor="myname">Name</label>
                     <input type="text" name="" id="myname" placeholder="name please"/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="myemail">Email</label>
                     <input type="email" name="" id="myemail" placeholder="email please"/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="mynum">Contact</label>
                     <input type="number" name="" id="mynum" placeholder="contact please"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="text">Suggestions</label>
                     <textarea name="" id="text" cols="30" rows="8"></textarea>
                 </div>
                 
                 <button className="form-btn">Submit</button>
                 
             </form>
             
             </div>
             
         </section>
        


         </>
     );
};

export default Contact;