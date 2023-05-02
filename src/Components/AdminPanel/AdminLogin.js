import React, { useState } from 'react';
import logo from "../../Assets/Images/logo.png"

const AdminLogin = () =>{
    return(
        <div className='adminlogin'>
           <div className='container h-100vh'>
                     <div className='row jc-center align-items-center h-100'> 
                       <div className='col-md-4'>
                        <img src={logo}/>
                            <div className=''>
                                <input type="text" className='form-control borderinput mb-3' placeholder='Enter Email'/>
                            </div>
                            <div className=''>
                                <input type="text" className='form-control borderinput mb-3' placeholder='Enter Name'/>
                            </div>
                     
                    
                           <div className='mt-3 mb-2'>
                               <button className='purplebtn me-3 w-full ' >Login</button>
                            </div>
                      
                       
                        </div>
                        </div>
                     </div>
        </div>
    )
}

export default AdminLogin