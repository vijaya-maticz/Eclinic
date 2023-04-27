import React, { useState,useContext } from 'react';
import {Offcanvas } from 'react-bootstrap'
import female from '../../Assets/Images/eclinic-img/female.png'
import prof from '../../Assets/Images/prof.png'
import { Link } from 'react-router-dom';
import {TreatContext} from "../../Components/Innerpages/Treatments"
import disease1 from '../../Assets/Images/disease1.png'

const Recordsview = (props) =>{
    const[show, setShow] = useState(true)
  
    return(
        <div>
             <Offcanvas show={show} placement="bottom">
               
                <Offcanvas.Body>
                <div className='text-right'><button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container'>
                       
                            <div className='row'>
                                <div className='col-xl-9 col-lg-8 col-md-7 mb-md-0 mb-3'>
                                    <div className=''>
                                    <h4>View Records</h4>
                                       <div className='mt-4'>
                                        <div className='que_sex d-flex querylist'>
                                            <div>
                                            <h6>1)</h6>
                                            </div>
                                            <div className='ps-1'>
                                            <h6>What sex were you born as?</h6>
                                       <p>Female</p>
                                       </div>
                                        </div>

                                        <div className='que_sex d-flex querylist'>
                                            <div>
                                            <h6>2)</h6>
                                            </div>
                                            <div className='ps-1'>
                                            <h6>What is your current height (enter as centimeters)</h6>
                                       <p>150</p>
                                       </div>
                                        </div>

                                        <div className='que_sex d-flex querylist'>
                                            <div>
                                            <h6>3)</h6>
                                            </div>
                                            <div className='ps-1'>
                                            <h6>What is your current Weight (enter as kgs)</h6>
                                       <p>35</p>
                                       </div>
                                        </div>

                                        <div className='que_sex d-flex querylist'>
                                            <div>
                                            <h6>4)</h6>
                                            </div>
                                            <div className='ps-1'>
                                            <h6>What form of weight loss have you tried in the past?</h6>
                                       <p>Exercises</p>
                                       </div>
                                        </div>

                                        <div className='que_sex d-flex querylist'>
                                            <div>
                                            <h6>5)</h6>
                                            </div>
                                            <div className='ps-1'>
                                            <h6>Have you been diagnosed with high blood sugar ?</h6>
                                       <p>None</p>
                                       </div>
                                        </div>

                                        <div className='que_sex d-flex querylist'>
                                            <div>
                                            <h6>6)</h6>
                                            </div>
                                            <div className='ps-1'>
                                            <h6>Do you currently suffer from either heart disease, high blood pressure or are you being prescribed a treatment for high blood pressure?</h6>
                                       <p>None</p>
                                       </div>
                                        </div>

                                        <div className='que_sex d-flex querylist'>
                                            <div>
                                            <h6>7)</h6>
                                            </div>
                                            <div className='ps-1'>
                                            <h6>Have you been diagnosed with liver issues?</h6>
                                       <p>Yes 1 month before</p>
                                       </div>
                                        </div>
                                       
                                       </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-5 mb-md-0 mb-3'>

                                <div className='card card_dise card_stik_positn'>
                            <div className='card-body ps-3 pt-0'>
                                <div className='mt-4'>
                                    <div className='text-center'>
                                    <img src={disease1} className='img-fluid dise_img' />

                                    </div>
                                    <div className='mt-3'>
                                        <p className='disease_head mt-4 text-center'>Weight Loss</p>
                                      <div className='text-center'>
                                        <Link to="/" className="btn btn-purple mt-3">
                                        Prescribe
                                        </Link>
                                        </div>
                                    </div>
                                </div>
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

export default Recordsview