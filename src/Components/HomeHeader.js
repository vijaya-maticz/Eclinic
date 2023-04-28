import React,{useState} from 'react';
import {Navbar,NavDropdown,Container,Nav,Dropdown} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'
import logo from '../Assets/Images/logo.png'
import user from "../Assets/Images/user.png"
import prof from "../Assets/Images/user.png"
import cartimg from "../Assets/Images/eclinic-img/cart.png"
import Cart from './Offcanvas/CartOff';

import ceti from '../Assets/Images/ceti.png'
import treat from '../Assets/Images/treat.png'
import dash from '../Assets/Images/dash.png'
import myacc from '../Assets/Images/myacc.png'
import trans from '../Assets/Images/trans.png'


import home_icon from '../Assets/Images/home_icon.png'
import about_icon from '../Assets/Images/about_icon.png'
import contact_icon from '../Assets/Images/contact_icon.png'



const HomeHeader = () => {  

  const[cart, setCart] = useState(false)

    return(
        <div id="homeheader">
          {cart && <Cart onDismiss={() => setCart(false)} />}
            <Navbar expand="lg">
      <Container>
        <NavLink to="/"><Navbar.Brand><img src={logo} className="logo"/> </Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='custom_pad_nav sidebar_mob_home'>
          <Nav className='mx-auto'>
            <div className='web_menu_so_hme'>
            <NavLink className='nav-link link_mr' to="/">Home</NavLink>     
            <NavLink className='nav-link link_mr' to=" ">About eClinic</NavLink>
            <NavLink className='nav-link link_mr link_cont_no_after' to=" ">Contacts</NavLink>     
            </div>
          <div className='mobileadmin menus'>
        

          <NavLink activeClassName="active" to="/"  className="nounder">
                <img src={home_icon} className="active" />
                Home</NavLink>

                <NavLink activeClassName="active" to=" "  className="nounder">
                <img src={about_icon} className="active" />
                About eClinic</NavLink>

                <NavLink activeClassName="active" to=" "  className="nounder">
                <img src={contact_icon} className="active" />
                Contacts</NavLink>


                <NavLink activeClassName="active" to="/treatments"  className="nounder d-none-inner-menu">
                <img src={treat} className="active" />
                Treatments</NavLink>


                <NavLink activeClassName="active" to="/certificate"  className="nounder d-none-inner-menu">
                <img src={ceti} className="active" />
                Certificate</NavLink>

                <NavLink activeClassName="active" to="/dashboard"  className="nounder d-none-inner-menu">
                <img src={dash} className="active" />
                Dashboard</NavLink>


                
                <NavLink activeClassName="active" to="/myaccount"  className="nounder d-none-inner-menu">
                <img src={myacc} className="active" />
                My Account</NavLink>
                
          
                <NavLink activeClassName="active" to="/records"  className="nounder d-none-inner-menu">
                <img src={treat} className="active" />
                Records</NavLink>

                
                <NavLink activeClassName="active" to="/transaction"  className="nounder d-none-inner-menu">
                <img src={trans} className="active" />
                Transaction</NavLink>


          </div>
          </Nav>
          

          <Nav className='align-items-center menu_mobilalign'>
            <div className='cartmenu me-3'> 
              <button className='btn btn-link p-0' onClick={() => setCart(!cart)}>
                <img src={cartimg} />
                </button>
                <span>1</span>
            </div> 
            <Dropdown className="admin-prof me-3">
              <Dropdown.Toggle variant="link" id="dropdown-basic" className='p-0'>
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