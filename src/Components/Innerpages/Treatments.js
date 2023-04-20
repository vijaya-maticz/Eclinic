import React,{useState} from 'react';
import {Link} from 'react-router-dom';

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




const Treatments = () =>{
  

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
                        <p className='card_text_white_big'>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                       <div className='switch_div mt-4'>
                        <p>Male</p>
                       
                    <label className="switch">
                    <input type="checkbox"  />
                    <span className="slider round"></span>
                    </label>
                        <p>Female</p>

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

export default Treatments