import React, { useState,useContext } from 'react';
import {Offcanvas } from 'react-bootstrap'
import female from '../../Assets/Images/eclinic-img/female.png'
import prof from '../../Assets/Images/prof.png'
import { Link } from 'react-router-dom';
import {TreatContext} from "../../Components/Innerpages/Treatments"


const TreatmentOff = (props) =>{
    const[show, setShow] = useState(true)
    const treats = useContext(TreatContext);
    return(
        <div>
            {console.log("treats",treats)}
             <Offcanvas show={show} placement="bottom">
               
                <Offcanvas.Body>
                <div className='text-right'><button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button></div>
                        <div className='container'>
                       
                            <div className='row'>
                                <div className='col-xl-9 col-lg-8 col-md-7 mb-md-0 mb-3'>
                                    <div className=''>
                                        <div className='d-flex align-center gap-2'>
                                            <img src={female} className='img-fluid' />
                                            <h4 className="mb-0">{treats.title}</h4>
                                        </div>
                                        <div className='treat-det mt-3'>
                                            <p>{treats.description}</p>
                                            <h6>{treats.h4}</h6>
                                            <p> {treats.description2} </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-5'>
                                    <div className='sticky_card_dr'>
                                        <div className='violetcard'>
                                            <h5>{treats.docname} is online now</h5>
                                            <div className='imgborder my-4'>
                                                <img src={prof}  className='img-fluid'/>
                                            </div>
                                            <h5 className='puprletxt my-4'>{treats.qualification}</h5>
                                            <button className='purplebtn btn'>${treats.fee} / Consultation</button>
                                        </div>
                                       <div className='text-right mt-3' > 
                                       {/* <Link to={{pathname:"/treatmentquery" , state:{name: "viji"}}} className='btn themebtn-bordered' >Ok, Lets go</Link> */}
                                       <Link to="/treatmentquery"  state={treats} className='btn themebtn-bordered' >Ok, Lets go</Link>
                                       
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

export default TreatmentOff