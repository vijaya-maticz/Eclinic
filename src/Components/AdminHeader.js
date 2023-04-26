import React,{useState} from 'react';
import {Navbar,NavDropdown,Container,Nav,Dropdown} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'
import logo from '../Assets/Images/logo.png'
import user from "../Assets/Images/user.png"
import prof from "../Assets/Images/user.png"
import Cart from './Offcanvas/CartOff';

import ceti from '../Assets/Images/ceti.png'
import treat from '../Assets/Images/treat.png'
import dash from '../Assets/Images/dash.png'
import myacc from '../Assets/Images/myacc.png'
import trans from '../Assets/Images/trans.png'

const AdminHeader = () => {  

  const[cart, setCart] = useState(false)

    return(
        <div id="homeheader">
          {cart && <Cart onDismiss={() => setCart(false)} />}
            <Navbar expand="lg">
      <Container>
        <NavLink to="/"><Navbar.Brand><img src={logo} className="logo"/> </Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
        
          

          <Nav className='align-items-center menu_mobilalign ms-auto sidebar'>
            
            <Dropdown className="admin-prof me-3">
              <Dropdown.Toggle variant="link" id="dropdown-basic" className='p-0'>
                      <img src={prof} className=""/> <span className='fa fa-chevron-down text-dark f-14'></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className='mobileadmin menus'>
                <NavLink activeClassName="active" to="/admin/dashboard"  className="nounder">
                <img src={treat} className="active" />
                Dashboard</NavLink>
                <NavLink activeClassName="active" to="/admin/users"  className="nounder">
                <img src={ceti} className="active"/>
               User</NavLink>
               <NavLink activeClassName="active" to="/admin/doctor"  className="nounder">
                <img src={dash} className="active"/>
               Doctor</NavLink>
               <NavLink activeClassName="active" to="/admin/records"  className="nounder">
                <img src={treat} className="active"/>
               Records</NavLink>
               <NavLink activeClassName="active" to="/admin/transaction"  className="nounder">
                <img src={trans} className="active"/>
               Transaction</NavLink>
               <NavLink activeClassName="active" to="/admin/setting"  className="nounder">
                <img src={myacc} className="active"/>
              Settings</NavLink>
              <NavLink activeClassName="active" to="/admin/cms"  className="nounder">
                <img src={myacc} className="active"/>
               CMS</NavLink>
               </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
    )
}

export default AdminHeader 