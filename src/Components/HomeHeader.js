import React,{useState} from 'react';
import {Navbar,NavDropdown,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
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
            <Link className='nav-link link_mr' to="/">Home</Link>     
            <Link className='nav-link link_mr' to="/treatments">About eClinic</Link>
            <Link className='nav-link link_mr link_cont_no_after' to="/treatments">Contacts</Link>          
          
            <Link className='nav-link link_mr d-none-inner-menu' to="/treatments">Treatments</Link>
            <Link className='nav-link link_mr link_cont_no_after d-none-inner-menu' to="/treatments">Certificate</Link>          
          
          </Nav>

          <Nav>
          
            <Link to="/treatments" className='btn btn-grey me-3'>Login</Link>
            <Link to="/treatments" className='btn btn-purple'>Get Started</Link>

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
    )
}

export default HomeHeader 