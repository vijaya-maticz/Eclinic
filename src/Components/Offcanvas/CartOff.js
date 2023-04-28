import React, { useContext, useState } from 'react';
import {Offcanvas, InputGroup ,Form } from 'react-bootstrap'
import cartfill from "../../Assets/Images/eclinic-img/cartfill.png"
import deleteimg from "../../Assets/Images/eclinic-img/delete.png"

import doc from "../../Assets/Images/doc.png"

const Cart = (props) =>{
    const[cart, setCart] = useState(true)
    return(
        <div className=''>
             <Offcanvas show={cart} placement="bottom"> 
               
                <Offcanvas.Body className='requestlogin cart'>
                <div className='text-right '>
                    <button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container pb-4'>
                        <div className='d-flex align-items-center'>
                            <img src={cartfill} className='me-2'/> 
                            <div> 
                                <h4 className='mb-0'>Your Cart</h4>
                           </div>
                         </div>
                         <div className='row mt-4'>
                            <div className='col-lg-7 mb-lg-0 mb-4'>
                                <div className='whitebox h-100 py-4'>
                                   <div className='borderedinputbox mb-4'>
                                      <div className='d-flex jc-between align-items-center mob_blk_fle'>
                                        <p className='mb-0'>You have  <span className='themeclr font_bld'>1 Item</span> in your cart</p>
                                        <button className='btn btn-link text-danger p-0 f-14 clar_cart_hover'>Clear cart</button>
                                      </div>
                                   </div>

                                   <div className='borderedinputbox mb-4'>
                                      <div className='d-sm-flex jc-between align-items-center text-sm-left text-center'>
                                        <div className='d-sm-flex gap-2'>
                                            <img src={doc} className='doc mb-3'/>
                                            <div>
                                                <p className='mb-2'>Patient application for weight loss treatment</p>
                                                <div className='addorremove m-auto m-sm-0 mb-3 mb-sm-0'>
                                                    <button className='btn btn-link nounder bt_t_grey'>-</button>
                                                    <input type="text" className='form-control input_no_t_b_border'/>
                                                    <button className='btn btn-link nounder bt_t_grey'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='btn btn-link text-danger p-0'> <img src={deleteimg} className='cartimg' /></button>
                                      </div>
                                   </div>

                                   {/* <div className='borderedinputbox mb-4'>
                                      <div className='d-lg-flex text-lg-start text-center jc-between align-items-center'>
                                        <div className='d-lg-flex gap-2'>
                                            <img src={doc} className='doc'/>
                                            <div className=' my-lg-0 my-3'>
                                                <p className='mb-2'>Patient application for weight loss treatment</p>
                                                <div className='addorremove m-lg-0 m-auto'>
                                                    <button className='btn btn-link nounder '>-</button>
                                                    <input type="text" className='form-control'/>
                                                    <button className='btn btn-link nounder'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='btn btn-link text-danger p-0'> <img src={deleteimg} /></button>
                                      </div>
                                   </div> */}
                                   
                                
                                </div>
                            </div>
                            <div className='col-lg-5'>
                            <div className='whitebox h-100 py-4'>
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
                                    <button className='themebtn btn'>View Cart</button>
                                    <button className='themebtn-bordered btn' onClick={props.onDismiss}>Checkout</button>
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

export default Cart