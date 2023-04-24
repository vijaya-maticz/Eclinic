import React,{useState} from 'react';
import {Navbar,NavDropdown,Container,Nav} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'
import logo from '../Assets/Images/logo.png'



const HomeHeader = () => {  



    return(
        <div id="homeheader">
            <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} className="logo"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className='mx-auto'>
            <NavLink className='nav-link link_mr' to="/">Home</NavLink>     
            <NavLink className='nav-link link_mr' to="/treatments">About eClinic</NavLink>
            <NavLink className='nav-link link_mr link_cont_no_after' to="/">Contacts</NavLink>          
          
            <NavLink className='nav-link link_mr d-none-inner-menu' to="/">Treatments</NavLink>
            <NavLink className='nav-link link_mr link_cont_no_after d-none-inner-menu' to="/">Certificate</NavLink>  

              <NavLink className='nav-link link_mr d-none-inner-menu' to="/dashboard">Dashboard</NavLink>
            <NavLink className='nav-link link_mr link_cont_no_after d-none-inner-menu' to="/myaccount">My Account</NavLink>          

              <NavLink className='nav-link link_mr d-none-inner-menu' to="/records">Records</NavLink>
            <NavLink className='nav-link link_mr link_cont_no_after d-none-inner-menu' to="/transaction">Transaction</NavLink>                  
          
          </Nav>

          <Nav>
          
            <Link to="/" className='btn btn-grey me-3'>Login</Link>
            <Link to="/" className='btn btn-purple'>Get Started</Link>

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
    )
}

export default HomeHeader 