import React, { useContext, useState } from 'react';
import {Offcanvas,InputGroup,Form,Table } from 'react-bootstrap'
import user from "../../Assets/Images/user.png"
import copy from "../../Assets/Images/eclinic-img/copy.png"


const Paywith = (props) =>{
   
    const[paywith, setPaywith] = useState(true)
    const[promo, setPromo] = useState(false)
   
    return(
        <div className=''>
           
             <Offcanvas show={paywith} placement="bottom">
               
             <Offcanvas.Body className='requestlogin paywith'>
                <div className='text-right '>
                    <button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container'>
                       
                        <div className='d-flex align-items-center'>
                            <img src={user} className='me-2'/> 
                            <div> 
                                <h4 className='mb-0'>Weight Loss</h4>
                            </div>
                         </div>
                         <div className='row mt-4'>
                            <div className='col-lg-7  mb-3 mb-lg-0'>
                                <div className='whitebox h-100 py-4'>
                                    <InputGroup className="mb-3 borderinput">
                                        <Form.Control aria-label="Amount (to the nearest dollar)" placeholder='Product'/>
                                        
                                    </InputGroup>
                                    <h5 className='mt-4'>Pay with</h5>
                                    <InputGroup className="mb-3 borderinput">
                                        <Form.Control aria-label="Amount (to the nearest dollar)" placeholder='Product'/>
                                       <InputGroup.Text><i className='fa fa-trash themeclr'></i></InputGroup.Text>
                                    </InputGroup>

                                    <div className='d-flex jc-between mt-4'>
                                        <button className='btn-grey btn'>Cancel</button>
                                        <button className='themebtn-bordered btn'>Checkout</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5'>
                            <div className='whitebox h-100 py-4'>
                                <div className=' mb-4'>
                                <Table hover>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                   <img src={copy} className='copy' />
                                                   <span> Medical Certificate</span>
                                                </td>
                                                <td>0.1</td>
                                                <td>$25</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className='d-flex flex-1 jc-between mb-3'>
                                    <p>Sub total</p>
                                    <span>:</span>
                                    <h6>$25</h6>
                                </div>
                                <div className='d-flex flex-1 jc-between'>
                                    <p>Taxes</p>
                                    <span>:</span>
                                    <h6>00</h6>
                                </div>
                                <hr className='bordered' />
                                <div className='d-flex flex-1 jc-between'>
                                    <h5>Total</h5>
                                    <span>:</span>
                                    <h6>00</h6>
                                </div>
                                <div className='d-flex jc-between mt-sm-5  mt-4'>
                                    <button className='themebtn btn' onClick={() => setPromo(!promo)}>I have a promo code</button>
                                    <button className='themebtn-bordered btn' onClick={props.onsuccess}>Pay Now</button>
                                </div>
                                {promo && 
                                <div className='mt-4'>
                                    <InputGroup className="mb-3 borderinput">
                                        <Form.Control aria-label="Amount (to the nearest dollar)" placeholder='Code'/>
                                       <InputGroup.Text>Apply</InputGroup.Text>
                                    </InputGroup>
                                </div> }
                                
                            </div>
                            </div>
                         </div>
                        </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Paywith