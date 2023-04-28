import React, { useState,useContext } from 'react';
import {Offcanvas, Table } from 'react-bootstrap'
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
             <Offcanvas.Header >
             <div className='container'>
                <div className='d-flex jc-between'>
                    <Offcanvas.Title> <h4>View Prescription</h4></Offcanvas.Title>
                    <button className='ms-auto btn btn-link text-dark' onClick={props.onDismiss}><span className='fa fa-times fa-xs'></span> </button>
          </div></div>
        </Offcanvas.Header>
                <Offcanvas.Body className="containerpad0">
              <div className='container'>
                       
                            <div className='row'>
                                <div className='col-xl-12 col-lg-12 col-md-12 mb-md-0 mb-3'>
                                    <div className=''>
                                   
                                       <div className='mt-4'>
                                        <div className='querylist'>
                                        <p className='text-right text-dark banner_lit_font_bold mt-0'>Date : 27-Apr-2023 04:37 PM</p>

                                        <div className='que_sex'>
                                            <div>
                                               <p className='bold '>ID: 266</p>
                                                <p className='f-14'>Address : PUNE</p>
                                                <p className='f-14'><span>Temp(deg) : 36</span> <span>BP : 120/80 mmHG</span></p>
                                               
                                            </div>
                                         
                                        <div>
                                   
                                        </div>
                                        </div>
                                        <div className='table-responsive'>
                                        <Table responsive className='table_pres'>
                                                <thead>
                                                    <tr>
                                                        <th> Medicine Name</th>
                                                        <th>Dosage</th>
                                                        <th>Duration</th>
                                                    </tr>
                                                </thead>
                                                <tbody className=' f-14'>
                                                    <tr>
                                                        <td><span className='me-2'>1)</span>TAB, DEMO MEDICINE 1</td>
                                                        <td>1 Morning, 1 Night (Before Food)</td>
                                                        <td>10 Days (Tot:20 Tab)</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className='me-2'>2)</span>CAP, DEMO MEDICINE 2</td>
                                                        <td>1 Morning, 1 Night (Before Food)</td>
                                                        <td>10 Days (Tot:20 Tab)</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className='me-2'>3)</span>TAB, DEMO MEDICINE 3</td>
                                                        <td>1 Morning, 1 Night (Before Food)</td>
                                                        <td>10 Days (Tot:20 Tab)</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className='me-2'>4)</span>TAB, DEMO MEDICINE 4</td>
                                                        <td>1 Morning, 1 Night (Before Food)</td>
                                                        <td>10 Days (Tot:20 Tab)</td>
                                                    </tr>
                                                  
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className='mt-3'>
                                            <p className='bold '>Advice given</p>
                                            <p className='f-14'>* Avoid Oily and Spicy Food</p>
                                            <p className='bold  mt-3'>Follow Up : 22-12-23</p>
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