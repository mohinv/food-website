import React, {  useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { LocationSearchingOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Footer from "./Footer/Footer";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './Items/Firebase.config';
const Form=()=>{

    const [email,setId]=useState();
    const [Pass,setPass]=useState();
    const [name,setTitle]=useState();
    const [price,setPrice]=useState();
    const [location,setlocation]=useState();
    const [category,setcat]=useState();
    const [disp,setdisp]=useState("none");
    const navigate=useNavigate();

  const [lat,setlat]=useState();
  const [long,setlong]=useState();

useEffect(()=>{
  getPos();
},[]);

  // THIS FUNCTION CONVERTS LATITUDE AND LONGITUDE TO CITY NAME
  const ApiCall=async()=>{
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=de8cdb083960f3cb60176c051774c505`)
    const res= await response.json();
    console.log(res.name);
    setlocation(res.name);
  }
  const getPos=()=>{
        if (navigator.geolocation) {
          navigator.permissions.query({ name: "geolocation" }).then((result)=> {
              if (result.state === "granted") {
                console.log(result.state);
                navigator.geolocation.getCurrentPosition((position)=>{setlat(position.coords.latitude); setlong(position.coords.longitude)});
              } else if (result.state === "prompt") {
                navigator.geolocation.getCurrentPosition((position)=>{setlat(position.coords.latitude); setlong(position.coords.longitude)});
              } else if (result.state === "denied") {
                alert("please enable your location");
              }
            });
        } else {
          alert("Sorry geolocation is not supported in your device!");
        }
      }

    const Submit=async(e)=>{
      e.preventDefault();
        
     signInWithEmailAndPassword(auth, email, Pass)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            
            console.log(user);
            const res= fetch("https://dataitems-614a4-default-rtdb.firebaseio.com/DataItems.json",{
           method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({name,price,location,category,email})
        });
        navigate("/Items");
        setdisp("none");
            return true;
        })
        .catch((error) => {
          setdisp("block")
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }


    // JSX starts here
    return (
        <>
        <div 
        style={{backgroundColor:"rgba(0,0,0,1)",width:"100%",height:"50px",display:"flex",alignItems:"center"}}>
          <h2 
          style={{width:"fit-content",margin:"auto",color:"grey"}}>Sell Items</h2></div>
        <div className="seller-form-main">
        <fieldset className="seller-form">
            <form method="POST" onSubmit={Submit} >
            <input type="email" placeholder="username: your email" value={email} 
            onChange={(event)=>{setId(event.target.value)}}></input>
                <br/>
            <input type="password" placeholder="emter your password" value={Pass} 
            onChange={(event)=>{setPass(event.target.value)}}/>
                <br/>
            <input type="text" placeholder="Enter name of your item" value={name} 
            onChange={(event)=>{setTitle(event.target.value)}}/>
                <br/>
            <input type="text" list="cate" placeholder="category of item ex:breakfast" value={category} 
            onChange={(event)=>{setcat(event.target.value)}}/>
                <br/>
                <datalist id="cate">
                  <option value="breakfast">breakfast</option>
                  <option value="lunch">lunch</option>
                  <option value="dinner">dinner</option>
                  <option value="fast food">fast food</option>
                  <option value="all">all</option>
                </datalist>
            <input type="number" placeholder="price in rupees" value={price} onChange={(event)=>{setPrice(event.target.value)}}></input>
                <br/>
                <div style={{width:"90%",backgroundColor:"white",height:"40px",borderRadius:"10px",margin:"10px",opacity:"0.7"}}>
                    <input type="location" placeholder="enter your location" style={{width:"90%",margin:"0px",border:"none",outline:"none"}} 
               value={location} onChange={(event)=>{setlocation(event.target.value)}}/><LocationSearchingOutlined onClick={ApiCall} style={{cursor:"pointer"}}/></div>
                <p 
            style={{width:"fit-content",color:"red", display:disp,margin:'0px auto'}}>
              incorrect username or password</p>
               <div><p>haven't registered ?, <NavLink to="/SellerForm">Register as seller</NavLink></p></div>
               <div style={{width:"fit-content",margin:"auto",opacity:'0.8'}}> 
               <Button type="submit" className="btn" 
               style={{backgroundColor:"#00ff2b",maxHeight:"30px"}} 
               onClick={Submit}>publish your item</Button></div>
               <div style={{width:"fit-content",margin:"10px auto",}}> 
               <Button onClick={()=>{alert("your donation is accepted we will contact you soon"); navigate("/")}} style={{backgroundColor:"orange",maxHeight:"30px"}}>Donate your item</Button></div>
            </form> 
        </fieldset>
        </div>
        <Footer/>
        </>
    )
}
export default Form;