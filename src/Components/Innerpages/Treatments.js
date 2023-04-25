import React,{useState, createContext} from 'react';
import {Link, useLocation} from 'react-router-dom';

import HomeHeader from '../HomeHeader';
import Footer from '../Footer';
import Sidebar from './Sidebar';
import treatment from '../../Assets/Images/treatment.png'
import disease1 from '../../Assets/Images/disease1.png'
import disease2 from '../../Assets/Images/disease2.png'
import disease3 from '../../Assets/Images/disease3.png'
import disease4 from '../../Assets/Images/disease4.png'
import disease5 from '../../Assets/Images/disease5.png'
import disease6 from '../../Assets/Images/disease6.png'
import diseaseimg from '../../Assets/Images/user.png'

import TreatmentOff from '../Offcanvas/TreatmentOff';


export const TreatContext = createContext()
const Treatments = (props) =>{
    const[show, setShow] = useState(false)
    const[sendIndex, setSendIndex] = useState(0)
    const[checked, setChecked] = useState(false)

  
  
    const carddata = [
        {
            treat:"Weight loss",
            details:"Contrary to popular belief, Lorem Ipsum is not simply random",
            img:disease1
        },
        {
            treat:"Contraceptive Pill",
            details:"Contrary to popular belief, Lorem Ipsum is not simply random",
            img:disease2
        },
        {
            treat:"Bacterial Vaginosis",
            details:"Contrary to popular belief, Lorem Ipsum is not simply random",
            img:disease3
        },
        {
            treat:"Astma",
            details:"Contrary to popular belief, Lorem Ipsum is not simply random",
            img:disease4
        },
        {
            treat:"Migraine",
            details:"Contrary to popular belief, Lorem Ipsum is not simply random",
            img:disease5
        },
        {
            treat:"Acne",
            details:"Contrary to popular belief, Lorem Ipsum is not simply random",
            img:disease6
        }
    ]
  const location = useLocation()
    return(
        <>
        {console.log(location.state.datas, "viji")}
        <div id="dashboard" className='showsidebar'>
            <TreatContext.Provider  value={location.state.datas[sendIndex]}> 
                {show && <TreatmentOff onDismiss={() => setShow(false)} />}
            </TreatContext.Provider>
            <div id='sidebar'>
                <Sidebar/>
            </div>
            <div className='headandcont'>
               <div className="adminheader">
                {/* <AdminHeader /> */}
                <HomeHeader />
                </div> 
                
           
               <div className='cont p-sm-5 p-4 cont_padding'>
               <div className='card purple_bg_card'>
                <div className='card-body p-0'>
                <div className='row'>
                    <div className='col-12 col-md-7 col-lg-6'>
                        <div className='p-4 p-lg-5'>
                        <p className='card_text_white_big'>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                    
                        <div className={checked?'switch_div mt-4 switch_div_2 active_check':'switch_div mt-4 switch_div_2'}>
                        <p className='pe-2 first_check'>Male</p>
                       
                    <label className="switch mx-auto">
                    <input type="checkbox" onChange={(e)=>{console.log(e.target.checked);setChecked(e.target.checked)}}/>
                    <span className="slider round"></span>
                    </label>
                    
                        <p className='ps-2 second_check'>Female</p>

                        </div>

                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-5 offset-lg-1 sec_img_dots'>
                        <img src={treatment} className='img-fluid' />
                        </div>
                </div>
                </div>
                </div>

                <p className='dash_head_blk mt-5'>Loruem ipsumof senu</p>
                <div className='row'>
                    {carddata.map((i,index) =>{
                        return(
                             <div className='col-12 col-md-6 col-xl-4 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body ps-3 pt-0'>
                                <div className='flex_img_div'>
                                    <img src={carddata[index].img} className='img-fluid dise_img' />
                                    <div className='ms-3'>
                                        <p className='disease_head mt-4'>{carddata[index].treat}</p>
                                        <p className='disease_desc'>{carddata[index].details}</p>
                                      <div className='text-right button_pos_round'>
                                             <button onClick={() => {setShow(true);setSendIndex(index)}} className="btn btn_round_purple ms-auto mt-3"> <i class="fa fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                    })}
                   
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

export default Treatments