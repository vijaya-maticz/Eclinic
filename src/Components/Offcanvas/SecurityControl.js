import React, { useContext, useState } from 'react';
import {Offcanvas } from 'react-bootstrap'
import user from "../../Assets/Images/user.png"

const SecurityControl = (props) =>{
    const[security, setSecurity] = useState(true)
    return(
        <div className=''>
             <Offcanvas show={security} placement="bottom" className="small"> 
               
                <Offcanvas.Body className='requestlogin '>
                <div className='text-right '>
                    <button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container'>
                        <div className='d-flex align-items-center'>
                            <img src={user} className='me-2'/> 
                            <div> 
                                <h4>Security Control</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                         </div>
                         <div className='row mt-4'>
                            <div className='col-md-6'>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Password</label>
                            </div>
                        
                          </div>
                          <div className='col-md-6'>
                          <div class="form-floating mb-3">
                                <input type="password" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">New Password</label>
                            </div>
                          </div>
                          </div>
                         
                         <div className='row'>
                            <div className="col-md-6">
                          <div class="form-floating mb-3">
                                <input type="password" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Verify New Password</label>
                            </div>
                           
                            </div>
                            
                        <div className=' col-md-6'>
                            <div className='d-flex jc-between flex5-5 gap-2'>
                                <h6 className='dangerbg'>Two-Factor Authentication not enabled</h6>
                                <div className='w-full d-flex d-block gap-2 jc-end '>
                                    <button className='w-full themebtn' onClick={props.onDismiss}>Enable 2FA</button>
                                    <button className='w-full themebtn-bordered' onClick={props.onDismiss}>Change Password</button>
                                </div>  
                            </div>
                            
                            
                        </div>
                         </div>
                       
                    
                      
                       
                        </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default SecurityControl