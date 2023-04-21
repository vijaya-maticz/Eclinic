import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import HomeHeader from '../HomeHeader';
import Footer from '../Footer';
import Sidebar from './Sidebar';
import treatment from '../../Assets/Images/treatment.png'
import graph_violet from '../../Assets/Images/graph_violet.png'
import icon_plus_file from '../../Assets/Images/icon_plus_file.png'
import img_graph_blue from '../../Assets/Images/img_graph_blue.png'
import img_graph_yellow from '../../Assets/Images/img_graph_yellow.png'
import img_icon_aud from '../../Assets/Images/img_icon_aud.png'



import feather_check from "../../Assets/Images/feather_check.svg"




const Dashboard = () =>{
  

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
                    <div className='col-12 col-md-7 col-lg-7'>
                        <div className='p-4 p-lg-5 pb-lg-3 pt-lg-4'>
                        <p className='card_text_white_big'>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                        <p className='card_tect_grrey_sm_card'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                       <div className='mt-3'>
                      
                        <div className='row w-100'>
                            <div className='col-12 col-md-6 col-xl-4 pe-md-0 mb-3 mb-md-0'>
                                <div className='flex_chart_icon'>
                                    <div className='badge badge_green_card'>
                                 <img src={feather_check} className='img-fluid' />

                                    </div>
                                    <div className='ms-2'>
                                        <p className='violtet_text_desc'>loreum ipse</p>
                                        <p className='white_text_count'>37</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 pe-md-0 mb-3 mb-md-0'>
                                <div className='flex_chart_icon'>
                                    <div className='badge badge_yellow_card'>
                                 <img src={feather_check} className='img-fluid' />

                                    </div>
                                    <div className='ms-2'>
                                        <p className='violtet_text_desc'>loreum ipse</p>
                                        <p className='white_text_count'>37</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 mt-3 mt-xl-0 col-xl-4 pe-md-0 mb-3 mb-md-0'>
                                <div className='flex_chart_icon'>
                                    <div className='badge badge_orange_card'>
                                 <img src={feather_check} className='img-fluid' />

                                    </div>
                                    <div className='ms-2'>
                                        <p className='violtet_text_desc'>loreum ipse</p>
                                        <p className='white_text_count'>37</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-5 sec_img_dots'>
                        <img src={treatment} className='img-fluid' />
                        </div>
                </div>
                </div>
                </div>

                <p className='dash_head_blk mt-5'>Loruem ipsumof senu</p>
                <div className='row mt-4'>
                    <div className='col-12 col-md-6 col-xl-3'>
                        <div className='card card_dise mb-4 card_height_adj'>
                            <div className='card-body ps-3 pt-2 pe-2 pb-4'>
                                <div className='flex_img_div_graph'>
                                
                                    <div className='me-3'>
                                        <p className='dashboard_title_grey mt-3 pb-3'>Provider</p>
                                        <p className='dashboard_count_grey'><span>37</span> No.</p>
                                    
                                    </div>
                                    <img src={graph_violet} className='img-fluid img_graph' />
                                </div>
                            </div>
                        </div>
                        <div className='card card_dise mb-0 card_height_adj'>
                            <div className='card-body ps-3 pt-2 pe-2 pb-4'>
                                <div className='flex_img_div_graph'>
                                
                                    <div className='me-3'>
                                        <p className='dashboard_title_grey mt-3 pb-3'>Provider</p>
                                        <p className='dashboard_count_grey'><span>37</span> No.</p>
                                    
                                    </div>
                                    <img src={graph_violet} className='img-fluid img_graph' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 col-xl-3'>
                        <div className='card card_green_graph mb-4'>
                            <div className='card-body ps-3 pt-2 pe-2 pb-1'>
                                <div className='flex_img_div_graph'>
                                
                                    <div className='me-3'>
                                        <p className='dashboard_title_grey mt-3 pb-3'>Provider loreum<br /> ipsum</p>
                                        <p className='dashboard_count_grey'><span>37</span> No.</p>
                                    
                                    </div>
                                    <img src={icon_plus_file} className='img-fluid img_file_plus' />
                                </div>
                                <img src={img_graph_blue} className='img-fluid img_graph_blue mt-3' />

                            </div>
                        </div>
                      
                    </div>

                    <div className='col-12 col-md-6 col-xl-3'>
                        <div className='card card_dise mb-4 card_height_adj'>
                            <div className='card-body ps-3 pt-2 pe-2 pb-4'>
                                <div className='flex_img_div_graph'>
                                
                                    <div className='me-3'>
                                        <p className='dashboard_title_grey mt-3 pb-3'>Provider</p>
                                        <p className='dashboard_count_grey'><span>37</span> No.</p>
                                    
                                    </div>
                                    <img src={graph_violet} className='img-fluid img_graph' />
                                </div>
                            </div>
                        </div>
                        <div className='card card_dise mb-0 card_height_adj'>
                            <div className='card-body ps-3 pt-2 pe-2 pb-4'>
                                <div className='flex_img_div_graph'>
                                
                                    <div className='me-3'>
                                        <p className='dashboard_title_grey mt-3 pb-3'>Provider</p>
                                        <p className='dashboard_count_grey'><span>37</span> No.</p>
                                    
                                    </div>
                                    <img src={graph_violet} className='img-fluid img_graph' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col-12 col-md-6 col-xl-3'>
                        <div className='card card_yellow_graph mb-4'>
                            <div className='card-body ps-3 pt-2 pe-2 pb-1'>
                                <div className='flex_img_div_graph'>
                                
                                    <div className='me-3'>
                                        <p className='dashboard_title_grey mt-3 pb-3'>Provider loreum<br /> ipsum</p>
                                        <p className='dashboard_count_grey'><span>37</span> No.</p>
                                    
                                    </div>
                                    <img src={img_icon_aud} className='img-fluid img_icon_aud' />
                                </div>
                                <img src={img_graph_yellow} className='img-fluid img_graph_blue mt-3' />

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

export default Dashboard