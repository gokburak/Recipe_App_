import NavbarStyles,  {Hamburger, Logo, Menu, MenuLink, Nav}  from "./NavbarStyles";
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import { useState } from "react";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav> 
      <Logo to="/">
      <i>{"<Clarusway/>"}</i>
      <span>Recipe</span>
    </Logo>

    <Hamburger onClick={()=>setIsOpen(!isOpen)}>
    <GiHamburgerMenu/>
    </Hamburger>
    <Menu isOpen={isOpen} onClick={()=>setIsOpen(false)}>
    <MenuLink to="/">Home</MenuLink>  
    <MenuLink to="about">About</MenuLink>
    <MenuLink to="register">Register</MenuLink>
    <MenuLink to="login" onClick={()=> sessionStorage.clear()}>Logout</MenuLink>
    </Menu>


    </Nav>
  )
}

export default Navbar
