import React,{useEffect, useState, useRef,createContext} from 'react';
import {Link,Navigate,useLocation, useNavigate} from 'react-router-dom';

import HomeHeader from '../HomeHeader';
import Footer from '../Footer';
import Sidebar from './Sidebar';
import females from '../../Assets/Images/females.png'
import female from '../../Assets/Images/female.png'
import male from '../../Assets/Images/male.png'

import { Form, Tab, Tabs } from 'react-bootstrap';
import RequestLoginOff from '../Offcanvas/RequestLoginOff';
import LoginOff from '../Offcanvas/LogingOff';
import RegisterOff from '../Offcanvas/RegisterOff';


export const TreatContext = createContext()

const Treatmentquery = (props) =>{

const [category,setCategory] = useState("female");
const [activestep,setActivestep] = useState(1)
const location = useLocation();


const Navigate = useNavigate()
const steps = useRef(false)

// offcanvas
const[show, setShow] = useState(false)
const[login, setLogin] = useState(false)
const[register, setRegister] = useState(false)
const [next,setNext] = useState('1')
// const clickNext = () =>{
//     console.log("steps is false",steps)
//     document.getElementById("uncontrolled-tab-example-tab-query2").addEventListener("click", () =>{
//        steps.current = true
//         console.log("steps must be true",steps)
//     })
//     document.getElementById("uncontrolled-tab-example-tab-query1").addEventListener("click", () =>{
//         steps.current = false
//         console.log("steps must be false",steps)
//     })
//     if(steps.current = true){
//         document.getElementById("uncontrolled-tab-example-tab-query2").addEventListener("click", () =>{
//             setShow(true)
//         })
//     }
// }

// const memofunc = useMemo(() => expensiveCalculation(steps), [steps])

console.log(steps.current, "step false")
const expensiveCalculation = () =>{
    document.getElementById("uncontrolled-tab-example-tab-query2").addEventListener("click", () =>{

       steps.current = true
       setNext('1')
       console.log(steps.current, "step true")
    })

    // back
    document.getElementById("uncontrolled-tab-example-tab-query1").addEventListener("click", () =>{
        steps.current = false
        setNext('2')
        console.log(steps.current, "step false")
   
    })
   
}
useEffect(() =>{
    expensiveCalculation() 
},[steps])


    return(
        <>
        {login && <LoginOff onDismiss={() => {setLogin(false);Navigate("/treatments")}}/>}
        {register && <RegisterOff onDismiss={() => setRegister(false)} alreadyhave={() =>{ setRegister(false);setLogin(true)}}/>}
        <TreatContext.Provider value={location.state}>
           {show && <RequestLoginOff onDismiss={() => setShow(false)}  logindismiss={() => {setShow(false);setLogin(true)}} signindismiss={() => {setShow(false);setRegister(true)}}/>} 
       </TreatContext.Provider>
       

        <div id="dashboard" className= "showsidebar final">
            <div id='sidebar'>
                <Sidebar/>
            </div>
            <div className='headandcont'>
               <div className="adminheader">
                <HomeHeader />
                </div> 
               <div className='cont p-sm-5 p-4 cont_padding'>
               <div className='card purple_bg_card'>
                <div className='card-body p-0'>
                <div className='row jc-between'>
                    <div className='col-12 col-md-7 col-lg-6'>
                        <div className='p-4 p-xl-5'>
                            <div className='img_text_sx'>
                                <img src={category=="female"?female:male} className='img_sx'/>
                        <p className='card_text_white_patient ms-2'>Patient</p>
                        </div>
                        <p className='card_text_white_big_new mt-2'>{location.state.title}</p>

                            <div className='mt-5'>
                                {console.log('fajhjfhjhjf',steps.current)}
                            <div className={next == '1'  ? 'steps_badge':"steps_badge active" }>1</div>
                            <div className={next == '2'  ? 'steps_badge active':"steps_badge" }>2</div>
                            {/* {[...Array(steps)].map((e,index)=>{
                                return <><div className='steps_badge active'>{index+1}</div></>
                                })} */}

                         
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-5  sec_img_dots'>
                        <img src={females} className='img-fluid pe-3' />
                        </div>
                </div>
                </div>
                </div>

               <div className='queries mt-4'>
               <Tabs
      defaultActiveKey="query1"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
            <Tab eventKey="query1" title="Back">

                
                {/*.......................................... CHECKBOX */}
            {/* <div className='querylist'>
            <h6>What sex were you born as? *</h6>
            <label class="custcheck">
                <input type="checkbox" />ONE
                <span class="checkboxmark"></span>
                </label>
                <label class="custcheck">
                <input type="checkbox" />TWO
                <span class="checkboxmark"></span>
            </label>
            </div> */}
                <div className='querylist'>
                    <h6>What sex were you born as? *</h6>
                   <div className='mt-3'>  
                        <label class="custradio me-2">FEMALE
                            <input type="radio" name="radio1" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="custradio">MALE
                            <input type="radio"  name="radio1" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                 </div>
                 <div className='querylist'>
                    <h6>What is your current height (enter as centimeters)?</h6>
                   <div className=' mt-3'>  
                        <input type="number" className='form-control themeinput' />
                    </div>
                 </div>

                 {/*.................................................... FILE */}
                 {/* <div className='querylist'>
                    <h6>What is your current height (enter as centimeters)?</h6>
                   <div className=' mt-3'>  
                        <input type="file" className='form-control ' />
                    </div>
                 </div> */}

                 {/*.................................................SELECTBOX */}
                 {/* <div className='querylist'>
                    <h6>Even after being rested, do you still feel tired and lacking energy? *</h6>
                   <div className=' mt-3'>  
                        <select className='form-control themeinput' >
                            <option>jhgi</option>
                            </select>
                    </div>
                 </div> */}
                 <div className='querylist'>
                    <h6>What is your current Weight (enter as centimeters)?</h6>
                   <div className=' mt-3'>  
                        <input type="number" className='form-control themeinput' />
                    </div>
                 </div>
                 <div className='querylist'>
                    <h6>What form of weight loss have you tried in the past? *</h6>
                   <div className='mt-3'>  
                        <label class="custradio me-2">Dieting
                            <input type="radio" name="radio2" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="custradio me-2">Exercise
                            <input type="radio" name="radio2" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="custradio me-2">Supplements
                            <input type="radio" name="radio2" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="custradio me-2">None
                            <input type="radio" name="radio2" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="custradio me-2">If others,please specify
                            <input type="radio" name="radio2" />
                            <span class="checkmark"></span>
                        </label>
                        
                    </div>
                    <div className=' mt-3'>  
                        <input type="text" placeholder="Enter" className='form-control themeinput' />
                    </div>
                 </div>
                 <div className='querylist'>
                    <h6>Have you been diagnosed with high blood sugar ? *</h6>
                   <div className='mt-3'>  
                       
                        <label class="custradio me-2">None
                            <input type="radio" name="radio4" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="custradio me-2">If Yes,please specify
                            <input type="radio" name="radio4" />
                            <span class="checkmark"></span>
                        </label>
                        
                    </div>
                    <div className=' mt-3'>  
                        <input type="text" placeholder="Enter" className='form-control themeinput' />
                    </div>
                 </div>
                 <div className='querylist'>
                    <h6>Do you currently suffer from either heart disease, high blood pressure or are you being prescribed a treatment for high blood pressure?* </h6>
                   <div className='mt-3'>  
                       
                        <label class="custradio me-2">None
                            <input type="radio" name="radio3" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="custradio me-2">If Yes,please specify
                            <input type="radio" name="radio3" />
                            <span class="checkmark"></span>
                        </label>
                        
                    </div>
                    <div className=' mt-3'>  
                        <input type="text" placeholder="Enter" className='form-control themeinput' />
                    </div>
                 </div>
                 <div className='querylist'>
                    <h6>Have you been diagnosed with liver issues?* </h6>
                   <div className='mt-3'>  
                       
                        <label class="custradio me-2">None
                            <input type="radio" name="radio5" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="custradio me-2">If Yes,please specify
                            <input type="radio" name="radio5" />
                            <span class="checkmark"></span>
                        </label>
                        
                    </div>
                    <div className=' mt-3'>  
                        <input type="text" placeholder="Enter" className='form-control themeinput' />
                    </div>
                 </div>
                 {/* <div className='text-right mt-3'><button className='btn themebtn-bordered'>Next</button></div>  */}
      </Tab>
      <Tab eventKey="query2" title="Next">
      <div className='querylist'>
                    <h6>Are your daily activities currently affected by your weight? *</h6>
                   <div className=' mt-3'>  
                        <label class="custradio me-2">YES
                            <input type="radio" name="radio6" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="custradio">NO
                            <input type="radio" name="radio6" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                 </div>
                 <div className='querylist'>
                    <h6>Even after being rested, do you still feel tired and lacking energy? *</h6>
                   <div className=' mt-3'>  
                        <select className='form-control themeinput' >
                            <option>YES</option>
                            <option>NO</option>
                            </select>
                    </div>
                 </div>
                 <div className='querylist'>
                    <h6>Have you noticed dramatic loss of interest in sex, excercise or work? *</h6>
                   <div className=' mt-3'>  
                        <select className='form-control themeinput' >
                            <option>YES</option>
                            <option>NO</option>
                            </select>
                    </div>
                 </div>


                 <div className='querylist'>
                    <h6>Have you been diagnosed with a form of eating disorder - anorexia, bulimia , either currently or in the past?  *</h6>
                   <div className=' mt-3'>  
                        <label class="custradio me-2">YES
                            <input type="radio" name="radio6" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="custradio">NO
                            <input type="radio" name="radio6" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                 </div>
                 <div className='querylist'>
                    <h6>Do you feel sad or anxious for 2 weeks or more on a continuous basis? ?</h6>
                   <div className=' mt-3'>  
                        <label class="custradio me-2">YES
                            <input type="radio" name="radio6" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="custradio">NO
                            <input type="radio" name="radio6" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                 </div>
                 <div className='querylist'>
                    <h6>Do you excercise regularly ?</h6>
                   <div className=' mt-3'>  
                        <label class="custradio me-2">YES
                            <input type="radio" name="radio6" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="custradio">NO
                            <input type="radio" name="radio6" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                 </div>











                 <div className='querylist'>
                    <h6>What is your current height (enter as centimeters)?</h6>
                   <div className=' mt-3'>  
                        <input type="text" className='form-control themeinput' />
                    </div>
                 </div>
                 <div className='text-right mt-3'>
                    <button onClick={() => setShow(true)} className='btn themebtn-bordered finalmodal'>Next</button>
                </div> 
        </Tab>

        </Tabs>
                
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

export default Treatmentquery