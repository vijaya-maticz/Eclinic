import React,{useState , Fragment} from 'react';
import HomeHeader from '../HomeHeader';
import "react-datepicker/dist/react-datepicker.css";
import DataTable from 'react-data-table-component';
import asset1 from '../../Assets/Images/asset1.png'
import asset2 from '../../Assets/Images/asset2.png'
import asset3 from '../../Assets/Images/asset3.png'
import { Button } from 'react-bootstrap';
import AddToken from '../Modals/AddToken';
import AdminSidebar from './AdminSidebar';
import AdminHeader from '../AdminHeader';
import Footer from '../Footer';
const AdminDoctor = () =>{
    const columns = [
        {
          name: "ID",
           selector: (vals) => vals.id,
          sortable: false
        },
     
          {
            name: "Username",
            selector: (vals) => vals.name,
            sortable: false
          },
          {
            name: "Email Id",
            selector: (vals) => vals.email,
            sortable: false
          },
          {
            name: "Phone",
            selector: (vals) => vals.phone,
            sortable: false
          },
          {
            name: "Specialist",
            selector: (vals) => vals.specialist,
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
          }
          
       
    ]  
    const data = [
  
      {
        id: "001",
        name: "Dr.Dravid",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Pediatrician",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
      {
        id: "002",
        name: "Dr.Dravid",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },

      {
        id: "003",
        name: "Dr.Jhon",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
      {
        id: "004",
        name: "Dr.Dravid",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
    

      {
        id: "005",
        name: "Dr.Jhon",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
      {
        id: "006",
        name: "Dr.Dravid",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
    

      {
        id: "007",
        name: "Dr.Jhon",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
      {
        id: "008",
        name: "Dr.Dravid",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
    

      {
        id: "009",
        name: "Dr.Greg",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
      {
        id: "010",
        name: "Dr.Greg",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
    

      {
        id: "011",
        name: "Dr.Jhon",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
      {
        id: "012",
        name: "Dr.Greg",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
    

      {
        id: "013",
        name: "Dr.Jhon",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
      {
        id: "014",
        name: "Dr.Greg",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
    

      {
        id: "015",
        name: "Dr.Jhon",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
      {
        id: "016",
        name: "Dr.Jhon",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
    

      {
        id: "017",
        name: "Dr.Jhon",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
      {
        id: "018",
        name: "Dr.Jhon",
        email: "mail@mail.com",
        phone: "+91 9876574125",
        specialist: "Cardiology",
         option: <><button className='fa fa-pencil action'></button> <button className='fa fa-trash action'></button></>,
        status: <badge className='btn btn-approve'>Active</badge>,
       
      },
    
    
    
    ]
  
  

const[token, setToken] = useState(false)
const[checked, setChecked] = useState(false)



    return(
      <>
        <div id="dashboard" className='tableview showsidebar recordes_sec_padd'>
            {token && <AddToken onDismiss={() => setToken(false)}/> }
            <div id='sidebar'>
                <AdminSidebar/>
            </div>
            <div className='headandcont'>
               <div className="adminheader"><AdminHeader /></div> 
               <div className='cont p-sm-5 p-4 cont cont_padding'>
              <div className='d-flex jc-between pad_sec_head align-items-center flex_wrap_npb'> 
              <h3 className='dash_head_blk mb-0'>Doctors</h3>
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
</div></>

    )
}

export default AdminDoctor