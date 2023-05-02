import React,{ useState }  from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../Assets/Images/logo.png'
import { NavLink, Link } from 'react-router-dom';
import bar from '../../Assets/Images/menu.png'

import ceti from '../../Assets/Images/ceti.png'
import treat from '../../Assets/Images/treat.png'
import dash from '../../Assets/Images/dash.png'
import myacc from '../../Assets/Images/myacc.png'
import trans from '../../Assets/Images/trans.png'

import copy from '../../Assets/Images/icon_copy.png'
import settings from '../../Assets/Images/icon_settings.png'



import img_ad from '../../Assets/Images/img_ad.png'

// import contact from '../../Assets/Images/Admin/contact.png'
// import activesetting from '../../Assets/Images/Admin/activesetting.png'
// import activecontact from '../../Assets/Images/Admin/activecontact.png'





const AdminSidebar = () =>{
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
        <div className="sidebar adminside">
            {/* <div className='text-center py-4'>
            <button className='togglebtn' onClick={() => sidetoggle()} ><img src={hamburgur} className="ham"/></button>
                <img src={logo} className="adminlogo"/>
                </div> */}
        
        <div className='d-flex align-items-center logo_sec_sidebar'>
               <img src={logo} className="adminlogo"/> 

               <div> 
                <Button onClick={() => sidetoggle()}  variant="link" className='text-dark mobiletog ps-0 pe-0'>
               {/* <img src={bar}  className="menuopen"/> */}
               <i className="fa fa-bars menuopen" aria-hidden="true"></i>

                </Button>
                </div>
                </div> 
          
          <div className='sidelist'>
          <div className='menus'>
               <NavLink activeClassName="active" to="/admin/dashboard"  className="nounder">
                <img src={dash} className="active" />
                Dashboard</NavLink>
                
            </div>
     
            <div className='menus'>
               <NavLink activeClassName="active" to="/admin/users"  className="nounder">
                <img src={myacc} className="active"/>
               Users</NavLink>
                
            </div>

            <div className='menus'>
               <NavLink activeClassName="active" to="/admin/doctor"  className="nounder">
                <img src={treat} className="active"/>
               Doctors</NavLink>
                
            </div>
            <div className='menus'>
               <NavLink activeClassName="active" to="/admin/records"  className="nounder">
                <img src={ceti} className="active"/>
               Records</NavLink>
                
            </div>

            <div className='menus'>
               <NavLink activeClassName="active" to="/admin/transaction"  className="nounder">
                <img src={trans} className="active"/>
               Transaction</NavLink>
                
            </div>
            <div className='menus'>
               <NavLink activeClassName="active" to="/admin/setting"  className="nounder">
                <img src={settings} className="active"/>
              Settings</NavLink>
            </div>
            <div className='menus'>
               <NavLink activeClassName="active" to="/admin/cms"  className="nounder">
                <img src={copy} className="active"/>
               CMS</NavLink>
                
            </div>
         
          </div>
           

           <div className='sidebar_ad_div'>
            <div className="card card_ad">
                <div className='card-body'>
                    <div className='d-flex'>
                        <img src={img_ad} className='img-fluid img_ad_over' />
                        <div className='div_margin_ad'>
                            <p className='title_ad_over'>Lorem Ips umissim</p>
                            <p className='desc_ad_over'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Link to="/" class="btn btn-yellow-fill">New</Link>

                        </div>
                    </div>
                </div>
            </div>
           </div>
            
        </div>
    )
}

export default AdminSidebar