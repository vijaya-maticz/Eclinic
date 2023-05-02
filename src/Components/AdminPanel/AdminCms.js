import React,{useState , Fragment} from 'react';
import HomeHeader from '../HomeHeader';
import "react-datepicker/dist/react-datepicker.css";
import DataTable from 'react-data-table-component';
import asset1 from '../../Assets/Images/asset1.png'
import asset2 from '../../Assets/Images/asset2.png'
import asset3 from '../../Assets/Images/asset3.png'
import { Button } from 'react-bootstrap';
import Footer from '../Footer';
import AddToken from '../Modals/AddToken';
import AdminSidebar from './AdminSidebar';
import AdminHeader from '../AdminHeader';
import AdminEditer from './Offs/AdminEditer';
const AdminCms = () =>{
    const columns = [
        {
          name: "No.",
           selector: (vals) => vals.no,
          sortable: false
        },
     
          {
            name: "Page Name",
            selector: (vals) => vals.pagename,
            sortable: false
          },
         
          {
            name: "Status",
            selector: (vals) => vals.status,
            sortable: false
          },
          {
            name: "Option",
            selector: (vals) => vals.option,
            sortable: false
          },
          
       
    ]  
    const data = [
  
      {
        no: "001",
        pagename: "Astma- Treatment",
        option: <><button className='fa fa-pencil action' onClick={() =>setEditer(true)}></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-pending'>Pending</badge>,
       
      },

      {
        no: "002",
        pagename: "Acne Treatment",
        option: <><button className='fa fa-pencil action' onClick={() =>setEditer(true)}></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Approved</badge>,
       
      },

      {
        no: "003",
        pagename: "Astma- Treatment",
        option: <><button className='fa fa-pencil action' onClick={() =>setEditer(true)}></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-pending'>Pending</badge>,
       
      },

      {
        no: "004",
        pagename: "Acne Treatment",
        option: <><button className='fa fa-pencil action' onClick={() =>setEditer(true)}></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Approved</badge>,
       
      },
    
    
    
    ]
  
    const[editer, setEditer] = useState(false)

const[token, setToken] = useState(false)
const[checked, setChecked] = useState(false)



    return(
      <>
    {editer &&  <AdminEditer />} 

        <div id="dashboard" className='tableview showsidebar recordes_sec_padd'>
            {token && <AddToken onDismiss={() => setToken(false)}/> }
            <div id='sidebar'>
                <AdminSidebar/>
            </div>
            <div className='headandcont'>
               <div className="adminheader"><AdminHeader /></div> 
               <div className='cont p-sm-5 p-4 cont cont_padding'>
              <div className='d-flex jc-between pad_sec_head align-items-center flex_wrap_npb'> 
              <h3 className='dash_head_blk mb-0'>CMS</h3>
              <div className='d-flex align-items-center flex_wrap_npb'>
            

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

export default AdminCms