import React, {useRef ,useContext, useEffect, useState } from "react";
import {Location} from "../Home/Home"
import { Button } from "@material-ui/core";
import "./Items.css";
import { NavLink } from "react-router-dom";
import { ref,getDatabase ,onValue} from "firebase/database";
import {DB} from "./Firebase.config";
import { LocationSearchingOutlined } from "@mui/icons-material";
import Footer from "../Footer/Footer";
import BuyerForm from "../BuyerForm/BuyerForm";
const Items=()=>{
    
    const [cat,setcat]=useState([]);

    const [projects, setProjects] = useState([]);

  const [lat,setlat]=useState();
  const [long,setlong]=useState();
  const [Val,setVal]=useState();
  const[display,setdisplay]=useState("block");
  const[display2,setdisplay2]=useState("none");
  const[dataofitem,setdataofitem]=useState([{
    name:"",
    email:""
  }]);

useEffect(()=>{
  getPos();
},[]);

  // THIS FUNCTION CONVERTS LATITUDE AND LONGITUDE TO CITY NAME
  const ApiCall=async()=>{
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=de8cdb083960f3cb60176c051774c505`)
    const res= await response.json();
    console.log(res.name);
    setVal(res.name);
  }

  // THIS FUNCTION GET LATITUDE AND LONGITUDE OF USER'S LOCATION
  const getPos=()=>{
        if (navigator.geolocation) {
          navigator.permissions.query({ name: "geolocation" }).then((result)=> {
              if (result.state === "granted") {
                // console.log(result.state);
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

// get database from firebase database dataitems
  useEffect(() => {
    const query = ref(DB, "DataItems");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((project) => {
          setProjects((projects) => Array.from(new Set([...projects, project])));
        });
      }
    });
  }, []);
  const [Menu,setMenu]=useState([new Set(projects)]);

// this returns categories of food items from the Api Data which is an array of object
useEffect(()=>{
    setcat(()=>{
       return  Array.from(new Set(projects.map((elem)=>{
        return elem.category;
       })))
    });
    setMenu(projects);
},[projects])


// this function filters out the items belonging to the category selected
    const FilterItem=(categ)=>{
            const updated=projects.filter((elem,index)=>{
                return elem.category===categ;
            })
            setMenu(updated);
    }
    const Filterlocation=(val)=>{
        const updatedval=projects.filter((elem)=>{
            return elem.location===val;
        })
        setMenu(updatedval);
    }
    const filterdata=(ind)=>{
        const valu=projects.filter((elem,index)=>{
            return index===ind;
        })
        console.log(valu);
        setdataofitem(valu);;
    }


// JSX starts here
    return (
        <>
        <div style={{display:display}}>
        <div style={{width:"100%",backgroundColor:"black"}}>
        <p style={{width:"fit-content",margin:"auto",color:"white"}}>Enter your location</p>
                  <form onSubmit={(e)=>{e.preventDefault()}}> <div style={{width:"max-content",margin:"auto",backgroundColor:"white",height:"50px",borderRadius:"10px",padding:"5px 20px"}}>
                    
                    <input className="inputlocation" type='text' placeholder='your cityname' value={Val} 
                    onChange={(event)=>{
                      setVal(event.target.value); event.preventDefault()}}/>
                      <LocationSearchingOutlined onClick={ApiCall} style={{color:"black",cursor:"pointer"}} titleAccess='auto detect'/>
                      </div>

                  <div style={{width:"fit-content",margin:"auto"}}><Button onClick={()=>{Filterlocation(Val)}}type='submit' style={{backgroundColor:"burlywood",marginTop:"10px"}}>
                    Search</Button></div></form></div>
        <div className="btns d-flex">
            {cat.map((val,index)=>{
                return <Button style={{backgroundColor:"#0c3793",padding:"10px",justifyContent:"space-around",color:"white",}} onClick={()=>FilterItem(val)} key={index}>{val}</Button> 
            })}
        <Button style={{backgroundColor:"#0c3793",padding:"10px",justifyContent:"space-around",color:"white"}} onClick={()=>{setMenu(projects)}}>All</Button>
        </div>

{/* Card */}

        <div className="row">
            <div className="container-fluid columns">
                {Menu.map((elem,index)=>{
                    return (
                        <>
                        <div className="card mt-5 box" key={index} style={{backgroundColor:"white"}}>
                            <img className="card-img-top" src={`https://source.unsplash.com/200x200/?${elem.name}`} alt="Card " height="200px"/>
                            <div className="card-body">
                                <h4 className="card-title">{elem.name}</h4>
                                <p className="card-text">{elem.location}</p>
                                <p className="card-text">{elem.price}</p>
                                <button className="btn btn-primary" onClick={()=>
                                {setdisplay(display==="block"?"none":"block");
                                setdisplay2(display2==="block"?"none":"block");
                                filterdata(index);
                                console.log(display);}
                                }>
                                  Order Now</button>
                            </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <Footer/>
        </div>
        </div>
        <div style={{display:display2}}><BuyerForm prop={dataofitem}/></div>
        </>
    )
}
export default Items;