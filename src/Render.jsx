import React from "react";
import { Route,Routes } from "react-router-dom";
import "./Render.css"
import Home from "./Home/Home";
import MainContact from "./MainContact";
import MainAbout from "./MainAbout";
import Form from "./Form";
import Navbar from "./Navbar/Navbar";
import Items from "./Items/Items";
import SellerForm from "./SellerForm/SellerForm";
import BuyerForm from "./BuyerForm/BuyerForm";
const Render=()=>{
    return (
        <>
        <Navbar/>
        <div className='bg-blur'>
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/Contact" Component={MainContact}></Route>
            <Route path="/About" Component={MainAbout}></Route>
            <Route path="/Gallery" Component={Form}></Route>
            <Route path="/Form" Component={Form}></Route>
            <Route path="/Items" Component={()=><Items/>}></Route>
            <Route path="/SellerForm" Component={()=><SellerForm/>}></Route>
            <Route path="/BuyerForm" Component={()=>{<BuyerForm/>}}></Route>
        </Routes>
        </div>
        </>
    )
}
export default Render;