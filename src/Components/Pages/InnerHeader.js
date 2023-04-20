import React, { useState } from 'react';
import logo from "../../Assets/Images/logo.png"
import {NavDropdown} from 'react-bootstrap'

const InnerHeader = () =>{
    return(
    <div className='header'>
        <div className='d-flex jc-between'>
            <img src={logo} className="headlogo"/>
            <div>   
                <NavDropdown title="Connect App" id="basic-nav-dropdown" className='themedrop btn btn-bord nav-link'>
              <NavDropdown.Item href="#action/3.1">Asset Details</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Deposit
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Exchange</NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.4">
                Transfer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Exchange
              </NavDropdown.Item>
            </NavDropdown>
            </div>
        </div>
    </div>
    )
}

export default InnerHeader