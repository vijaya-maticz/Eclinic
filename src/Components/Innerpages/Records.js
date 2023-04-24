import React,{useState , Fragment} from 'react';
import HomeHeader from '../HomeHeader';
import Sidebar from './Sidebar';
import Footer from '../Footer';

import "react-datepicker/dist/react-datepicker.css";
import DataTable from 'react-data-table-component';
import asset1 from '../../Assets/Images/asset1.png'
import asset2 from '../../Assets/Images/asset2.png'
import asset3 from '../../Assets/Images/asset3.png'
import { Button } from 'react-bootstrap';
import AddToken from '../Modals/AddToken';
const Records = () =>{
    const columns = [
        {
          name: "ID",
           selector: (vals) => vals.id,
          sortable: false
        },
     
          {
            name: "Treatment",
            selector: (vals) => vals.treatment,
            sortable: false
          },
          {
            name: "Response",
            selector: (vals) => vals.response,
            sortable: false
          },
          {
            name: "Prescription",
            selector: (vals) => vals.prescription,
            sortable: false
          },
          {
            name: "Status",
            selector: (vals) => vals.status,
            sortable: false
          }
          
       
    ]  
    const data = [
  
      {
        id: "001",
        treatment: "Astma - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-pending'>Pending</badge>,
       
      },
      {
        id: "002",
        treatment: "Acne - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-approve'>Approved</badge>,
       
      },

      {
        id: "003",
        treatment: "Astma - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-pending'>Pending</badge>,
       
      },
      {
        id: "004",
        treatment: "Acne - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-approve'>Approved</badge>,
       
      },
    

      {
        id: "005",
        treatment: "Astma - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-pending'>Pending</badge>,
       
      },
      {
        id: "006",
        treatment: "Acne - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-approve'>Approved</badge>,
       
      },
    

      {
        id: "007",
        treatment: "Astma - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-pending'>Pending</badge>,
       
      },
      {
        id: "008",
        treatment: "Acne - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-approve'>Approved</badge>,
       
      },
    

      {
        id: "009",
        treatment: "Astma - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-pending'>Pending</badge>,
       
      },
      {
        id: "010",
        treatment: "Acne - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-approve'>Approved</badge>,
       
      },
    

      {
        id: "011",
        treatment: "Astma - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-pending'>Pending</badge>,
       
      },
      {
        id: "012",
        treatment: "Acne - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-approve'>Approved</badge>,
       
      },
    

      {
        id: "013",
        treatment: "Astma - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-pending'>Pending</badge>,
       
      },
      {
        id: "014",
        treatment: "Acne - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-approve'>Approved</badge>,
       
      },
    

      {
        id: "015",
        treatment: "Astma - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-pending'>Pending</badge>,
       
      },
      {
        id: "016",
        treatment: "Acne - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-approve'>Approved</badge>,
       
      },
    

      {
        id: "017",
        treatment: "Astma - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-pending'>Pending</badge>,
       
      },
      {
        id: "018",
        treatment: "Acne - treatment",
        response: <button className='btn btn-grey-dark'>View</button>,
        prescription: <button className='btn btn-grey-dark'>View</button>,
        status: <badge className='btn btn-approve'>Approved</badge>,
       
      },
    
    
    
    ]
  
  

const[token, setToken] = useState(false)
const[checked, setChecked] = useState(false)



    return(
      <>
        <div id="dashboard" className='tableview showsidebar recordes_sec_padd'>
            {token && <AddToken onDismiss={() => setToken(false)}/> }
            <div id='sidebar'>
                <Sidebar/>
            </div>
            <div className='headandcont'>
               <div className="adminheader"><HomeHeader /></div> 
               <div className='cont p-sm-5 p-4 cont cont_padding'>
              <div className='d-flex jc-between pad_sec_head align-items-center flex_wrap_npb'> 
              <h3 className='dash_head_blk mb-0'>Records</h3>
              <div className='d-flex align-items-center flex_wrap_npb'>
              <div className={checked?'switch_div mx-auto switch_div_length switch_div_1 active_check':'switch_div mx-auto switch_div_length switch_div_1'}>
                        <p className='pe-2 first_check'>Prescription</p>
                       
                    <label className="switch mx-auto">
                    <input type="checkbox" onChange={(e)=>{console.log(e.target.checked);setChecked(e.target.checked)}}/>
                    <span className="slider round"></span>
                    </label>
                    
                        <p className='ps-2 second_check'>Certificate</p>

                        </div>

                        <div class="input-group input_grp_search ms-3">
                        <input type="text" placeholder='Search' className='form-control ms-2 search_input_style'/>

  <span class="input-group-text" id="basic-addon2">
  <i className="fa fa-search"></i>

  </span>
</div>

           <div className=''>
           </div>
              </div>
             </div> 
              
                <div className='tablesec '>
                    <div className='mt-2 responsive shadowbox_tabe br-30' >
                    <DataTable striped responsive={true} pagination
                        data={data}
                        columns={columns}
                    />
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

export default Records