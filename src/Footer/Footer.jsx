import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { KeyboardArrowRight, LocationOn, Mail, Phone } from "@mui/icons-material";
import { Button } from "@material-ui/core";
const Footer=()=>{
    return (
        <>
        <div className="footer-main">
            <div className="footer">
                <div className="footer-menu">
                    <h3>menu</h3>
                    <div className="menu-items">
                    <Link to="/" style={{display:"flex",justifyContent:"flex-start"}}><KeyboardArrowRight/>Home</Link>
                    <Link to="/About" style={{display:"flex",justifyContent:"flex-start"}}><KeyboardArrowRight/>About</Link>
                    <Link to="/Contact" style={{display:"flex",justifyContent:"flex-start"}}><KeyboardArrowRight/>Contact</Link>
                    <Link to="/SellerForm" style={{display:"flex",justifyContent:"flex-start"}}><KeyboardArrowRight/>become a Seller</Link>
                    <Link to="/Form" style={{display:"flex",justifyContent:"flex-start"}}><KeyboardArrowRight/>sell</Link>
                    </div>
                </div>
                <div className="subscribe" style={{padding:"2%"}}>
                    <h3 style={{width:"max-content",margin:"4% auto"}}>subscribe us for updates</h3>
                    <div style={{backgroundColor:"white",display:"grid",gridTemplateColumns:"70% 30%",borderRadius:"10px",padding:"2%"}}><input type="email" placeholder="enter your email"/><Button style={{backgroundColor:"#ff8a00",color:"white",minWidth:"100%",maxWidth:"100%"}}>Subscribe</Button></div>
                </div>
                <div className="contact-container">
                    <h3 >contact</h3>
                    <div className="contacts">
                    <div style={{display:"flex",justifyContent:"flex-start"}}><LocationOn/>lucknow,india</div>
                    <div style={{display:"flex",justifyContent:"flex-start"}}><Phone/>+911234567890</div>
                    <div style={{display:"flex",justifyContent:"flex-start"}}><Mail/>Causeconnect@gmail.com</div>
                    </div>
                    
                </div>
            </div>
            <p style={{width:"fit-content",margin:"auto",color:"white", padding:"1%"}}>&copy;Cause Connect all rights preserved designed by hackelite</p>
        </div>
        </>
    )
}
export default Footer;