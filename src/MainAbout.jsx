import React from 'react'
import About from './About/About'
import Footer from './Footer/Footer'
const MainAbout = () => {
  return (
    <div>
        <div style={{backgroundColor:"rgba(0,0,0,1)",width:"100%",height:"50px",display:"flex",alignItems:"center"}}><h2 style={{width:"fit-content",margin:"auto",color:"grey"}}>About us</h2></div>
      <About/>
      <Footer/>
    </div>
  )
}

export default MainAbout;
