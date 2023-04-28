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
                                <p className='fotn_log_reg_sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                         </div>
                  
                         
                         <div className='row mt-5'>
                         <div className='col-md-9'>
                          <div class="form-floating mb-3">
                                <input type="password" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Password</label>
                            </div>
                            <button className='btn btn-link themeclr fw-700 ps-0' onClick={props.forgetpass}>Forget password</button>
                          </div>
                            
                        <div className=' col-md-3'>
                            <div className='d-flex jc-end gap-2'>
                              
                                <div>
                                    <button className=' themebtn' onClick={props.onDismiss}>Change Password</button>
                                    </div>
                                    <div>
                                    <button className='themebtn-bordered' onClick={props.onDismiss}>Cancel</button>
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