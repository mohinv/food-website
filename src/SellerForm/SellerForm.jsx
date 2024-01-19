import React, { useState } from "react";
import "./SellerForm.css";
import Footer from "../Footer/Footer";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../Items/Firebase.config'
import { useNavigate } from "react-router-dom";
const SellerForm=()=>{
  const navigate=useNavigate();
    const [Registration,setRegisration]=useState({
        FirstName:"",
        LastName:"",
        email:"",
        Phone:"",
        password:"",
        aadhar:"",
        StreetAddress:"",
        StreetAddress2:"",
        State:"",
        Country:"",
        Post:"",
        Area:""
    })
    
    const User=(event)=>{
        const {name,value}=event.target;
        console.log(name,value);
        setRegisration({...Registration,[name]:[value]})
    }


    // firebase
    const Submit=async(e)=>{
      e.preventDefault();

       createUserWithEmailAndPassword(auth, Registration.email, Registration.password)
        .then((userCredential) => {
          console.log(userCredential);
            // Signed in
            const user = userCredential.user;
            console.log(user);
            console.log(Registration);
            navigate("/login")
            return true;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });

        const {FirstName,LastName,Email,Phone,StreetAddress,StreetAddress2,State,Country,Post,Area,password}=Registration;
    const res=await fetch("https://sellerdata-default-rtdb.firebaseio.com/SellerData.json",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({FirstName,LastName,Email,Phone,StreetAddress,StreetAddress2,State,Country,Post,Area,password})
        });
        navigate("/");
        alert("succesfully registered we will reach you soon for your verification");
    }
    return (
        <>
        <div className="formbold-main-wrapper">
  <div className="formbold-form-wrapper">
    <form onSubmit={Submit}>
      <div className="formbold-form-title">
        <h2 className="">Register now</h2>
      </div>

      <div className="formbold-input-flex">
        <div>
          <label htmlFor="firstname" className="formbold-form-label">
            First name
          </label>
          <input
            type="text"
            name="FirstName"
            id="firstname"
            className="formbold-form-input"
            value={Registration.FirstName}
            onChange={User}
          />
        </div>
        <div>
          <label htmlFor="lastname" className="formbold-form-label"> Last name </label>
          <input
            type="text"
            name="LastName"
            id="lastname"
            className="formbold-form-input"
            value={Registration.LastName}
            onChange={User}
          />
        </div>
      </div>

      <div className="formbold-input-flex">
        <div>
          <label htmlFor="email" className="formbold-form-label"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            className="formbold-form-input"
            value={Registration.email}
            onChange={User}
          />
        </div>
        <div>
          <label htmlFor="phone" className="formbold-form-label"> Phone number </label>
          <input
            type="text"
            name="Phone"
            id="phone"
            className="formbold-form-input"
            value={Registration.Phone}
            onChange={User}
          />
        </div>
      </div>

      <div className="formbold-input-flex">
        <div>
          <label htmlFor="Pass" className="formbold-form-label"> password </label>
          <input
            type="password"
            name="password"
            id="Pass"
            className="formbold-form-input"
            value={Registration.password}
            onChange={User}
          />
        </div>
        <div>
          <label htmlFor="aadhar" className="formbold-form-label"> aadhar number </label>
          <input
            type="text"
            name="aadhar"
            id="aadhar"
            className="formbold-form-input"
            value={Registration.aadhar}
            onChange={User}
          />
        </div>
      </div>
      

      <div className="formbold-mb-3">
        <label htmlFor="address" className="formbold-form-label">
          Street Address
        </label>
        <input
          type="text"
          name="StreetAddress"
          id="address"
          className="formbold-form-input"
          value={Registration.StreetAddress}
          onChange={User}
        />
      </div>

      <div className="formbold-mb-3">
        <label htmlFor="address2" className="formbold-form-label">
          Street Address Line 2
        </label>
        <input
          type="text"
          name="StreetAddress2"
          id="address2"
          className="formbold-form-input"
          value={Registration.StreetAddress2}
          onChange={User}
        />
      </div>

      <div className="formbold-input-flex">
        <div>
          <label htmlFor="state" className="formbold-form-label"> State/Prvince </label>
          <input
            type="text"
            name="State"
            id="state"
            className="formbold-form-input"
            value={Registration.State}
            onChange={User}
          />
        </div>
        <div>
          <label htmlFor="country" className="formbold-form-label"> Country </label>
          <input
            type="text"
            name="Country"
            id="country"
            className="formbold-form-input"
            value={Registration.Country}
            onChange={User}
          />
        </div>
      </div>

      <div className="formbold-input-flex">
        <div>
          <label htmlFor="post" className="formbold-form-label"> Post/Zip code </label>
          <input
            type="text"
            name="Post"
            id="post"
            className="formbold-form-input"
            value={Registration.Post}
            onChange={User}
          />
        </div>
        <div>
          <label htmlFor="area" className="formbold-form-label"> Area Code </label>
          <input
            type="text"
            name="Area"
            id="area"
            className="formbold-form-input"
            value={Registration.Area}
            onChange={User}
          />
        </div>
      </div>

      <div className="formbold-checkbox-wrapper">
        <label htmlFor="supportCheckbox" className="formbold-checkbox-label">
          <div className="formbold-relative">
            <input
              type="checkbox"
              id="supportCheckbox"
              className="formbold-input-checkbox"
            />
            <div className="formbold-checkbox-inner">
              <span className="formbold-opacity-0">
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  className="formbold-stroke-current"
                >
                  <path
                    d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                    strokeWidth="0.4"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          I agree to the defined
          <a href="#"> terms, conditions, and policies</a>
        </label>
      </div>

      <button type="submit" className="formbold-btn" onClick={Submit}>Register Now</button>
    </form>
  </div>
</div>
<Footer/>
        </>
    )
}
export default SellerForm;