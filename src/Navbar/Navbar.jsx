import React, { useState } from "react";
import{FaFacebook,FaInstagram,FaYoutube} from "react-icons/fa";
import { TableRows} from "@mui/icons-material";
import { Button } from "@material-ui/core";
import { NavLink} from "react-router-dom";
import "./Nav.css";
const Navbar=()=>{
    const [Visibility,setVisibility]=useState("none");
    const ChangeVisibility=()=>{
        console.log(Visibility);
        setVisibility(Visibility==="none"?"block":"none")}
    return (
        <>
        <nav className="nav">
            <div className="logo">
                <h2><span>C</span>ause <span>C</span>onnect</h2>
            </div>
            <div className="menu">
                <ul>
                    <div><NavLink to="/" >Home</NavLink></div>
                    <div><NavLink to="/About" >About</NavLink></div>
                    <div><NavLink to="/Contact" >Contact Us</NavLink></div>
                    <div><NavLink to="/Form" >Sell</NavLink></div>
                    <div><NavLink to="/SellerForm">Become a Seller</NavLink></div>
                </ul>
            </div>
            <div className="social-media-links">
                <ul>
                    <li><a href="www.facebook.com"><FaFacebook/></a></li>
                    <li><a href="www.instagram.com"> <FaInstagram/></a></li>
                    <li><a href="www.youtube.com"><FaYoutube/></a></li>
                </ul>
            </div>
            <div className="grid-button">
        <TableRows onClick={ChangeVisibility}/>
            </div>
        </nav>
        <div className="mobile-menu" style={{display:Visibility}}>
        <ul>
                    <div><NavLink to="/" onClick={ChangeVisibility}>Home</NavLink></div>
                    <div><NavLink to="/About" onClick={ChangeVisibility}>About</NavLink></div>
                    <div><NavLink to="/Contact" onClick={ChangeVisibility}>Contact Us</NavLink></div>
                    <div><NavLink to="/Gallery" onClick={ChangeVisibility}>Sell</NavLink></div>
                </ul>
        </div>

       
        </>
    )
}
export default Navbar;