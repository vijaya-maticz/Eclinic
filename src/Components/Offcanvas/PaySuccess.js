import React, { useContext, useState } from 'react';
import {Offcanvas,InputGroup,Form,Table } from 'react-bootstrap'
import card from "../../Assets/Images/eclinic-img/card.png"
import arrowleft from "../../Assets/Images/eclinic-img/arrow-left.png"


const PaySuccess = (props) =>{
   
    const[paysuccess, setPaysuccess] = useState(true)
   
    return(
        <div className=''>
           
             <Offcanvas show={paysuccess} placement="bottom">
               
             <Offcanvas.Body className='requestlogin success'>
                <div className='text-right '>
                    <button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container'>
                       
                        <div className='text-center'>
                            <img src={card} className='me-2 mb-2'/> 
                            <div> 
                                <h4>Success Certificate</h4>
                            </div>
                            <p className='my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          
                           <img onClick={props.onDismiss} className='arrowleft' src={arrowleft} />
                          
                         </div>
                       
                        </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default PaySuccess