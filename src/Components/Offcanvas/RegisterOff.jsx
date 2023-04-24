import React, { useContext, useState } from 'react';
import {Offcanvas } from 'react-bootstrap'
import user from "../../Assets/Images/user.png"

const RegisterOff = (props) =>{
    const[register, setRegister] = useState(true)
    return(
        <div className=''>
             <Offcanvas show={register} placement="bottom"> 
               
                <Offcanvas.Body className='requestlogin'>
                <div className='text-right '>
                    <button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container'>
                        <div className='d-flex align-items-center'>
                            <img src={user} className='me-2'/> 
                            <div> 
                                <h4>Register</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                         </div>
                         <div className='row mt-4'>
                            <div className='col-md-6'>
                                <input type="text" className='form-control borderinput' placeholder='Enter Email'/>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='form-control borderinput' placeholder='Enter Name'/>
                            </div>
                         </div>
                         <div className='row mt-4'>
                            <div className='col-md-6'>
                              <div className='dateinput'> <input type="date" className='form-control borderinput' placeholder='Date of Birth'/></div> 
                            </div>
                            <div className='col-md-6'>
                                <select className='form-control borderinput'>
                                    <option>Gender</option>
                                </select>
                            </div>
                            
                         </div>
                         <div className='row mt-4'>
                         <div className='col-md-6'>
                                <input type="password" className='form-control borderinput' placeholder='Enter Password'/>
                            </div>
                            <div className='col-md-6'>
                                <input type="password" className='form-control borderinput' placeholder='Retype Password'/>
                            </div>
                         </div>
                    
                        <div className='text-end mt-4'>
                            <div className='d-flex jc-between'>
                                <button className='purplebtn me-3'>Already have an Account</button>
                                <button className='themebtn-bordered' onClick={props.onDismiss}>Signup</button>
                            </div>
                        </div>
                      
                       
                        </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default RegisterOff