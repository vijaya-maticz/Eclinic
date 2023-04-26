import React, { useState,useContext } from 'react';
import {Offcanvas } from 'react-bootstrap'
import female from '../../Assets/Images/eclinic-img/female.png'
import prof from '../../Assets/Images/prof.png'
import { Link } from 'react-router-dom';
import {TreatContext} from "../../Components/Innerpages/Treatments"
import disease1 from '../../Assets/Images/disease1.png'

const Prescriptionview = (props) =>{
    const[showpres, setShowpres] = useState(true)
  
    return(
        <div>
             <Offcanvas show={showpres} placement="bottom">
               
                <Offcanvas.Body>
                <div className='text-right'><button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container'>
                       
                            <div className='row'>
                                <div className='col-xl-12 col-lg-12 col-md-12 mb-md-0 mb-3'>
                                    <div className=''>
                                    <h4>View Prescription</h4>
                                       <div className='mt-4'>
                                        <div className='que_sex querylist'>
                                         
                                        <div>
                                            <p className='text-right banner_lit_font_bold'>Date : 27-Apr-2023 04:37 PM</p>
                                        </div>
                                        <div>
                                        <p className='text-right banner_lit_font_bold'>ID: 266</p>

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

export default Prescriptionview