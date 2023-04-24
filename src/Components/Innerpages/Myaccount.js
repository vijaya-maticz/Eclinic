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

import doc from '../../Assets/Images/doc.png'






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
                    <div className='card purple_bg_card_purple h-100'>
                <div className='card-body'>
                    <div className='text-center'>
                        <div className='img_profile_edit'>

                     
                        <img src={profile} className='img-fluid img_profile_bg' />

                        <button className='btn btn_edit'>
                        <i className="fa fa-pencil"></i>
                        </button>
                        </div>
                    </div>
                    <p className='profile_name_title mt-3 text-center'>David Williams</p>
                    <p className='profile_address_desc text-center mt-2 mb-2'>56, Williams Road, loreum street USA</p>
                    <p className='text-center'>
                        <span className='profile_address_desc mt-2'>
                        <i className="fa fa-mobile"></i>
                        </span>
                        <span className='profile_address_desc ps-1 mt-2'>+01-5460-55750</span>
                    </p>
                    <p className='text-center'>
                        <span className='profile_address_desc mt-2'>
                        <i className="fa fa-envelope"></i>
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

                    <div className='text-center mt-3 div_acc_sec'>
                        <p className='acc_secu_text'>Account Security</p>
                        <button className='btn btn_edit_yellow mt-3'>
                            <span className='pencil_div_circle me-1'>
                            <i className="fa fa-pencil"></i>
                            </span>
                            Edit Security Settings
                        </button>
                    </div>

                </div>
                </div>
                    </div>
                    <div className='col-12 col-md-8 col-xl-9'>
                    <div className='row mt-md-3'>
                    <div className='col-12 col-xl-6 col-xl-6 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body'>
                                <div className='flex_img_div flex_img_div_med'>
                                    <img src={doc} className='img-fluid img_purpl_care' />
                                    <div className='ms-3'>
                                        <p className='disease_head'>Free Confidential</p>
                                        <p className='disease_desc_grey'>Lorem Ipsum is simply dummy text</p>
                                    
                                    </div>
                                    <div>
                                    <div>
                                        <Link to="/" className="btn btn btn-purple btn-purple-sm ms-auto">
                                        Order Now
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                

                    <div className='col-12 col-xl-6 col-xl-6 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body'>
                                <div className='flex_img_div flex_img_div_med'>
                                    <img src={doc} className='img-fluid img_purpl_care' />
                                    <div className='ms-3'>
                                        <p className='disease_head'>Medical Certificate</p>
                                        <p className='disease_desc_grey'>Lorem Ipsum is simply dummy text</p>
                                    
                                    </div>
                                    <div>
                                    <div>
                                        <Link to="/" className="btn btn btn-purple btn-purple-sm ms-auto">
                                        Order Now
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='row mb-4'>
                            <div className='col-12 col-lg-10 col-xl-7 mx-auto'>

                    <p className="dash_head_blk mt-4 text-center">Contrary to popular belief, Lorem Ipsum is not simply random</p>
                            </div>
                        </div>
                    <div className='switch_div mt-4 mx-auto'>
                        <p>Male</p>
                       
                    <label className="switch mx-auto">
                    <input type="checkbox"  />
                    <span className="slider round"></span>
                    </label>
                        <p>Female</p>

                        </div>
                    </div>

                    <div className='col-12 col-xl-6 col-xl-6 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body ps-3 pt-0'>
                                <div className='flex_img_div'>
                                    <img src={disease1} className='img-fluid dise_img' />
                                    <div className='ms-3'>
                                        <p className='disease_head mt-4'>Weight Loss</p>
                                        <p className='disease_desc'>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                                      <div className='text-right button_pos_round'>
                                        <Link to="/" className="btn btn_round_purple ms-auto mt-3">
                                        <i className="fa fa-arrow-right"></i>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                

                    <div className='col-12 col-xl-6 col-xl-6 mt-4'>
                        <div className='card card_dise'>
                            <div className='card-body ps-3 pt-0'>
                                <div className='flex_img_div'>
                                    <img src={disease2} className='img-fluid dise_img' />
                                    <div className='ms-3'>
                                        <p className='disease_head mt-4'>Contraceptive Pill</p>
                                        <p className='disease_desc'>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                                      <div className='text-right button_pos_round'>
                                        <Link to="/" className="btn btn_round_purple ms-auto mt-3">
                                        <i className="fa fa-arrow-right"></i>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                  

                   
                </div>

                <div className='text-center mt-5'>
                                        <Link to="/treatments" className="btn btn btn-purple btn-purple-sm ms-auto">
                                        View All
                                        </Link>
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