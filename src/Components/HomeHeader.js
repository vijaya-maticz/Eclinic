import React,{useState} from 'react';
import {Navbar,NavDropdown,Container,Nav,Dropdown} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'
import logo from '../Assets/Images/logo.png'
import user from "../Assets/Images/user.png"
import prof from "../Assets/Images/user.png"
import Cart from './Offcanvas/CartOff';



const HomeHeader = () => {  

  const[cart, setCart] = useState(false)

    return(
        <div id="homeheader">
          {cart && <Cart onDismiss={() => setCart(false)} />}
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
          

          <Nav className='align-items-center'>
          <div className='cart me-3'> 
             <button className='btn btn-link p-0' onClick={() => setCart(!cart)}>
               <img src={user} />
              </button>
              <span>1</span>
           </div> 
           <Dropdown className="admin-prof me-3">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='p-0'>
                      <img src={prof} className=""/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
           <div> <Link to="/" className='btn btn-grey me-3'>Login</Link></div>
           <div> <Link to="/" className='btn btn-purple'>Get Started</Link></div>

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
    )
}

export default HomeHeader 