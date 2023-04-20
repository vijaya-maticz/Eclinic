import React,{ useState }  from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../Assets/Images/logo.png'
import { NavLink } from 'react-router-dom';

import dash from '../../Assets/Images/Admin/dashboard.svg'
import setting from '../../Assets/Images/Admin/setting.png'
import contact from '../../Assets/Images/Admin/contact.png'
import activesetting from '../../Assets/Images/Admin/activesetting.png'
import activecontact from '../../Assets/Images/Admin/activecontact.png'





const Sidebar = () =>{
    const toggleDrop = (e) =>{
        e.target.nextElementSibling.classList.toggle("d-none")
    }
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
        <div className="sidebar">
            {/* <div className='text-center py-4'>
            <button className='togglebtn' onClick={() => sidetoggle()} ><img src={hamburgur} className="ham"/></button>
                <img src={logo} className="adminlogo"/>
                </div> */}
        
            
          
          <div className='sidelist'>
          <div className='menus '>
               <NavLink activeClassName="active" to="/admin/dashboard"  className="nounder">
                <img src={setting} className="active" />
                <img src={activesetting} className="inactive"/>
                Settings</NavLink>
                
            </div>
     
            <div className='menus active'>
               <NavLink to="/admin/tableview"  className="nounder">
                <img src={contact} className="active"/>
                <img src={activecontact} className="inactive"/>
                View Contact</NavLink>
                
            </div>
         
          </div>
           




            <ul className='sidelist d-none'>
                <li>
                   <a>
                    <span>Dashboard</span></a>
                      
                        
                 <ul className='ps-0'>
                    <li>
                    <NavLink to="/admin/dashboard"  className="nounder">
                    <span>Dashboard</span></NavLink>
                    </li>
                 </ul>
                </li>
                <li  onClick={(e) => toggleDrop(e)}>
                  <a>  <img src={dash}/> 
                    <span>ta ble</span></a>
                
                <ul className='ps-0'>
                    <li>
                    <NavLink to="/admin/dashboard"  className="nounder">
                    <span>Dashboard</span></NavLink>
                    </li>
                 </ul>
                </li>
                <li><NavLink to="/admin/formview" className="nounder" ><img src={dash}/> <span>form</span></NavLink></li>
            </ul>
        </div>
    )
}

export default Sidebar