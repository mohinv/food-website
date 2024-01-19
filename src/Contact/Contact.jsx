import { Button } from '@material-ui/core';
import "./Contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
  
const Contact = () => {
  const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wb1auwh', 'template_yq9hgf9', form.current, 'kcW07iZ4Urg-bw4df')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  // internal css styles
  const input={
    width:"100%",
    height:"40px",
    marginTop:"10px"
  }
  const input2={
    width:"90%",
    gap:"5%",
    height:"40px",
    // margin:"10%",
  }


  // jsx starts here
  return (
    <>
    
      <div style={{backgroundColor:" white",width:"100%",height:"max-content"}}>
        <div className='contact-first-page'>
          <section style={{width:"100%"}}>
            <fieldset style={{padding:"1%"}}>
              <legend><h3>contact us</h3></legend>
                <form ref={form} onSubmit={sendEmail}>
                     <div className='contact-input-container'>
                         <input type="text"placeholder='enter your name' style={input} name="user_name" />
                         <input type='email' placeholder='ex: xyz@gmail.com' style={input} name="user_email"/>
                    </div>
                    <div style={{width:"100%",margin:"auto",display:"flex",justifyContent:"space-around",marginTop:"10px"}}>
                      <input type='text' placeholder='subject' style={input2} name='subject'/></div>
                     <div style={{width:"100%",margin:"auto",display:"flex",justifyContent:"space-around",marginTop:"10px"}}>
                      <textarea placeholder='write your message here' rows={8} style={{margin:"10px",width:"90%"}} name="message"></textarea></div>
                    <div style={{width:"fit-content",margin:"auto"}}>
                      <Button type='submit'
                     style={{backgroundColor:"#d6880c",color:"white",width:"fit-content",margin:"auto"}}>Contact us</Button></div>
                </form>
            </fieldset>
          </section>
          <section style={{width:"100%",height:"100%"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28472.68566242274!2d81.0200345676469!3d26.86901790705309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be266fe8bf89b%3A0xd7bc061535d2de5c!2sChinhat%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1682674105666!5m2!1sen!2sin" width="100%" height="100%"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
          </section>
      </div>
      </div>
    </>
  )
}

export default Contact;
