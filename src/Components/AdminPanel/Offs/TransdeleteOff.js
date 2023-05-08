import React, { useContext, useState } from 'react';
import {Offcanvas } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import user from "../../../Assets/Images/user.png"

const TransDeleteOff = (props) =>{
    const[edit, setEdit] = useState(true)
    const EditClose = () => setEdit(false);

    
    return(
        <div className=''>
             <Offcanvas show={edit} placement="bottom" onHide={EditClose} className="small delete_canva"> 
             <div className='text-right close_btn_sec'>
                    <button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                <Offcanvas.Body className='requestlogin'>
        
                        <div className='container'>
                        
                         <div className='row mt-4'>
                        <p className='delete_content'>Are you sure you want to delete this item?</p>
                           
                         </div>
                        
                    
                        <div className='text-end mt-4'>
                            <div className='d-flex jc-center'>
                                <button className='purplebtn me-3' onClick={props.onDismiss}>Delete</button>
                                <button className='themebtn-bordered' onClick={props.onDismiss}>Cancel</button>
                            </div>  
                        </div>
                       
                       
                        </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default TransDeleteOff