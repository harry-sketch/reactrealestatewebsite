import React,{useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {css} from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";



const App =() =>{

  const [loading,setLoading]= useState(false);
  const override = css`
     display:block;
     margin:20% auto;
     border-color:red;
  `;

  useEffect(()=>{
    setLoading(true)
    setInterval(() => {
      setLoading(false)
    }, 5000);
  },[])
        return(
          <div className="App">
            {
              loading ? <HashLoader color={"36D7B7"} loading={loading} css={override} size={50}/>
              : 
              <>
    
          <Navbar/>
          <Header/>
          <Home/>
          <About/>
          <Portfolio/>
          <Contact/>
          <Footer/>
    
          </>
            }
          </div>
        );
};

export default App;