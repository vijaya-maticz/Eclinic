import React, { useContext, useState } from 'react';
import {Offcanvas } from 'react-bootstrap'
import user from "../../Assets/Images/user.png"

const LoginOff = (props) =>{
    const[login, setLogin] = useState(true)
    const[forgot, setForgot] = useState(false)

    
    return(
        <div className=''>
             <Offcanvas show={login} placement="bottom" className="small"> 
               
                <Offcanvas.Body className='requestlogin'>
                <div className='text-right '>
                    <button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container'>
                        <div className='d-flex align-items-center'>
                            <img src={user} className='me-3'/> 
                            <div> 
                                <h4>Login</h4>
                                <p className='fotn_log_reg_sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                         </div>
                         <div className='row mt-4'>
                            <div className='col-md-6'>
                                <input type="text" className='form-control borderinput mb-3' placeholder='Enter Email'/>
                            </div>
                            <div className='col-md-6'>
                                <input type="password" className='form-control borderinput mb-3' placeholder='Enter Password'/>
                            </div>
                         </div>
                    
                        <div className='text-end mt-4'>
                            <div className='d-flex jc-between'>
                                <button className='purplebtn me-3' onClick={() => setForgot(!forgot)}>Forgot Password <span className={forgot ? "fa fa-angle-down f-16 ms-2" : "fa fa-angle-up f-16 ms-2"}>  </span></button>
                                <button className='themebtn-bordered' onClick={props.onDismiss}>Login</button>
                            </div>
                        </div>
                        <div className={forgot ? 'row mt-4' : 'row mt-4 d-none'}>
                            <div className='col-md-6'>
                                <input type="password" className='form-control borderinput' placeholder='Enter Password'/>
                            </div>
                         </div>
                       
                        </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default LoginOff