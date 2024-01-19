import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./BuyerForm.css"
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const BuyerForm = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_1735ivd', 'template_tc0izrh', form.current, 'kcW07iZ4Urg-bw4df')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div style={{padding:"8%"}}>
    <div className='BuyerForm'>
    <form ref={form} onSubmit={sendEmail}>
        <div className='d-flex' style={{flexWrap:"wrap",gap:"15px"}}>
      <div style={{width:"200px",margin:"auto"}}><label>Name</label>
      <input type="text" name="user_name" />
      </div>
      
      <div style={{width:"200px",margin:"auto"}}><label>Email</label>
      <input type="email" name="user_email" />
      </div>
      
      </div>
      <div className='d-flex' style={{flexWrap:"wrap",gap:"15px"}}>
      <div style={{width:"200px",margin:"auto"}}><label>phone</label>
      <input type="text" name="phone" />
      </div>
      
      <div style={{width:"200px",margin:"auto"}}><label>address</label>
      <input type="text" name="address" />
      </div>
      
      </div>
      <label>street</label>
      <div style={{width:"90%",margin:"10px auto"}}>
      <input type="text" name="street" style={{width:"100%",margin:"auto"}} /></div>
      <div style={{width:"90%",margin:"10px auto"}}>
      <input type="text" name="email" style={{width:"100%",margin:"auto",display:"none"}} value={props.prop[0].email} /></div>
      <div style={{width:"fit-content",margin:"auto"}}>
      <Button   style={{backgroundColor:"#d6880c",color:"white",width:"fit-content",margin:"auto"}} type="submit" value="Send" onClick={()=>{alert("your order has been placed");}}>send</Button>
      </div>
    </form>
    </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};
export default BuyerForm;