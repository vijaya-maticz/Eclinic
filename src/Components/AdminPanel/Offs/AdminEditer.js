import React, { useContext, useState } from 'react';
import {Offcanvas,InputGroup,Form,Table } from 'react-bootstrap'
import user from "../../../Assets/Images/user.png"
import copy from "../../../Assets/Images/eclinic-img/copy.png"
import dummyimg from '../../../Assets/Images/eclinic-img/purpledummy.png'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AdminEditer = (props) =>{
   
    const[editer, setEditer] = useState(true)
    const EditClose = () => setEditer(false);
    return(
        <div className=''>
           
             <Offcanvas show={editer} placement="bottom" onHide={EditClose}>
               
             <Offcanvas.Body className='requestlogin paywith editer'>
                <div className='text-right '>
                    <button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container'>
                       
                        <div className='d-flex align-items-center'>
                            <img src={user} className='me-2'/> 
                            <div> 
                                <h4 className='mb-0'>Update</h4>
                                <p>lorem ipsum is a dummy content</p>
                            </div>
                         </div>
                         <div className='row mt-4'>
                            <div className='col-lg-7  mb-3 mb-lg-0'>
                                <div className=' h-100 py-4'>
                                    <InputGroup className="mb-3 borderinput">
                                        <Form.Control aria-label="Amount (to the nearest dollar)" placeholder='Identifier'/>
                                        
                                    </InputGroup>
                                    
                                    <InputGroup className="mb-3 borderinput">
                                        <Form.Control aria-label="Amount (to the nearest dollar)" placeholder='Page name'/>
                                        
                                    </InputGroup>
                                    <div className='borderedinputbox mb-4'>
                                        <div className='d-flex jc-between align-items-center flex-column flex-md-row gap-2 text-center text-md-start'>
                                          <div className='d-flex align-items-center flex-column flex-md-row gap-2 text-center text-md-start'>
                                            <div className='browseimg'>
                                                 <img className='img' src={dummyimg} />
                                              </div> 
                                              <div className='my-md-0 my-3'>
                                                  <h5>Upload Logo</h5>
                                                  <p className='filename'>Logo.png</p>
                                              </div>
                                          </div>
                                        <div className='browseinput'> 
                                          <button className='btn themebtn '> Upload Image</button>  
                                          <input type="file" className='file'/>
                                          </div>
                                        </div>
                                    </div>

                               
                                </div>
                            </div>
                            <div className='col-lg-5'>
                            <div className='borderbox h-100 py-4'>
                         
                            <ReactQuill  
                         theme="snow"
                         type="text" 
                         ></ReactQuill>
                        
                                
                            </div>
                            </div>
                         </div>
                         <div className='row'>
                         <div className='d-flex jc-between mt-4'>
                                        <button className='themebtn btn'>Submit</button>
                                    </div>
                         </div>
                        </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default AdminEditer