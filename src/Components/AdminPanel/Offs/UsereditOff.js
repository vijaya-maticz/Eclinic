import React, { useContext, useState } from 'react';
import {Offcanvas } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import user from "../../../Assets/Images/user.png"

const CmseditOff = (props) =>{
    const[edit, setEdit] = useState(true)
    const EditClose = () => setEdit(false);

    
    return(
        <div className=''>
             <Offcanvas show={edit} placement="bottom" onHide={EditClose} className="small"> 
               
                <Offcanvas.Body className='requestlogin'>
                <div className='text-right '>
                    <button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container'>
                            <div className='row'>
                                <p className='serial_num_off'>No. <span>001</span></p>
                            </div>
                        
                         <div className='row mt-4'>
                         <div className='col-md-6 mb-3'>
                                <input type="text" className='form-control borderinput mb-3' placeholder='Username'/>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <input type="email" className='form-control borderinput mb-3' placeholder='Email id'/>
                            </div>
                         </div>
                         <div className='row'>
                      
                            <div className='col-md-6 mb-3'>
                                <input type="number" className='form-control borderinput mb-3' placeholder='Phone number'/>
                            </div>
                            <div className='col-md-6 mb-3'>
                             <Form.Select className='select_style' aria-label="Default select example">
      <option>Status</option>
      <option value="1">Active</option>
      <option value="2">Inactive</option>
    </Form.Select>
                            </div>
                         </div>
                    
                        <div className='text-end mt-4'>
                            <div className='d-flex jc-end'>
                                <button className='purplebtn me-3' onClick={props.onDismiss}>Save Changes </button>
                                <button className='themebtn-bordered' onClick={props.onDismiss}>Cancel</button>
                            </div>  
                        </div>
                       
                       
                        </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default CmseditOff