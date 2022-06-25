import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { Ul, Nav, Text } from './LayoutStyles';



const Layout = () => {

  return (
    <>
   
    <Nav>
    <Ul>
      <li><NavLink to="home" style={Text}>Home</NavLink></li>
      <li><NavLink to="about" style={Text}>About</NavLink></li>
      <li><NavLink to="info" style={Text}>Info</NavLink></li>
      <li><NavLink to="contact" style={Text}>Contact</NavLink></li>
     
      
        
    </Ul>
</Nav>
<Outlet/>


        
    </>
  )
}

export default Layout