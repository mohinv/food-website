import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import { Box, Button } from '@material-ui/core';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import { createContext } from 'react';
import Items from '../Items/Items';
import { LocationSearchingOutlined } from '@mui/icons-material';
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();
const Location=createContext();
const Home = () => {


  const [lat,setlat]=useState();
  const [long,setlong]=useState();
  const [Val,setVal]=useState();


// JSX STARTS HERE

  return (
    <>
    {/* PASSING DATA THROUGH CONTEXT API */}
    <div style={{display:"none"}}><Location.Provider value={Val}><Items/></Location.Provider></div>

{/* TITLE OF NAVIGATION */}
    <div style={{backgroundColor:"rgba(0,0,0,1)",width:"100%",height:"50px",display:"flex",alignItems:"center"}}><h2 style={{width:"fit-content",margin:"auto",color:"grey"}}>Home</h2></div>


    {/* HOME PAGE STARTS HERE */}
    <div className='home-container'>
          <section className='home-first-page'>

          <div className='text-section'>

              <h2 style={{margin:"auto"}}>STAY HEALTHY<br/>order homemade foods </h2>

              <div className='description' style={{width:"100%"}}>

                <br/>
                  <p style={{width:"100%",textAlign:"center",margin:"auto",backgroundColor:"white",color:"grey",padding:"8px 20px",borderRadius:"10px"}}>search items near you </p>

                  <div style={{width:"fit-content",margin:"auto"}}><Link to="/Items"><Button type='submit' style={{backgroundColor:"burlywood",marginTop:"10px"}}>
                    Search</Button></Link></div>
                 
              </div>
            </div>
      

      {/* Image animation */}

            <div className='img-spinner'>
              <img src="https://media.istockphoto.com/id/182148711/photo/pizza-from-the-top-deluxe.jpg?b=1&s=170667a&w=0&k=20&c=zqW7usQtvM-foAytqQAcIiDIzMZ-z4E19ykbLwBbd4o=" alt='food'/>
            </div>
          </section>
            

{/* Second page of home page */}
          <section className='home-second-page'>
            <Box style={{maxWidth:"fit-content"}}><div className='box-content' data-scroll data-scroll-speed="-3" data-scroll-direction="vertical">
              <h3>quality food</h3>
              <p>we provide quality foods which were coocked at home properly we dont compormise with the food quality</p>
              </div></Box>
            <Box style={{maxWidth:"fit-content"}}><div className='box-content' data-scroll data-scroll-speed="-3" data-scroll-direction="vertical">
              <h3>order online</h3>
              <p>we provide quality foods which were coocked at home properly we dont compormise with the food quality</p>
              </div></Box>
            <Box style={{maxWidth:"fit-content"}}><div className='box-content' data-scroll data-scroll-speed="-3" data-scroll-direction="vertical">
              <h3>24 X 7 services</h3>
              <p>we provide quality foods which were coocked at home properly we dont compormise with the food quality</p>
              </div></Box>
          </section>
          <About/>
          <Contact/>
          <Footer/>
      </div>
    </>
  )
}

export default Home;
export {Location};
