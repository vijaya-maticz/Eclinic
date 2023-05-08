import React,{useState , Fragment} from 'react';
import {Link} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

import user from "../../Assets/Images/user.png"

const Adminlogin = () =>{
    return(
      <>
      <div className='adminpanel'>
        <div className='loginpage bg'>
          <div className='container'>
            <div className='row login_row'>
              <div className='card card_dise'>
                <div className='input_row'>
                <div className='row first_row mt-2'>
              <div className='align-items-center'>
                            <img src={user} /> 
                            <div> 
                                <h4 className='my-3'>Login</h4>
                                <p className='fotn_log_reg_sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                         </div>
                         </div>
              <div className='row mt-4'>
                            <div className='col-12'>
                                <input type="text" className='form-control borderinput mb-3' placeholder='Enter Email'/>
                            </div>
                            <div className='col-12'>
                                <input type="password" className='form-control borderinput mb-3' placeholder='Enter Password'/>
                            </div>
                         </div>
                         <p className='signup_text'>Create a new account<Link className="signup_link mx-2"to="/admin/register">Signup</Link></p>
                    <div className='row mt-4'>
                            <div className='btn_sec'>
                              
                                <Link to="/admin/forgot" className='purplebtn me-3' >Forgot Password </Link>
                                <Link to="/admin/dashboard" className='themebtn-bordered' >Login</Link>
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

export default Adminlogin