import React, { useContext, useState } from 'react';
import {Offcanvas } from 'react-bootstrap'
import user from "../../Assets/Images/user.png"


const MCertificate = (props) =>{
   
    const[certificate, setCertificate] = useState(true)
   
    return(
        <div className=''>
           
             <Offcanvas show={certificate} placement="bottom">
               
                <Offcanvas.Body className='requestlogin'>
                <div className='text-right '>
                    <button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container'>
                         
                    
                      <div className=''>
                         <div className='d-flex align-items-center'>
                            <img src={user} className='me-2'/> 
                            <h4>Medical Certificate</h4>
                         </div>
                         <div className='treat-det mt-3'>
                         <h6>Sign Up for a eClinic.ie account</h6>
                        <p> In order to benefit from the treatment, you also need to stick to a healthy low calorie diet. seek advice from us on slimming pills online - eClinic.ie offers consultations for the weight loss treatments Xenical and Orlistat.
                          (Xenical is the branded version of Orlistat and both work in the same way).</p>
                        <h6>How we use personal data: </h6>
                        <p>The weight loss treatments Orlistat and Xenical prevent your body digesting all of the fat you eat. 
                                They thereby reduce the amount of calories you take in from your food.</p>
                            
                        </div>
                        <div className='text-end mt-3'>
                                <button className='themebtn-light me-3' onClick={props.paynow}>Pay Now</button>
                        </div>
                         <div>
                         
                         </div>
                      </div>
                       
                        </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default MCertificate