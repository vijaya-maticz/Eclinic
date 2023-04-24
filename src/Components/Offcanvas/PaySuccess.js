import React, { useContext, useState } from 'react';
import {Offcanvas,InputGroup,Form,Table } from 'react-bootstrap'
import user from "../../Assets/Images/user.png"


const PaySuccess = (props) =>{
   
    const[paysuccess, setPaysuccess] = useState(true)
   
    return(
        <div className=''>
           
             <Offcanvas show={paysuccess} placement="bottom">
               
             <Offcanvas.Body className='requestlogin paywith'>
                <div className='text-right '>
                    <button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container'>
                       
                        <div className='text-center'>
                            <img src={user} className='me-2 mb-2'/> 
                            <div> 
                                <h4>success Certificate</h4>
                            </div>
                            <p className='my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          
                           <button className='themebtn btn backbtn' onClick={props.onDismiss}><span className='fa fa-angle-left'></span></button>
                          
                         </div>
                       
                        </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default PaySuccess