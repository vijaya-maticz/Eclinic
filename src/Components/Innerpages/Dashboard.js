import React,{useState} from 'react';
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';
import {FloatingLabel, Form,Button} from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import { Bar } from "react-chartjs-2";
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Treatment from '../Offcanvas/Treatments';
const Dashboard = () =>{
    const columns = [
        {
            name:"Id",
            reorder: true,
            cell: (data) =>(data.id)
        },
        {
            name:"Reservation Id",
            cell: (data) =>(data.reserveid)           
        },
        {
            name:"Room name",
            cell: (data) =>(data.Roomname)          
        },
        {
            name:"User Name",
            cell: (data) =>(data.username)
        },
        {
            name:"Email Id",
            cell: (data) =>(data.emailid)
        },
        {
            name:"User Date From",
            cell: (data) =>(data.userdatafrom)
        },
        {
            name:"User Date To",
            cell: (data) =>(data.userdatato)
        },
        {
            name:"Id Document",
            cell: (data) =>(data.iddocuments)
        },
        {
            name:"Status",
            cell: (data) =>(data.staus)
        }
    ]
    const data = [
        {
            id:1,
            reserveid:"1002",
            Roomname:"A Unique Studio",
            username:"David" ,
            emailid:"example@gmail.com",
            userdatafrom:"16.09.2022",
            userdatato:"22.09.2022",
            iddocuments:"file.pdf",
            staus:"approved"
        },
        {
            id:2,
            reserveid:"1002",
            Roomname:"A Unique Studio",
            username:"David" ,
            emailid:"example@gmail.com",
            userdatafrom:"16.09.2022",
            userdatato:"22.09.2022",
            iddocuments:"file.pdf",
            staus:"approved"
        },
        {
            id:3,
            reserveid:"1002",
            Roomname:"A Unique Studio",
            username:"David" ,
            emailid:"example@gmail.com",
            userdatafrom:"16.09.2022",
            userdatato:"22.09.2022",
            iddocuments:"file.pdf",
            staus:"approved"
        },
        {
            id:4,
            reserveid:"1002",
            Roomname:"A Unique Studio",
            username:"David" ,
            emailid:"example@gmail.com",
            userdatafrom:"16.09.2022",
            userdatato:"22.09.2022",
            iddocuments:"file.pdf",
            staus:"approved"
        }
     
    ]
  

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const datas = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "#4565b0",
      borderColor: "#4565b0",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const treatments = [
    {
        title:"Patient - Weight Loss Treatment",
        description:"Weight loss tablets can help you achieve a healthy weight. In order to benefit from the treatment, you also need to stick to a healthy low calorie diet. Seekadvice from us on slimming pills online - eClinic.ie offers consultations for the weight loss treatments Xenical and Orlistat. (Xenical is the branded version of Orlistat and both work in the same way).",
        h4:"How do slimming pills work?",
        description2:"The weight loss treatments Orlistat and Xenical prevent your body digesting all of the fat you eat. They thereby reduce the amount of calories you take in from your food. The tablets are not very effective on their own but can help you lose weight quicker, if you stick to a low calorie diet and avoid snacks between meals. To consult, fill in our brief medical questionnaire. For additional support and information please review our forum."
    },
]

const[show, setShow] = useState(false)
    return(
        <div id="dashboard" className='showsidebar'>
            <div id='sidebar'>
                <Sidebar/>
            </div>
            {show && <Treatment onDismiss={() => setShow(false)} treats={treatments}/>}
            <div className='headandcont'>
               <div className="adminheader"><AdminHeader /></div> 
               <div className='cont p-sm-5 p-4'>
               <div className='d-flex jc-between'> 
              <h3 className='fw-600 '>View Contacts</h3>
              <button className='btn btn-theme' >Add</button>
                
             </div>
             <div className='canvasbtn'>
                <button onClick={() => setShow(true)}>open canvas</button></div> 
               </div> 
            </div>
        </div>
    )
}

export default Dashboard