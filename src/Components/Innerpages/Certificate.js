import React,{useEffect, useState, useRef,createContext} from 'react';
import {Link,Navigate,useLocation, useNavigate} from 'react-router-dom';

import HomeHeader from '../HomeHeader';
import Footer from '../Footer';
import Sidebar from './Sidebar';
import females from '../../Assets/Images/eclinic-img/certi.png'
import female from '../../Assets/Images/female.png'
import male from '../../Assets/Images/male.png'

import { Form, Tab, Tabs } from 'react-bootstrap';
import RequestLoginOff from '../Offcanvas/RequestLoginOff';
import LoginOff from '../Offcanvas/LogingOff';
import RegisterOff from '../Offcanvas/RegisterOff';
import MCertificate from '../Offcanvas/MCertificate';
import Paynow from '../Offcanvas/Paynow';
import Paywith from '../Offcanvas/Paywith';
import PaySuccess from '../Offcanvas/PaySuccess';


export const TreatContext = createContext()

const Certificate = (props) =>{

const [category,setCategory] = useState("female");
const [activestep,setActivestep] = useState(1)
const location = useLocation();


const Navigate = useNavigate()
const steps = useRef(false)

// offcanvas

const[certificate, setCertificate] = useState(false)
const[pay, setPay] = useState(false)
const[paywith, setPaywith] = useState(false)
const[paysuccess, setPaysuccess] = useState(false)
    return(
        <>
      
     
       

        <div id="dashboard" className= {steps ? "showsidebar final" : "showsidebar "}>
            <div id='sidebar'>
                <Sidebar/>
            </div>
            {certificate && <MCertificate onDismiss={() => setCertificate(false)} paynow = {() => {setCertificate(false);setPay(true)}} />}
            {pay &&  <Paynow onDismiss={() =>{ setPay(false);setPaywith(true)}} />}
            {paywith &&  <Paywith onsuccess={() => {setPaywith(false);setPaysuccess(true)}} onDismiss={() => {setPaywith(false)}} />}
            {paysuccess && <PaySuccess onDismiss={() =>setPaysuccess(false)} /> }
            
            <div className='headandcont certificate'>
               <div className="adminheader">
                {/* <AdminHeader /> */}
                <HomeHeader />
                </div> 
               <div className='cont p-sm-5 p-4 cont_padding'>
               <div className='card purple_bg_card'>
                <div className='card-body p-0'>
                <div className='row jc-between'>
                    <div className='col-12 col-md-7 col-lg-8 d-flex  align-center'>
                        <div className='p-4 p-lg-5 '>
                            <div className='img_text_sx'>
                                <img src={category=="female"?female:male} className='img_sx'/>
                        <p className='card_text_white_patient ms-2'>Patient</p>
                        </div>
                        <p className='card_text_white_big_new mt-2'>Medical Certificate</p>

                            
                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-4  sec_img_dots justify-content-sm-send pe-sm-5'>
                        <img src={females} className='img-fluid pe-3' />
                        <div className='dots'></div>
                    </div>
                </div>
                </div>
                </div>

               <div className='queries mt-4'>
                <div>
                <div className='tab-content'>
                     <div eventKey="query1" title="Back">
                    <div className='querylist'>
                        <h6>What sex were you born as? *</h6>
                    <div className='mt-3'>  
                            <label class="custradio me-2">FEMALE
                                <input type="radio" name="radio" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="custradio">MALE
                                <input type="radio" name="radio" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className='querylist'>
                        <h6>Are you currently or in the last two months have you taken any medicine (prescribed or not), alternative medicines or recreational drugs? *</h6>
                        <div className=' mt-3'>  
                            <select className='form-control themeinput' >
                                <option>YES</option>
                                                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className='querylist'>
                    <h6>Other than issues mentioned in your below Sick Note details, do you have any significant medical conditions, illness or past surgical procedure? </h6>
                        <div className=' mt-3'>  
                            <select className='form-control themeinput' >
                                <option>YES</option>
                                                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className='querylist'>
                        <h6>Have you been diagnosed with high blood sugar levels or diabetes? * </h6>
                    <div className=' mt-3'>  
                            <textarea className='form-control '></textarea>
                        </div>
                    </div>
                    
                   
                    <div className='d-sm-flex w-full gap-3'>
                    <div className='querylist w-full'>
                        <h6>Start of Sick Note</h6>
                        <div className='d-flex mt-3'>  
                            <div className='dateinput w-full'> 
                                <input type="date" className='form-control borderinput' placeholder='Date of Birth'/>
                            </div> 
                        </div>
                    </div>
                    <div className='querylist w-full'>
                        <h6>End of Sick Note</h6>
                        <div className='d-flex mt-3'>  
                            <div className='dateinput w-full'> 
                                <input type="date" className='form-control borderinput' placeholder='Date of Birth'/>
                            </div> 
                        </div>
                    </div>
                    </div>
                  <p className='aqua'>Book only Maximum 7 days</p>
                    <div className='querylist mt-3'>
                        <h6>I confirm that I have read and understand this and my answers are fully correct and true. *</h6>
                    <div className='mt-3'>  
                            <label class="custradio me-2">CONFIRM
                                <input type="radio" name="radio1" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="custradio">I DO NOT CONFIRM
                                <input type="radio" name="radio1" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                   
                    </div>
                </div>
                <div className='text-right mt-3'><button className='btn themebtn-bordered' onClick={() => setCertificate(true)}>Submit</button></div> 
                </div>
                
               </div>
               </div> 
            </div>
          
        </div>

<div className='footer_sec'>
<div className='container'>
<Footer />
</div>
</div>
</>
    )
}

export default Certificate