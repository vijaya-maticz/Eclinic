import React,{useState , Fragment} from 'react';
import {Link} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

import user from "../../Assets/Images/user.png"

const Adminregister = () =>{
    return(
      <>
      <div className='adminpanel'>
        <div className='loginpage bg forgotpage'>
          <div className='container'>
            <div className='row login_row'>
              <div className='card card_dise'>
                <div className='input_row'>
                <div className='row first_row mt-2'>
              <div className='align-items-center'>
                            <img src={user} /> 
                            <div> 
                                <h4 className='my-3'>Register</h4>
                                <p className='fotn_log_reg_sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                         </div>
                         </div>
                         <div className='row mt-3'>
                            <div className='col-md-6 mb-3'>
                                <input type="text" className='form-control borderinput mb-3' placeholder='Enter Email'/>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <input type="text" className='form-control borderinput mb-3' placeholder='Enter Name'/>
                            </div>
                         </div>
                         <div className='row'>
                            <div className='col-md-6 mb-3'>
                              <div className='dateinput'> <input type="date" className='form-control borderinput mb-3' placeholder='Date of Birth'  onfocus="(this.type='date')"/></div> 
                            </div>
                            <div className='col-md-6 mb-3'>
                                <select className='form-control borderinput mb-3'>
                                    <option>Gender</option>
                                    <option>Female</option>
                                    <option>Male</option>

                                </select>
                            </div>
                            
                         </div>
                         <div className='row'>
                         <div className='col-md-6 mb-3'>
                                <input type="password" className='form-control borderinput mb-3' placeholder='Enter Password'/>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <input type="password" className='form-control borderinput mb-3' placeholder='Retype Password'/>
                            </div>
                         </div>
                    
                        <div className='text-end mt-3 mb-2'>
                            <div className='btn_sec'>
                                <Link to="/admin/login" className='purplebtn me-3' >Already have an Account</Link>
                                <Link to="/admin/login" className='themebtn-bordered' >Signup</Link>
                            </div>
                        </div>
                       
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
        </>
    )
}

export default Adminregister