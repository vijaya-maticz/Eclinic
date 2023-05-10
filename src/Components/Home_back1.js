import React,{useEffect, useRef} from 'react';
import {Link} from 'react-router-dom'
import HomeHeader from './HomeHeader';
import Footer from './Footer';
import Slider from "react-slick";

import pay from '../Assets/Images/card_icon.png'
import shoe_icon_purple from '../Assets/Images/shoe_icon_purple.png'
import icon_star_purple from '../Assets/Images/icon_star_purple.png'
import prof_anim from '../Assets/Images/prof_anim.png'
import icon_info_white from '../Assets/Images/icon_info_white.png'
import icon_purple_music from '../Assets/Images/icon_purple_music.png'

import prof_left from '../Assets/Images/prof_left.png'
import prof_right from '../Assets/Images/prof_right.png'



import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';




const Home = () => {
    const settings = {
        dots: false ,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nav:true,
    vertical:true}
    const slider = useRef(null);

function scroll(e){
    if (slider === null)
        return 0;

    e.wheelDelta > 0 ? (
        slider.current.slickNext()
    ) : (
        slider.current.slickPrev()
    );

};

useEffect(() => {
    window.addEventListener("wheel", scroll,true);

    return () => {
        window.removeEventListener("wheel", scroll, true);
    };
}, []);

   

    const [isanim,setIsanim] = useState(false);
    const [isanim1,setIsanim1] = useState(false);
    const [isanim2,setIsanim2] = useState(false);
    const [isscroll,setIsscroll] = useState(false);


    const [mousecount,setMousecount] = useState(0);

    const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(20 * 2);
  });

  

    return(
    <div id='home'>
      
       <div className='banner'>
        <div className="home_only_head">
       <HomeHeader />
       </div>
       <div className='banner_contn'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-8 col-lg-7 col-xl-5 mx-auto'>
                    <p className='banner_thick_font'>Don't <span>Hesitate</span> With Seek</p>
              <p className='banner_lit_font'>we are blockchain networked web doctor, so all your data will be secured blockchain</p>
          
                    </div>
                </div>

                <div className='row mt-4'>
                <div className='col-12 col-md-7 col-lg-6 col-xl-4 mx-auto'>
                <div className='text-center'>
            <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Type your need here" aria-label="inputtext" aria-describedby="basic-addon3" />
                    <div className="input-group-append">
                        <span className="input-group-text p-0" id="basic-addon3">
                        <button to="/" className='btn btn-purple-fill'>Search</button>
                        </span>
                    </div>
                    </div>
              <p className='banner_lit_font_grey'>Lorem Ipsum is simply dummy text of the printing and types</p>

            </div>
            </div>
                </div>
            
            </div>
            </div>
       </div>
    
       <div className='team_sec homebg'>
            <div className='container'>
            <div className='row'>
                    <div className='col-12 col-md-8 col-lg-7 col-xl-5 mx-auto'>
                    <p className='banner_thick_font'>Get Medical  <span>Treatment</span></p>
              <p className='banner_lit_font'>Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum has been the industry'</p>
          
                    </div>
                </div>
                <Slider {...settings} ref={slider}>
      <div>
      <div className='vide_whole_height over_hiden'>
                <div className="pt-5 video_sec animated opacity_1">
                <div className='card video_card card_left_top'>
                            <div className='card-body'>
                                <div className='d-flex align-items-center justify-content-between'>
                                <i className="fa fa-check-circle purple_check" aria-hidden="true"></i>
                               <p className='card_p_grey'>Web 3.0</p>
                                </div>
                                <div className='text-right mt-5'>
                                    <img src={pay} className='img-fluid card_icon_purple' alt="card"/>
                                </div>
                                <p className='card_desc_grey mb-2'>Loreum</p>
                                <p className='card_title_grey mb-1'>Fillup</p>
                                    <div className='pb-2'>
                                <div className="progress-div" style={{ width: "100%" }}>
        <div style={{ width: `${value}px` }} className="progress animated" />
      </div>
      </div>
                                {/* <div className="progress_div">
								<span className="progress">
									<span className="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" aria-label="Progress"></span>
								  </span>
								<span className="progress_text">200+</span>
							</div> */}

                            </div>
                </div>

                <div className='card video_card card_left_bottom'>
                            <div className='card-body'>
                                
                                <div className='text-center'>
                                    <div className='purple_img_bg mx-auto mb-2'>
                                    <img src={shoe_icon_purple} className='img-fluid shoe_icon_purple' alt="card"/>
                                    </div>
                                </div>
                                <p className='card_desc_grey_bold mb-1 text-center'>Pharma</p>

                                <p className='card_desc_grey text-center'>Loruem ipsm</p>
           
                            
                            </div>
                </div>

                <div className='card video_card card_right_top'>
                            <div className='card-body'>
                                
                                <div className='text-center'>
                                    <div className='purple_img_bg mx-auto mb-2'>
                                    <img src={icon_star_purple} className='img-fluid shoe_icon_purple' alt="card"/>
                                    </div>
                                </div>
                                <p className='card_desc_grey_bold  text-center'>Pharma</p>

           
                            
                            </div>
                </div>
                <div className='card video_card card_right_middle'>
                            <div className='card-body'>
                                <div className='d-flex align-items-center justify-content-between'>
                              <div className='d-flex align-items-center'>
                                <div className='prof_overlap_sec'>
                                    <div className='icon_parent_violet'>
                                    <img src={icon_info_white} className='img-fluid info_icon_white' alt="card"/>
                                    

                                  
                                    </div>
                                    <img src={prof_anim} className='img-fluid prof_icon_pur' alt="card"/>
                                    </div>

                                    <div className='ms-3'>
                                <p className='card_desc_grey_bold'>Select</p>

                                <p className='card_title_grey mb-1'>Categories</p>

                                </div>
                                </div>
                                <div className='bell_sec_img'>
                        <i className="fa fa-bell bell_green" aria-hidden="true"></i>

                                    <span className='yellow_dot_noti'></span>
                                </div>
           
                                </div>
                            </div>
                </div>

              
                
                <div className='card video_card card_right_bottom'>
                            <div className='card-body'>
                                
                                <div className='text-center'>
                                    <div className='purple_img_bg mx-auto mb-2'>
                                    <img src={icon_purple_music} className='img-fluid shoe_icon_purple' alt="card"/>
                                    </div>
                                </div>
                                <p className='card_desc_grey_bold mb-1 text-center'>24/7</p>

                                <p className='card_desc_grey text-center'>Loruem</p>
           
                            
                            </div>
                </div>

                <div className='card video_card card_center_bottom'>
                            <div className='card-body'>
                                
                                <div className='text-center'>
                                    <div className='img_over_prof mb-3'>
                                    <img src={prof_left} className='img-fluid prof_left' alt="card"/>
                                    <img src={prof_left} className='img-fluid prof_right' alt="card"/>
                                   
                                   </div>
                                </div>
                                <p className='card_desc_grey_bold mb-1 text-center'>Diagnosis</p>

                                <p className='card_title_grey mb-0 text-center'>1000<sup>+</sup></p>
           
                            
                            </div>
                </div>


                <div className='row'>
                    <div className='col-12 col-md-5 col-lg-4 col-xl-3 mx-auto'>
                        <div className='card video_card card_vide_pos'>
                            <div className='card-body p-0'>
                           
                            </div>

                        </div>
                    </div>

                </div>
                </div>
             
                </div>
      </div>
      <div>
      <div className='vide_whole_height over_hiden'>
               
               <div className="pt-5 video_sec animated opacity_1">
               <div className='card video_card card_left_top'>
                           <div className='card-body'>
                               <div className='d-flex align-items-center justify-content-between'>
                               <i className="fa fa-check-circle purple_check" aria-hidden="true"></i>
                              <p className='card_p_grey'>Web 3.0</p>
                               </div>
                               <div className='text-right mt-5'>
                                   <img src={pay} className='img-fluid card_icon_purple' alt="card"/>
                               </div>
                               <p className='card_desc_grey mb-2'>Stored on</p>
                               <p className='card_title_grey mb-1'>Blockchain</p>
                                   <div className='pb-2'>
                               <div className="progress-div" style={{ width: "100%" }}>
       <div style={{ width: `${value}px` }} className="progress animated" />
     </div>
     </div>
                               {/* <div className="progress_div">
                               <span className="progress">
                                   <span className="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" aria-label="Progress"></span>
                                 </span>
                               <span className="progress_text">200+</span>
                           </div> */}

                           </div>
               </div>

               <div className='card video_card card_left_bottom'>
                           <div className='card-body'>
                               
                               <div className='text-center'>
                                   <div className='purple_img_bg mx-auto mb-2'>
                                   <img src={shoe_icon_purple} className='img-fluid shoe_icon_purple' alt="card"/>
                                   </div>
                               </div>
                               <p className='card_desc_grey_bold mb-1 text-center'>Pharma</p>

                               <p className='card_desc_grey text-center'>Loruem ipsm</p>
          
                           
                           </div>
               </div>

               <div className='card video_card card_right_top'>
                           <div className='card-body'>
                               
                               <div className='text-center'>
                                   <div className='purple_img_bg mx-auto mb-2'>
                                   <img src={icon_star_purple} className='img-fluid shoe_icon_purple' alt="card"/>
                                   </div>
                               </div>
                               <p className='card_desc_grey_bold  text-center'>Pharma</p>

          
                           
                           </div>
               </div>
               <div className='card video_card card_right_middle'>
                           <div className='card-body'>
                               <div className='d-flex align-items-center justify-content-between'>
                             <div className='d-flex align-items-center'>
                               <div className='prof_overlap_sec'>
                                   <div className='icon_parent_violet'>
                                   <img src={icon_info_white} className='img-fluid info_icon_white' alt="card"/>
                                   

                                 
                                   </div>
                                   <img src={prof_anim} className='img-fluid prof_icon_pur' alt="card"/>
                                   </div>

                                   <div className='ms-3'>
                               <p className='card_desc_grey_bold'>Successfully</p>

                               <p className='card_title_grey mb-1'>Submitted</p>

                               </div>
                               </div>
                               <div className='bell_sec_img'>
                       <i className="fa fa-bell bell_green" aria-hidden="true"></i>

                                   <span className='yellow_dot_noti'></span>
                               </div>
          
                               </div>
                           </div>
               </div>

             
               
               <div className='card video_card card_right_bottom'>
                           <div className='card-body'>
                               
                               <div className='text-center'>
                                   <div className='purple_img_bg mx-auto mb-2'>
                                   <img src={icon_purple_music} className='img-fluid shoe_icon_purple' alt="card"/>
                                   </div>
                               </div>
                               <p className='card_desc_grey_bold mb-1 text-center'>24/7</p>

                               <p className='card_desc_grey text-center'>Loruem</p>
          
                           
                           </div>
               </div>

               <div className='card video_card card_center_bottom'>
                           <div className='card-body'>
                               
                               <div className='text-center'>
                                   <div className='img_over_prof mb-3'>
                                   <img src={prof_left} className='img-fluid prof_left' alt="card"/>
                                   <img src={prof_left} className='img-fluid prof_right' alt="card"/>
                                  
                                  </div>
                               </div>
                               <p className='card_desc_grey_bold mb-1 text-center'>Secured</p>

                               <p className='card_title_grey mb-0 text-center'>Information</p>
          
                           
                           </div>
               </div>


               <div className='row'>
                   <div className='col-12 col-md-5 col-lg-4 col-xl-3 mx-auto'>
                       <div className='card video_card card_vide_pos'>
                           <div className='card-body p-0'>
                          
                           </div>

                       </div>
                   </div>

               </div>
               </div>
             
               </div>
      </div>
      <div>
      <div  className='vide_whole_height over_hiden'>
              
              <div className="pt-5 video_sec animated opacity_1">
              <div className='card video_card card_left_top'>
                          <div className='card-body'>
                              <div className='d-flex align-items-center justify-content-between'>
                              <i className="fa fa-check-circle purple_check" aria-hidden="true"></i>
                             <p className='card_p_grey'>Web 3.0</p>
                              </div>
                              <div className='text-right mt-5'>
                                  <img src={pay} className='img-fluid card_icon_purple' alt="card"/>
                              </div>
                              <p className='card_desc_grey mb-2'>Loreum</p>
                              <p className='card_title_grey mb-1'>Payment option</p>
                                  <div className='pb-2'>
                              <div className="progress-div" style={{ width: "100%" }}>
      <div style={{ width: `${value}px` }} className="progress animated" />
    </div>
    </div>
                              {/* <div className="progress_div">
                              <span className="progress">
                                  <span className="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" aria-label="Progress"></span>
                                </span>
                              <span className="progress_text">200+</span>
                          </div> */}

                          </div>
              </div>

              <div className='card video_card card_left_bottom'>
                          <div className='card-body'>
                              
                              <div className='text-center'>
                                  <div className='purple_img_bg mx-auto mb-2'>
                                  <img src={shoe_icon_purple} className='img-fluid shoe_icon_purple' alt="card"/>
                                  </div>
                              </div>
                              <p className='card_desc_grey_bold mb-1 text-center'>Pharma</p>

                              <p className='card_desc_grey text-center'>Loruem ipsm</p>
         
                          
                          </div>
              </div>

              <div className='card video_card card_right_top'>
                          <div className='card-body'>
                              
                              <div className='text-center'>
                                  <div className='purple_img_bg mx-auto mb-2'>
                                  <img src={icon_star_purple} className='img-fluid shoe_icon_purple' alt="card"/>
                                  </div>
                              </div>
                              <p className='card_desc_grey_bold  text-center'>Pharma</p>

         
                          
                          </div>
              </div>
              <div className='card video_card card_right_middle'>
                          <div className='card-body'>
                              <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                              <div className='prof_overlap_sec'>
                                  <div className='icon_parent_violet'>
                                  <img src={icon_info_white} className='img-fluid info_icon_white' alt="card"/>
                                  

                                
                                  </div>
                                  <img src={prof_anim} className='img-fluid prof_icon_pur' alt="card"/>
                                  </div>

                                  <div className='ms-3'>
                              <p className='card_desc_grey_bold'>Medical</p>

                              <p className='card_title_grey mb-1'>Certificate</p>

                              </div>
                              </div>
                              <div className='bell_sec_img'>
                      <i className="fa fa-bell bell_green" aria-hidden="true"></i>

                                  <span className='yellow_dot_noti'></span>
                              </div>
         
                              </div>
                          </div>
              </div>

            
              
              <div className='card video_card card_right_bottom'>
                          <div className='card-body'>
                              
                              <div className='text-center'>
                                  <div className='purple_img_bg mx-auto mb-2'>
                                  <img src={icon_purple_music} className='img-fluid shoe_icon_purple' alt="card"/>
                                  </div>
                              </div>
                              <p className='card_desc_grey_bold mb-1 text-center'>24/7</p>

                              <p className='card_desc_grey text-center'>Loruem</p>
         
                          
                          </div>
              </div>

              <div className='card video_card card_center_bottom'>
                          <div className='card-body'>
                              
                              <div className='text-center'>
                                  <div className='img_over_prof mb-3'>
                                  <img src={prof_left} className='img-fluid prof_left' alt="card"/>
                                  <img src={prof_left} className='img-fluid prof_right' alt="card"/>
                                 
                                 </div>
                              </div>
                              <p className='card_desc_grey_bold mb-1 text-center'>Blockchain</p>

                              <p className='card_title_grey mb-0 text-center'>Certificate</p>
         
                          
                          </div>
              </div>


              <div className='row'>
                  <div className='col-12 col-md-5 col-lg-4 col-xl-3 mx-auto'>
                      <div className='card video_card card_vide_pos'>
                          <div className='card-body p-0'>
                          
                          </div>

                      </div>
                  </div>

              </div>
              </div>
              </div>
      </div>
     
    </Slider>
              
             
             

                <div className='row'>
                    <div className='col-12 col-md-8 col-lg-7 col-xl-5 mx-auto'>
                    <div className='text-center py-5'>
                <Link to="/treatments" className='btn btn-purple'>Get Started</Link>
                <p class="banner_lit_font">Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum has been the industry'</p>
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
      

    </div>
    )
}

export default Home