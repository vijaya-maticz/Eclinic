import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'
import HomeHeader from './HomeHeader';
import Footer from './Footer';
import $ from 'jquery'
import { Scrollbars } from 'react-custom-scrollbars';
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
import { useState } from 'react';




const Home = () => {
    // function disableScroll() {
    //     // document.body.classList.add("stop-scrolling");
    //     document.body.style.overflow = "hidden";
    // }
    const disableScroll = (event) => {
        document.body.classList.add("stop-scrolling");
      };
    window.jquery = window.$ = $

    const options = {
      
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
       
      
        navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,    
            },
            1200: {
                items:5,
            }
        },
    };

    const [isanim,setIsanim] = useState(false);
    const [isanim1,setIsanim1] = useState(false);
    const [isanim2,setIsanim2] = useState(false);
    const [isscroll,setIsscroll] = useState(false);


    const [mousecount,setMousecount] = useState(0);

    const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(20 * 2);
  });
  
  useEffect(() => {
    var testDiv = document.getElementById("video_sec_full1").scrollTop;

    var elementTop = document.getElementById('video_sec_full').offsetTop;
var divTop = document.getElementById('video_sec').offsetTop;
var divTop2 = document.getElementById('video_sec_1').offsetTop;
var divTop3 = document.getElementById('video_sec_2').offsetTop;


var elementRelativeTop = elementTop - divTop;
var elementRelativeTop1 = elementTop - divTop2;
var elementRelativeTop2 = elementTop - divTop3;


console.log(elementRelativeTop,"elementRelativeTop",elementRelativeTop1,elementRelativeTop2)


    window.addEventListener('scroll', (event) => {

    console.log(testDiv,"testDiv",document.getElementById("video_sec_full").scrollHeight,document.getElementById("video_sec").offsetTop,document.getElementById("video_sec_1").offsetTop,document.getElementById("video_sec_2").offsetTop)

    // if(testDiv > document.getElementById("video_sec").offsetTop + 50 && testDiv < document.getElementById("video_sec_1").offsetTop + 250){
    if(elementRelativeTop > elementRelativeTop1 
        && elementRelativeTop1 >= elementRelativeTop2
        ){

        console.log("one")
        // alert(1)
        setIsanim(true)
        setIsanim1(false)
        setIsanim2(false)
    }
    // else if(testDiv > document.getElementById("video_sec_1").offsetTop + 100  && testDiv < document.getElementById("video_sec_2").offsetTop + 250)
    // && testDiv < document.getElementById("video_sec").offsetTop + 400
    else if(elementRelativeTop1 >= elementRelativeTop2  
        // && elementRelativeTop2 < elementRelativeTop
        )
    
        {
        console.log("two")

        // alert(2)

        //     console.log("2nd eve")

        // setMousecount(2)

        setIsanim1(true)
        setIsanim(false)
        setIsanim2(false)
        // document.getElementById("video_2").play();

        }
    })
    },[]);
// useEffect(() => {
//     $( "#video_sec_full" ).on( "scroll", function() { 
//         document.body.style.overflow = 'hidden';
       
//       } );
// //     document.querySelector('#video_sec_full').addEventListener('wheel', preventScroll, {passive: false});

// // function preventScroll(e){
// //     e.preventDefault();
// //     e.stopPropagation();

// //     return false;
// // }
//     window.addEventListener('scroll', (event) => {
       
       
//         if(window.pageYOffset > document.getElementById("video_sec").offsetTop + 150 && window.pageYOffset < document.getElementById("video_sec").offsetTop + 250)
//         {
//         //     console.log("1st eve")
//         // setMousecount(1) 

//         setIsanim(true)
//         setIsanim1(false)
//         setIsanim2(false)
//         // document.getElementById("video_1").play();
//         }
//         else if(window.pageYOffset > document.getElementById("video_sec").offsetTop + 175 && window.pageYOffset < document.getElementById("video_sec").offsetTop + 400)
//         {
//         //     console.log("2nd eve")

//         // setMousecount(2)

//         setIsanim1(true)
//         setIsanim(false)
//         setIsanim2(false)
//         // document.getElementById("video_2").play();

//         }
//         else if(window.pageYOffset > document.getElementById("video_sec").offsetTop + 200)
//         {
            
//         //     console.log("3rd eve")

//         // setMousecount(3)

//         setIsanim2(true)
//         setIsanim(false)
//         setIsanim1(false)
//         // document.getElementById("video_3").play();

//         }

       

//         console.log(mousecount,"mousecount");

        
//         //     if(mousecount == 1)
//         //     {
//         //         setIsanim(true)
//         //         setIsanim1(false)
//         //         setIsanim2(false)
//         //     }
//         //     else if(mousecount == 2)
//         //     {
//         //         setIsanim1(true)
//         //         setIsanim(false)
//         //         setIsanim2(false)
//         //     }
//         //    else if(mousecount == 3)
//         //     {
//         //         setIsanim2(true)
//         //         setIsanim(false)
//         //         setIsanim1(false)
//         //     }
            
           
//             // window.scrollTo(0,document.getElementById("video_sec_full").offsetTop+400);

//             // document.body.classList.add("over_hidden");
//         }
//         // else
//         // {
//         //     document.body.classList.remove("over_hidden");

//         // }

//         // else if(window.pageYOffset > document.getElementById("video_sec_1").offsetTop + 100)
//         // {
//         //     setIsanim1(true)
//         // }
//         // else if(window.pageYOffset > document.getElementById("video_sec_2").offsetTop + 100)
//         // {
//         //     setIsanim2(true)
//         // }
       
     
//       );
  
//   }, []);
//     window.addEventListener('scroll', (event) => {
//         console.log(window.pageYOffset,document.getElementById("video_sec").offsetTop,"event");


//     if(window.pageYOffset > document.getElementById("video_sec_1").offsetTop + 100)
//         {
//             setIsanim1(true)
//             setIsanim(false)
//             setIsanim2(false)
//             // window.scrollTo(0,document.getElementById("video_sec_full").offsetTop+400);

//             // window.scrollTo(0,document.getElementById("video_sec_1").offsetTop);
//             // window.scrollTo(0,document.getElementById("video_sec").offsetTop+400);

//             // document.body.classList.add("over_hidden");


//         }
//         // else
//         // {
//         //     document.body.classList.remove("over_hidden");

//         // }
      
       
     
//       });
  
//   }, []);

//   useEffect(() => {
//     window.addEventListener('scroll', (event) => {
//         console.log(window.pageYOffset,document.getElementById("video_sec").offsetTop,"event");

     
//      if(window.pageYOffset > document.getElementById("video_sec_2").offsetTop + 100)
//         {
//             setIsanim2(true)
//             setIsanim(false)
//             setIsanim1(false)
//             // window.scrollTo(0,document.getElementById("video_sec_full").offsetTop+400);

//             // window.scrollTo(0,document.getElementById("video_sec_2").offsetTop);
//             // window.scrollTo(0,document.getElementById("video_sec").offsetTop+400);

//             // document.body.classList.add("over_hidden");

//         }
//     //    else
//     //    {
//     //     document.body.classList.remove("over_hidden");

//     //    }
     
//       });
  
//   }, []);
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
                    <p className='banner_thick_font'>Get Medical  <span>Treatment</span> & <span>Certificate</span></p>
              <p className='banner_lit_font'>Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum has been the industry'</p>
          
                    </div>
                </div>
                <div className='mobile_view_design'>
                    <div className='images_sec'></div>
                </div>
               
                <div  id="video_sec_full" className={isanim || isanim1 || isanim2?'vide_whole_height over_hiden':"vide_whole_height"}>
                <Scrollbars id="video_sec_full1" style={{  height: 800 }} thumbMinSize={0}
                // onScroll={scrollsection}
              renderThumbVertical={({style, ...props}) =>
              <div {...props}  style={{...style, width: '3px', borderRadius: '4px', backgroundColor: '#000'}}/>
          }
                
                >
                <div id="video_sec" className={isanim?"pt-5 video_sec animated opacity_1":"pt-5 video_sec opacity_0"}>
                <div className='card video_card card_left_top'>
                            <div className='card-body'>
                                <div className='d-flex align-items-center justify-content-between'>
                                <i className="fa fa-check-circle purple_check" aria-hidden="true"></i>
                               <p className='card_p_grey'>Web 3.0</p>
                                </div>
                                <div className='text-right mt-lg-5'>
                                    <img src={pay} className='img-fluid card_icon_purple' alt="card"/>
                                </div>
                                <p className='card_desc_grey mb-2'>Loreum</p>
                                <p className='card_title_grey mb-1'>Fillup</p>
                                    <div className='pb-2'>
                                <div className="progress-div" style={{ width: "100%" }}>
        <div style={{ width: `${value}px` }} className={isanim?"progress animated":"progress"} />
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
                        <div className='video_card card_vide_pos'>
                            <div className='card-body p-0'>
                          
                            </div>

                        </div>
                    </div>

                </div>
                </div>
                <div id="video_sec_1" className={isanim1?"pt-5 video_sec animated opacity_1":"pt-5 video_sec opacity_0"}>
                <div className='card video_card card_left_top'>
                            <div className='card-body'>
                                <div className='d-flex align-items-center justify-content-between'>
                                <i className="fa fa-check-circle purple_check" aria-hidden="true"></i>
                               <p className='card_p_grey'>Web 3.0</p>
                                </div>
                                <div className='text-right mt-lg-5'>
                                    <img src={pay} className='img-fluid card_icon_purple' alt="card"/>
                                </div>
                                <p className='card_desc_grey mb-2'>Stored on</p>
                                <p className='card_title_grey mb-1'>Blockchain</p>
                                    <div className='pb-2'>
                                <div className="progress-div" style={{ width: "100%" }}>
        <div style={{ width: `${value}px` }} className={isanim1?"progress animated":"progress"} />
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
                        <div className='video_card card_vide_pos'>
                            <div className='card-body p-0'>
                          
                            </div>

                        </div>
                    </div>

                </div>
                </div>
                <div id="video_sec_2" className={isanim2?"pt-5 video_sec animated opacity_1":"pt-5 video_sec opacity_0"}>
                <div className='card video_card card_left_top'>
                            <div className='card-body'>
                                <div className='d-flex align-items-center justify-content-between'>
                                <i className="fa fa-check-circle purple_check" aria-hidden="true"></i>
                               <p className='card_p_grey'>Web 3.0</p>
                                </div>
                                <div className='text-right mt-lg-5'>
                                    <img src={pay} className='img-fluid card_icon_purple' alt="card"/>
                                </div>
                                <p className='card_desc_grey mb-2'>Loreum</p>
                                <p className='card_title_grey mb-1'>Payment option</p>
                                    <div className='pb-2'>
                                <div className="progress-div" style={{ width: "100%" }}>
        <div style={{ width: `${value}px` }} className={isanim2?"progress animated":"progress"} />
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
                        <div className='video_card card_vide_pos'>
                            <div className='card-body p-0'>
                           
                            </div>

                        </div>
                    </div>

                </div>
                </div>
                </Scrollbars>
                </div>
            

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