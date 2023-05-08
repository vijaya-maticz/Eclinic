import React,{useState , Fragment} from 'react';
import {Link} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

import user from "../../Assets/Images/user.png"

const Adminforgot = () =>{
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
                                <h4 className='my-3'>Forgot Password</h4>
                                <p className='fotn_log_reg_sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                         </div>
                         </div>
                         <div className='row mt-4'>
                            <div className='col-12'>
                            <div class="form-floating mb-4">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Password</label>
                            </div>
                        
                          </div>
                          <div className='col-12'>
                          <div class="form-floating mb-4">
                                <input type="password" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">New Password</label>
                            </div>
                          </div>
                          </div>
                         
                         <div className='row'>
                            <div className="col-12">
                          <div class="form-floating mb-4">
                                <input type="password" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Verify New Password</label>
                            </div>
                           
                            </div>
                            
                        <div className=' col-md-12'>
                            <div className='twosteps_verf flex5-5 gap-2'>
                                <h6 className='dangerbg mb-3'>Two-Factor Authentication not enabled</h6>
                                <div className='w-full btn_sec gap-2 jc-end mb-4'>
                                    <Link to="/admin/dashboard" className='w-full themebtn btnpad_chag_purple'>Enable 2FA</Link>
                                    <Link to="/admin/login" className='w-full themebtn-bordered btnpad_chag_purple' >Change Password</Link>
                                </div>  
                            </div>
                            
                            
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

export default Adminforgot