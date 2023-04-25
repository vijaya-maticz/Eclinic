import React,{useState , Fragment} from 'react';
import HomeHeader from '../HomeHeader';
import Sidebar from './Sidebar';
import "react-datepicker/dist/react-datepicker.css";
import DataTable from 'react-data-table-component';
import asset1 from '../../Assets/Images/asset1.png'
import asset2 from '../../Assets/Images/asset2.png'
import asset3 from '../../Assets/Images/asset3.png'
import { Button } from 'react-bootstrap';
import AddToken from '../Modals/AddToken';
const AdminTransaction = () =>{
    const columns = [
        {
          name: "No.",
           selector: (vals) => vals.no,
          sortable: false
        },
     
          {
            name: "User Name",
            selector: (vals) => vals.username,
            sortable: false
          },
          {
            name: "Amount",
            selector: (vals) => vals.amount,
            sortable: false
          },
          {
            name: "Purpose",
            selector: (vals) => vals.purpose,
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
        no: "001",
        username: "David william",
        amount: "$25",
        purpose: "Treatment",
        status: <badge className='btn btn-pending'>Pending</badge>,
       
      },

      {
        no: "002",
        username: "David",
        amount: "$25",
        purpose: "Treatment",
        status: <badge className='btn btn-approve'>Approved</badge>,
       
      },

      {
        no: "003",
        username: "David william",
        amount: "$25",
        purpose: "Treatment",
        status: <badge className='btn btn-pending'>Pending</badge>,
       
      },

      {
        no: "004",
        username: "David",
        amount: "$25",
        purpose: "Treatment",
        status: <badge className='btn btn-approve'>Approved</badge>,
       
      },
    
    
    
    ]
  
  

const[token, setToken] = useState(false)
const[checked, setChecked] = useState(false)



    return(
        <div id="dashboard" className='tableview showsidebar recordes_sec_padd'>
            {token && <AddToken onDismiss={() => setToken(false)}/> }
            <div id='sidebar'>
                <Sidebar/>
            </div>
            <div className='headandcont'>
               <div className="adminheader"><HomeHeader /></div> 
               <div className='cont p-sm-5 p-4 cont cont_padding'>
              <div className='d-flex jc-between pad_sec_head align-items-center flex_wrap_npb'> 
              <h3 className='dash_head_blk mb-0'>Transaction</h3>
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
    )
}

export default AdminTransaction