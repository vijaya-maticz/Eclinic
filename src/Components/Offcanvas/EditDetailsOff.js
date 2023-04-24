import React, { useContext, useState } from 'react';
import {Offcanvas } from 'react-bootstrap'
import user from "../../Assets/Images/user.png"

const Editdetails = (props) =>{
    const[edit, setEdit] = useState(true)
    return(
        <div className=''>
             <Offcanvas show={edit} placement="bottom"> 
               
                <Offcanvas.Body className='requestlogin'>
                <div className='text-right '>
                    <button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container'>
                        <div className='d-flex align-items-center'>
                            <img src={user} className='me-2'/> 
                            <div> 
                                <h4>Details</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                         </div>
                         <div className='row mt-4'>
                            <div className='col-md-6'>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email</label>
                            </div>
                           
                             
                           
                          </div>
                          <div className='col-md-6'>
                          <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Name</label>
                            </div>
                          </div>
                          </div>
                          <div className='row'>

                          <div className='col-md-6'>
                          <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Company</label>
                            </div>
                           
                           
                          </div>
                          <div className='col-md-6'>
                             <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Street</label>
                            </div>
                          </div>
                          </div>
                          <div className='row'>
                          <div className='col-md-6'>
                          <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Phone</label>
                            </div>
                            </div>
                          
                          <div className='col-md-6'>
                          <div className='d-flex flex-1 gap-2'>
                          <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">State</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Country</label>
                            </div>
                          </div>
                          
                           
                          </div>
                               
                         </div>
                         <div className='row'>
                            <div className="col-md-6">
                            <div className='d-flex flex-1 gap-2'>
                          <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">State</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Country</label>
                            </div>
                          </div>
                            </div>
                            
                        <div className='text-end col-md-6'>
                                <button className='themebtn-bordered' onClick={props.onDismiss}>Confirm</button>
                            
                        </div>
                         </div>
                       
                    
                      
                       
                        </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Editdetails