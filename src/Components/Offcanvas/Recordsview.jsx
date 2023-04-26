import React, { useState,useContext } from 'react';
import {Offcanvas } from 'react-bootstrap'
import female from '../../Assets/Images/eclinic-img/female.png'
import prof from '../../Assets/Images/prof.png'
import { Link } from 'react-router-dom';
import {TreatContext} from "../../Components/Innerpages/Treatments"


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