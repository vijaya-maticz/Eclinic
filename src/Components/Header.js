import React, { useState } from 'react';
import {InputGroup,Form,OverlayTrigger,Button,Popover} from 'react-bootstrap'

import logo from '../Assets/Images/logo.png'
import burger from '../Assets/Images/burger.png'
import prof from '../Assets/Images/prof.png'
import coin1 from '../Assets/Images/coin3.png'

const Header = (props) =>{
    const[sidebar, setSidebar] = useState(true)
    const headfunc = () =>{
        setSidebar(!sidebar)
        props.newfunc(sidebar)
    }
    return(
        <div id="header">
            <div className= {sidebar ? 'd-flex jc-between align-items-center hamexp' : 'd-flex jc-between align-items-center hamcomp'}>
                <div className='d-flex align-items-center'>

                    <button onClick={() => headfunc()} className="hamburger">
                        <img src={burger} />
                    </button>

                    <img src={logo} className="logo d-none-767"/>
                    <img src={coin1} className="mobilelogo d-block-767"/>

                    <InputGroup className="ms-5 search">   
                        <Form.Control
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1" />
                    <InputGroup.Text id="basic-addon1"><span className='fa fa-search'></span></InputGroup.Text>
                </InputGroup>
                </div>
                <div className='pe-4'>
                    <span>Hi, Jonson </span>
      <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover id="popover-positioned-bottom">
              <Popover.Body>
                <Button variant='link' className='nounder text-dark'>Logout</Button>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary" className='transbtn profimg'><img src={prof} /></Button>
        </OverlayTrigger>
                </div>
            </div>
        </div>
    )
}

export default Header