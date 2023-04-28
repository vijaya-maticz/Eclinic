import React,{useState, createContext} from 'react';
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
import diseaseimg from '../../Assets/Images/user.png'

import TreatmentOff from '../Offcanvas/TreatmentOff';


export const TreatContext = createContext()
const Treatments = (props) =>{
    const[show, setShow] = useState(false)
    const[sendIndex, setSendIndex] = useState(0)
    const[checked, setChecked] = useState(false)

    const treatments = [
        {
            title:"Patient - Weight Loss Treatment",
            description:"Weight loss tablets can help you achieve a healthy weight. In order to benefit from the treatment, you also need to stick to a healthy low calorie diet. seek advice from us on slimming pills online - eClinic.ie offers consultations for the weight loss treatments Xenical and Orlistat. (Xenical is the branded version of Orlistat and both work in the same way).",
            h4:"How do slimming pills work?",
            description2:"The weight loss treatments Orlistat and Xenical prevent your body digesting all of the fat you eat. They thereby reduce the amount of calories you take in from your food. The tablets are not very effective on their own but can help you lose weight quicker, if you stick to a low calorie diet and avoid snacks between meals. To consult, fill in our brief medical questionnaire. For additional support and information please review our forum.",
            docname:"Dr. Jody",
            qualification:"M.D., MRCGP, FRACGP",
            fee:"25",
            diseaseimg:diseaseimg
        },
        {
            title:"Contraceptive Pill Treatment",
            description:"Weight loss tablets can help you achieve a healthy weight. In order to benefit from the treatment, you also need to stick to a healthy low calorie diet. seek advice from us on slimming pills online - eClinic.ie offers consultations for the weight loss treatments Xenical and Orlistat. (Xenical is the branded version of Orlistat and both work in the same way).",
            h4:"How do slimming pills work?",
            description2:"The weight loss treatments Orlistat and Xenical prevent your body digesting all of the fat you eat. They thereby reduce the amount of calories you take in from your food. The tablets are not very effective on their own but can help you lose weight quicker, if you stick to a low calorie diet and avoid snacks between meals. To consult, fill in our brief medical questionnaire. For additional support and information please review our forum.",
            docname:"Dr. Jhon",
            qualification:"M.D., MRCGP, FRACGP",
            fee:"28",
            diseaseimg:diseaseimg
        },
        {
            title:"Bacterial Vaginosis Treatment",
            description:"Weight loss tablets can help you achieve a healthy weight. In order to benefit from the treatment, you also need to stick to a healthy low calorie diet. seek advice from us on slimming pills online - eClinic.ie offers consultations for the weight loss treatments Xenical and Orlistat. (Xenical is the branded version of Orlistat and both work in the same way).",
            h4:"How do slimming pills work?",
            description2:"The weight loss treatments Orlistat and Xenical prevent your body digesting all of the fat you eat. They thereby reduce the amount of calories you take in from your food. The tablets are not very effective on their own but can help you lose weight quicker, if you stick to a low calorie diet and avoid snacks between meals. To consult, fill in our brief medical questionnaire. For additional support and information please review our forum.",
            docname:"Dr. Jody",
            qualification:"M.D., MRCGP, FRACGP",
            fee:"26",
            diseaseimg:diseaseimg
        },
        {
            title:"Astma Treatment",
            description:"Weight loss tablets can help you achieve a healthy weight. In order to benefit from the treatment, you also need to stick to a healthy low calorie diet. seek advice from us on slimming pills online - eClinic.ie offers consultations for the weight loss treatments Xenical and Orlistat. (Xenical is the branded version of Orlistat and both work in the same way).",
            h4:"How do slimming pills work?",
            description2:"The weight loss treatments Orlistat and Xenical prevent your body digesting all of the fat you eat. They thereby reduce the amount of calories you take in from your food. The tablets are not very effective on their own but can help you lose weight quicker, if you stick to a low calorie diet and avoid snacks between meals. To consult, fill in our brief medical questionnaire. For additional support and information please review our forum.",
            docname:"Dr. Jody",
            qualification:"M.D., MRCGP, FRACGP",
            fee:"20",
            diseaseimg:diseaseimg
        },
        {
            title:"Migraine Treatment",
            description:"Weight loss tablets can help you achieve a healthy weight. In order to benefit from the treatment, you also need to stick to a healthy low calorie diet. seek advice from us on slimming pills online - eClinic.ie offers consultations for the weight loss treatments Xenical and Orlistat. (Xenical is the branded version of Orlistat and both work in the same way).",
            h4:"How do slimming pills work?",
            description2:"The weight loss treatments Orlistat and Xenical prevent your body digesting all of the fat you eat. They thereby reduce the amount of calories you take in from your food. The tablets are not very effective on their own but can help you lose weight quicker, if you stick to a low calorie diet and avoid snacks between meals. To consult, fill in our brief medical questionnaire. For additional support and information please review our forum.",
            docname:"Dr. Jody",
            qualification:"M.D., MRCGP, FRACGP",
            fee:"15",
            diseaseimg:diseaseimg
        },
        {
            title:"Acne Treatment",
            description:"Weight loss tablets can help you achieve a healthy weight. In order to benefit from the treatment, you also need to stick to a healthy low calorie diet. seek advice from us on slimming pills online - eClinic.ie offers consultations for the weight loss treatments Xenical and Orlistat. (Xenical is the branded version of Orlistat and both work in the same way).",
            h4:"How do slimming pills work?",
            description2:"The weight loss treatments Orlistat and Xenical prevent your body digesting all of the fat you eat. They thereby reduce the amount of calories you take in from your food. The tablets are not very effective on their own but can help you lose weight quicker, if you stick to a low calorie diet and avoid snacks between meals. To consult, fill in our brief medical questionnaire. For additional support and information please review our forum.",
            docname:"Dr. Jody",
            qualification:"M.D., MRCGP, FRACGP",
            fee:"35",
            diseaseimg:diseaseimg
        },
    ]
  
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
    return(
        <>
        <div id="dashboard" className='showsidebar'>
            <TreatContext.Provider  value={treatments[sendIndex]}> 
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
                <div className='row justify-content-between' >
                    <div className='col-12 col-md-7 col-lg-6 col-xl-6 sec_desc_pr_card'>
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
                    <div className='col-12 col-md-5 col-lg-6 col-xl-5 sec_img_dots'>
                        <img src={treatment} className='img-fluid px-2 px-xl-5' />
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