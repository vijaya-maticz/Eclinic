
import React,{useState} from 'react';
import {Dropdown,Button} from 'react-bootstrap'
import logo from '../../Assets/Images/logo.png'
import prof from '../../Assets/Images/prof1.jpg'
import bar from '../../Assets/Images/menu.png'

const AdminHeader = () =>{
    const sidetoggle = () =>{
        if(document.getElementById("dashboard").classList.contains("showsidebar")){
            document.getElementById("dashboard").classList.remove("showsidebar")
            document.getElementById("dashboard").classList.add("hidesidebar")
        }
        else if(document.getElementById("dashboard").classList.contains("hidesidebar")){
            document.getElementById("dashboard").classList.remove("hidesidebar")
            document.getElementById("dashboard").classList.add("showsidebar")

        }
    }
    return(
        <>
            <div className='d-flex jc-between w-full'>
               <div className='d-flex align-items-center'>
               <div> <Button onClick={() => sidetoggle()}  variant="link" className='me-2 text-dark mobiletog ps-0'>
               <img src={bar}  className="menuopen"/>
                </Button></div>
                <img src={logo} className="adminlogo"/> </div>  <Dropdown className="admin-prof">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                     Hi, John   <img src={prof} className="ms-3"/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    )
}

export default AdminHeader