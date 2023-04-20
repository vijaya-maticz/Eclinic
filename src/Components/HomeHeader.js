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
            <Link className='nav-link link_mr' to="/dashboard">About eClinic</Link>
            <Link className='nav-link link_mr link_cont_no_after' to="/dashboard">Contacts</Link>          
          

          
          </Nav>

          <Nav>
          
            <Link to="/dashboard" className='btn btn-grey me-3'>Login</Link>
            <Link to="/dashboard" className='btn btn-purple'>Get Started</Link>

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
    )
}

export default HomeHeader 