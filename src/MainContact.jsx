import React from 'react'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const MainContact = () => {
  return (
    <div>
        <div style={{backgroundColor:"rgba(0,0,0,1)",width:"100%",height:"50px",display:"flex",alignItems:"center"}}><h2 style={{width:"fit-content",margin:"auto",color:"grey"}}>contact us</h2></div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default MainContact
