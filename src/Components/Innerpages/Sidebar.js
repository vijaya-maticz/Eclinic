import React,{ useState }  from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../Assets/Images/logo.png'
import { NavLink, Link } from 'react-router-dom';
import bar from '../../Assets/Images/menu.png'

import ceti from '../../Assets/Images/ceti.png'
import treat from '../../Assets/Images/treat.png'
import dash from '../../Assets/Images/dash.png'
import myacc from '../../Assets/Images/myacc.png'
import trans from '../../Assets/Images/trans.png'

// import treatment from '../../Assets/Images/treatment.png'
// import disease1 from '../../Assets/Images/disease1.png'
// import disease2 from '../../Assets/Images/disease2.png'
// import disease3 from '../../Assets/Images/disease3.png'
// import disease4 from '../../Assets/Images/disease4.png'
// import disease5 from '../../Assets/Images/disease5.png'
// import disease6 from '../../Assets/Images/disease6.png'
import diseaseimg from '../../Assets/Images/user.png'

import img_ad from '../../Assets/Images/img_ad.png'

// import contact from '../../Assets/Images/Admin/contact.png'
// import activesetting from '../../Assets/Images/Admin/activesetting.png'
// import activecontact from '../../Assets/Images/Admin/activecontact.png'





const Sidebar = () =>{
    const[sendIndex, setSendIndex] = useState(0)
    const toggleDrop = (e) =>{
        e.target.nextElementSibling.classList.toggle("d-none")
    }
    const sidetoggle = () =>{
        if(document.getElementById("dashboard").classList.contains("showsidebar")){
            document.getElementById("dashboard").classList.remove("showsidebar")
            document.getElementById("dashboard").classList.add("hidesidebar")
        }
        else if(document.getElementById("dashboard").classList.contains("hidesidebar")){
            document.getElementById("dashboard").classList.remove("hidesidebar")
            document.getElementById("dashboard").classList.add("showsidebar")
        }
    }
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
    return(
      
        <div className="sidebar">
            {/* <div className='text-center py-4'>
            <button className='togglebtn' onClick={() => sidetoggle()} ><img src={hamburgur} className="ham"/></button>
                <img src={logo} className="adminlogo"/>
                </div> */}
        
        <div className='d-flex align-items-center logo_sec_sidebar'>
               <img src={logo} className="adminlogo"/> 

               <div> 
                <Button onClick={() => sidetoggle()}  variant="link" className='text-dark mobiletog ps-0 pe-0'>
               {/* <img src={bar}  className="menuopen"/> */}
               <i className="fa fa-bars menuopen" aria-hidden="true"></i>

                </Button>
                </div>
                </div> 
          
          <div className='sidelist'>
          <div className='menus'>
               <NavLink activeClassName="active"  to={{pathname:"/treatments"}}  state={{ datas: treatments }} className="nounder">
                <img src={treat} className="active" />
                Treatments</NavLink>
                
            </div>
     
            <div className='menus'>
               <NavLink activeClassName="active" to="/certificate"  className="nounder">
                <img src={ceti} className="active"/>
               Certificate</NavLink>
                
            </div>

            <div className='menus'>
               <NavLink activeClassName="active" to="/dashboard"  className="nounder">
                <img src={dash} className="active"/>
               Dashboard</NavLink>
                
            </div>

            <div className='menus'>
               <NavLink activeClassName="active" to="/myaccount"  className="nounder">
                <img src={myacc} className="active"/>
               My Account</NavLink>
                
            </div>

            <div className='menus'>
               <NavLink activeClassName="active" to="/records"  className="nounder">
                <img src={treat} className="active"/>
               Records</NavLink>
                
            </div>

            <div className='menus'>
               <NavLink activeClassName="active" to="/transaction"  className="nounder">
                <img src={trans} className="active"/>
               Transaction</NavLink>
                
            </div>
         
          </div>
           

           <div className='sidebar_ad_div'>
            <div className="card card_ad">
                <div className='card-body'>
                    <div className='d-flex'>
                        <img src={img_ad} className='img-fluid img_ad_over' />
                        <div className='div_margin_ad'>
                            <p className='title_ad_over'>Lorem Ips umissim</p>
                            <p className='desc_ad_over'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Link to="/" class="btn btn-yellow-fill">New</Link>

                        </div>
                    </div>
                </div>
            </div>
           </div>
            
        </div>
       
    )
}

export default Sidebar