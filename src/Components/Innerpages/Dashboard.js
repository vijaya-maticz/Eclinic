import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import HomeHeader from '../HomeHeader';
import Footer from '../Footer';
import Sidebar from './Sidebar';
// import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";
import treatment from '../../Assets/Images/treatment.png'
import graph_violet from '../../Assets/Images/graph_violet.png'
import icon_plus_file from '../../Assets/Images/icon_plus_file.png'
import img_graph_blue from '../../Assets/Images/img_graph_blue.png'
import img_graph_yellow from '../../Assets/Images/img_graph_yellow.png'
import img_icon_aud from '../../Assets/Images/img_icon_aud.png'



import feather_check from "../../Assets/Images/feather_check.svg"




const Dashboard = () =>{
  
//   const [chart,setchart] = useState(data)

  const data =  {
 options: {
              chart: {
                offsetX: 0,
                offsetY: 0,
                parentHeightOffset: 0,
                toolbar: {
                    show: false,
                },
                type: 'bar',
                height: 200
              },
              
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '45%',
                //   endingShape: 'rounded',
                //   borderRadius: 20,
                //   borderRadiusApplication: 'end',
                //   borderRadiusWhenStacked: 'all',
                //   borderRadius:20,
                //   borderRadiusApplication: 'end',
                //   borderRadiusWhenStacked: 'last',
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['#3D3B3B']
              },
              
            //   xaxis: {
            //     labels: {
            //         show: false,
            //     }
              
            //   },
            xaxis: {
              
                labels: {
                    show: false,
                 
                },
             
                axisBorder: {
                    show: false,
                    color: '#d4c689',
                    height: 1,
                    width: '100%',
                    offsetX: 0,
                    offsetY: 0
                },
                axisTicks: {
                    show: false,
                  },
            
                tooltip: {
                    enabled: false,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                      fontSize: 0,
                      fontFamily: 0,
                    },
                },
            },
          
            
              yaxis: {
                labels: {
                    show: false,
                }
              },

              grid: {
                show: true,
                borderColor: '#d4c689',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: true
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: -15
                },  
            },
              fill: {
                opacity: 1,
                colors: ['#3D3B3B']
              },
              tooltip: {
               
                    enabled: false,
                    shared: false,
                    intersect: false
              }
            },
  series: [{
              name: 'Net Profit',
              data: [44, 55, 57, 56, 61, 58, 63, 60]
            }],
};



const data1 =  {
    options: {
                 chart: {
                   offsetX: 0,
                   offsetY: 0,
                   parentHeightOffset: 0,
                   toolbar: {
                       show: false,
                   },
                   type: 'bar',
                   height: 200
                 },
                
                 plotOptions: {
                   bar: {
                     horizontal: false,
                     columnWidth: '45%',
                   //   endingShape: 'rounded',
                   //   borderRadius: 20,
                   //   borderRadiusApplication: 'end',
                   //   borderRadiusWhenStacked: 'all',
                   //   borderRadius:20,
                   //   borderRadiusApplication: 'end',
                   //   borderRadiusWhenStacked: 'last',
                   },
                 },
                 dataLabels: {
                   enabled: false
                 },
                 stroke: {
                   show: true,
                   width: 2,
                   colors: ['#174375'],
                   curve: 'straight'
                 },
                 
               //   xaxis: {
               //     labels: {
               //         show: false,
               //     }
                 
               //   },
               xaxis: {
                 
                   labels: {
                       show: false,
                    
                   },
                
                   axisBorder: {
                       show: false,
                       color: '#1abbb9',
                       height: 1,
                       width: '100%',
                       offsetX: 0,
                       offsetY: 0
                   },
                   axisTicks: {
                    show: false,
                  },
               
                   tooltip: {
                       enabled: true,
                       formatter: undefined,
                       offsetY: 0,
                       style: {
                         fontSize: 0,
                         fontFamily: 0,
                       },
                   },
               },
             
               
                 yaxis: {
                   labels: {
                       show: false,
                   }
                 },
   
                 grid: {
                   show: true,
                   borderColor: '#1abbb9',
                   strokeDashArray: 0,
                   position: 'back',
                   xaxis: {
                       lines: {
                           show: true
                       }
                   },   
                   yaxis: {
                       lines: {
                           show: true
                       }
                   },  
                   row: {
                       colors: undefined,
                       opacity: 0.5
                   },  
                   column: {
                       colors: undefined,
                       opacity: 0.5
                   },  
                   padding: {
                       top: 0,
                       right: 0,
                       bottom: 0,
                       left: -15
                   },  
               },
                 fill: {
                   opacity: 1,
                   colors: ['#3D3B3B']
                 },
                 tooltip: {
                  
                       enabled: false,
                       shared: false,
                       intersect: false
                 }
               },
               series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
   };

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
                <div className='row justify-content-between'>
                    <div className='col-12 col-md-6 col-lg-7 dashbanner'>
                        <div className='p-4 p-lg-5 pb-lg-3 pt-lg-4 '>
                        <p className='card_text_white_big dashb_titlr_w'>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                        <p className='card_tect_grrey_sm_card mt-2 dashb_desc_w'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
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
                    <div className='col-12 col-md-6 col-lg-5 sec_img_dots'>
                        <img src={treatment} className='img-fluid px-2 px-xl-5' />
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
                                <Chart options={data1?.options}
                          series={data1?.series}  type="line" height={180} />
                                {/* <img src={img_graph_blue} className='img-fluid img_graph_blue mt-3' /> */}

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
                                 <Chart options={data?.options}
                          series={data?.series}  type="bar" height={180} />
</div>
    
                                {/* <img src={img_graph_yellow} className='img-fluid img_graph_blue mt-3' /> */}

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