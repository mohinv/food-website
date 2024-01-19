import React, { useEffect, useState } from 'react';
import "./About.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const About = () => {


  // SLIDER FUNCTIONS 
  const [y,sety]=useState("0%");
  const [x,setx]=useState(0);
  const MoveL=()=>{
    console.log(x);
    if(x!==(-200))
    setx(x-100);
  }
  const MoveR=()=>{
    console.log(x);
    if(x!==0)
      setx(x+100);
    }
    useEffect(()=>{
      sety(`${x}%`);
    },[x])


    // JSX STARTS HERE
  return (
    <div>
      

      {/* ABOUT US FIRST PORTION  */}

      <div style={{backgroundColor:" rgba(0, 0, 0, 0.799)",width:"100%",height:"max-content"}}>
      <div className='about-first-page'>
      <section className='about-left-part'>
        <div className='image'>
        <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='loading'/>
        </div>
      </section>
      <section className='about-text-right'>
        <h3>About us</h3>
        <p>we provide a platform for those peoples who are good in coocking foods but they have no more expenses to start their journey and use their skill, here peoples can post and sell whatever they want to sell there is no need of money to start your online redtaurant.</p>
      </section>
      </div>
      </div>


      {/* ABOUT SECOND PORTION  */}
      <div style={{backgroundColor:"whitesmoke",width:"100%",height:"max-content",padding:"25px 0px"}}>
        <h2 style={{margin:"auto",width:"fit-content"}}>seller's Requirements</h2>
        <div className='slider'>

      <div style={{display:"grid",justifyContent:'center'}} onClick={MoveR}><Button style={{maxWidth:"fit-content",borderRadius:"50%",minWidth:"fit-content",color:"green"}}><KeyboardArrowLeftIcon/></Button></div>
      <div className='slider-container'>
        <div className='kitchen slider-content' style={{left:y}}>
          <img src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <div style={{display:"grid",alignItems:"center"}}>
          <h3>kitchen</h3>
          <p>first thing you need to start your own online restaurant is your own kitchen which is a normal requirement every body have their own kitchen to coock food items</p>
          </div>
        </div>
        <div className='ingridients slider-content'style={{left:y}}>
          <img src="https://images.unsplash.com/photo-1514237487632-b60bc844a47d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGtpdGNoZW4lMjBpbmdyaWRpZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <div style={{display:"grid",alignItems:"center"}}>
          <h3>Ingirdients</h3>
          <p>we do not provide Ingirdients to start your online restaurant you must have these things we provide you platform to use your coocking skill</p>
          </div>
        </div>
        <div className=' slider-content'style={{left:y}}>
          <img src="https://media.istockphoto.com/id/683264812/photo/chef-preparing-cuisine-in-hotel-kitchen.jpg?b=1&s=170667a&w=0&k=20&c=AwQrwAj8KQSHbxRUrqH91XhJ4cTcs6rkTp0dCSo20BM="/>
          <div style={{display:"grid",alignItems:"center"}}>
        <h3>Ingirdient</h3>
          <p>we do not provide Ingirdients to start your online restaurant you must have these things we provide you platform to use your coocking skill</p>
          </div>
        </div>
      </div>
      <div style={{display:"grid",justifyContent:'center'}} onClick={MoveL}><Button style={{maxWidth:"fit-content",borderRadius:"50%",minWidth:"fit-content",color:"green"}}><KeyboardArrowRightIcon/></Button></div>
        </div>
        <div style={{width:"fit-content",margin:"auto"}}><Button style={{backgroundColor:"green",color:"white",width:"fit-content",margin:"auto"}}><Link to="/SellerForm" style={{color:"white"}}>become a seller</Link></Button></div>
      </div>
    </div>
  )
}

export default About;
