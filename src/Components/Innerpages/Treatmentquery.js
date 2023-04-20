import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import HomeHeader from '../HomeHeader';
import Footer from '../Footer';
import Sidebar from './Sidebar';
import females from '../../Assets/Images/females.png'
import female from '../../Assets/Images/female.png'
import male from '../../Assets/Images/male.png'


import disease1 from '../../Assets/Images/disease1.png'
import disease2 from '../../Assets/Images/disease2.png'
import disease3 from '../../Assets/Images/disease3.png'
import disease4 from '../../Assets/Images/disease4.png'
import disease5 from '../../Assets/Images/disease5.png'
import disease6 from '../../Assets/Images/disease6.png'




const Treatmentquery = () =>{
 
const [category,setCategory] = useState("female");
const [steps,setSteps] = useState(2)
const [activestep,setActivestep] = useState(1)

    return(
        <>
        <div id="dashboard" className='showsidebar'>
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
                            <div className='img_text_sx'>
                                <img src={category=="female"?female:male} className='img_sx'/>
                        <p className='card_text_white_patient ms-2'>Patient</p>
                        </div>
                        <p className='card_text_white_big_new mt-2'>Weight Loss Treatment</p>

                            <div className='mt-3'>

                            {[...Array(steps)].map((e,index)=>{
   return <><div className='steps_badge active'>{index+1}</div></>
 })}

                         
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-5 offset-lg-1 sec_img_dots'>
                        <img src={females} className='img-fluid pe-3' />
                        </div>
                </div>
                </div>
                </div>

                <p className='dash_head_blk mt-5'>Loruem ipsumof senu</p>
                <div className='row'>
                    <div className='col-12 col-md-6 col-xl-4 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body ps-0'>
                                <div className='flex_img_div'>
                                    <img src={disease1} className='img-fluid dise_img' />
                                    <div>
                                        <p className='disease_head mt-2'>Weigth Loss</p>
                                        <p className='disease_desc'>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                                      <div className='text-right'>
                                        <Link to="/" className="btn btn_round_purple ms-auto mt-3">
                                        <i class="fa fa-arrow-right"></i>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                

                    <div className='col-12 col-md-6 col-xl-4 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body ps-0'>
                                <div className='flex_img_div'>
                                    <img src={disease2} className='img-fluid dise_img' />
                                    <div>
                                        <p className='disease_head mt-2'>Contraceptive Pill</p>
                                        <p className='disease_desc'>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                                      <div className='text-right'>
                                        <Link to="/" className="btn btn_round_purple ms-auto mt-3">
                                        <i class="fa fa-arrow-right"></i>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 col-xl-4 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body ps-0'>
                                <div className='flex_img_div'>
                                    <img src={disease3} className='img-fluid dise_img' />
                                    <div>
                                        <p className='disease_head mt-2'>Bacterial Vaginosis</p>
                                        <p className='disease_desc'>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                                      <div className='text-right'>
                                        <Link to="/" className="btn btn_round_purple ms-auto mt-3">
                                        <i class="fa fa-arrow-right"></i>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 col-xl-4 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body ps-0'>
                                <div className='flex_img_div'>
                                    <img src={disease4} className='img-fluid dise_img' />
                                    <div>
                                        <p className='disease_head mt-2'>Astma</p>
                                        <p className='disease_desc'>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                                      <div className='text-right'>
                                        <Link to="/" className="btn btn_round_purple ms-auto mt-3">
                                        <i class="fa fa-arrow-right"></i>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 col-xl-4 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body ps-0'>
                                <div className='flex_img_div'>
                                    <img src={disease5} className='img-fluid dise_img' />
                                    <div>
                                        <p className='disease_head mt-2'>Migraine</p>
                                        <p className='disease_desc'>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                                      <div className='text-right'>
                                        <Link to="/" className="btn btn_round_purple ms-auto mt-3">
                                        <i class="fa fa-arrow-right"></i>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 col-xl-4 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body ps-0'>
                                <div className='flex_img_div'>
                                    <img src={disease6} className='img-fluid dise_img' />
                                    <div>
                                        <p className='disease_head mt-2'>Acne</p>
                                        <p className='disease_desc'>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                                      <div className='text-right'>
                                        <Link to="/" className="btn btn_round_purple ms-auto mt-3">
                                        <i class="fa fa-arrow-right"></i>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default Treatmentquery