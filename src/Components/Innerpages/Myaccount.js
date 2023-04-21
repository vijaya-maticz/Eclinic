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
import profile from '../../Assets/Images/profile.png'





const Myaccount = () =>{
  

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
            

                <div className='row'>
                    <div className='col-12 col-md-4 col-xl-3'>
                    <div className='card purple_bg_card_purple'>
                <div className='card-body'>
                    <div className='text-center'>
                        <div className='img_profile_edit'>

                     
                        <img src={profile} className='img-fluid img_profile_bg' />

                        <button className='btn btn_edit'>
                        <i class="fa fa-pencil"></i>
                        </button>
                        </div>
                    </div>
                    <p className='profile_name_title mt-3 text-center'>David Williams</p>
                    <p className='profile_address_desc text-center mt-2 mb-2'>56, Williams Road, loreum street USA</p>
                    <p className='text-center'>
                        <span className='profile_address_desc mt-2'>
                        <i class="fa fa-mobile"></i>
                        </span>
                        <span className='profile_address_desc ps-1 mt-2'>+01-5460-55750</span>
                    </p>
                    <p className='text-center'>
                        <span className='profile_address_desc mt-2'>
                        <i class="fa fa-envelope"></i>
                        </span>
                        <span className='profile_address_desc ps-1 mt-2'>mail@mail.com</span>
                    </p>
                    <p className='text-center'>
                        <a href="javascript:void(0)" className='profile_page_link'>Manage personal data</a>
                    </p>
                    <div className='text-center mt-3'>
                        <button className='btn btn_edit_white'>
                            Edit
                        </button>
                    </div>
                </div>
                </div>
                    </div>
                    <div className='col-12 col-md-8 col-xl-9'>
                    <div className='row'>
                    <div className='col-12 col-md-6 col-xl-6 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body ps-3 pt-0'>
                                <div className='flex_img_div'>
                                    <img src={disease1} className='img-fluid dise_img' />
                                    <div className='ms-3'>
                                        <p className='disease_head mt-4'>Weigth Loss</p>
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

                

                    <div className='col-12 col-md-6 col-xl-6 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body ps-3 pt-0'>
                                <div className='flex_img_div'>
                                    <img src={disease2} className='img-fluid dise_img' />
                                    <div className='ms-3'>
                                        <p className='disease_head mt-4'>Contraceptive Pill</p>
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

                    <div className='col-12'>
                    <p class="dash_head_blk mt-5 text-center">Contrary to popular belief, Lorem Ipsum is not simply random</p>
                    <div className='switch_div mt-4'>
                        <p>Male</p>
                       
                    <label className="switch mx-auto">
                    <input type="checkbox"  />
                    <span className="slider round"></span>
                    </label>
                        <p>Female</p>

                        </div>
                    </div>

                    <div className='col-12 col-md-6 col-xl-6 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body ps-3 pt-0'>
                                <div className='flex_img_div'>
                                    <img src={disease3} className='img-fluid dise_img' />
                                    <div className='ms-3'>
                                        <p className='disease_head mt-4'>Bacterial Vaginosis</p>
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

                    <div className='col-12 col-md-6 col-xl-6 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body ps-3 pt-0'>
                                <div className='flex_img_div'>
                                    <img src={disease4} className='img-fluid dise_img' />
                                    <div className='ms-3'>
                                        <p className='disease_head mt-4'>Astma</p>
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

export default Myaccount