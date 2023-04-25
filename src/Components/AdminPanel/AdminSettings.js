import React,{useState , Fragment} from 'react';
import HomeHeader from '../HomeHeader';
import Sidebar from './Sidebar';
import "react-datepicker/dist/react-datepicker.css";
import DataTable from 'react-data-table-component';
import asset1 from '../../Assets/Images/asset1.png'
import asset2 from '../../Assets/Images/asset2.png'
import asset3 from '../../Assets/Images/asset3.png'
import user from '../../Assets/Images/user.png'
import { Tabs, Tab} from 'react-bootstrap';
import AddToken from '../Modals/AddToken';
const AdminSettings = () =>{
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
        <div id="dashboard" className='tableview showsidebar recordes_sec_padd admin'>
            {token && <AddToken onDismiss={() => setToken(false)}/> }
            <div id='sidebar'>
                <Sidebar/>
            </div>
            <div className='headandcont'>
               <div className="adminheader"><HomeHeader /></div> 
               <div className='cont p-sm-5 p-4 cont cont_padding'>
              <div className=' pad_sec_head flex_wrap_npb'> 
              <h3 className='dash_head_blk mb-0'>Transaction</h3>
        
             </div> 
             <Tabs defaultActiveKey="sitedetail" id="uncontrolled-tab-example" className="mb-3" >
                <Tab eventKey="sitedetail" title="Site detail">
                     <div className='whitebox  pad_sec_head mt-4'>
                     
                         <div className='row mt-4'>
                            <div className='col-md-6'>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Site Name</label>
                            </div>
                           
                             
                           
                          </div>
                          <div className='col-md-6'>
                          <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Address</label>
                            </div>
                          </div>
                          </div>
                          <div className='row'>

                          <div className='col-md-6'>
                          <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Address1</label>
                            </div>
                           
                           
                          </div>
                          <div className='col-md-6'>
                             <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Contact</label>
                            </div>
                          </div>
                          </div>
                          <div className='row'>
                          <div className='col-md-6'>
                          <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Phone</label>
                            </div>
                            </div>
                          
                          <div className='col-md-6'>
                          <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email</label>
                            </div>
                         
                          
                           
                          </div>
                               
                         </div>
                         <div className='row'>
                         <div className='col-md-6'>
                            <div className='borderedinputbox mb-4'>
                                      <div className='d-flex jc-between align-items-center'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={user} />
                                            <div>
                                                <h5>Uh5load Logo</h5>
                                                <p>Logo.png</p>
                                            </div>
                                        </div>
                                        <button className='btn themebtn'> Upload Image</button>
                                      </div>
                                   </div>
                            </div>
                            <div className="col-md-6">
                          <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Twitter Link</label>
                            </div>
                           
                            </div>
                         </div>
                         <div className='row'>
                         <div className='col-md-6'>
                          <div class="form-floating mb-3">
                                <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Facebook Link</label>
                            </div>
                            </div>
                            <div className='text-end col-md-6'>
                                <button className='themebtn-bordered'>Confirm</button>
                            
                        </div>
                         </div>
                         
                        
                       
                    
                         </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                <div className='whitebox  pad_sec_head mt-4'>
                     
                     <div className='row mt-4'>
                        <div className='col-md-4'></div>
                        
                        <div className='col-md-8'>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Name</label>
                        </div>
                       
                         
                       
                    
                      <div class="form-floating mb-3">
                            <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email</label>
                        </div>
                   
                      <div class="form-floating mb-3">
                            <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Role</label>
                        </div>
                       
                       
                    
                         <div class="form-floating mb-3">
                            <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">2FA Status</label>
                        </div>
                        <div className='text-end '>
                                <button className='themebtn-bordered'>Confirm</button>
                            
                        </div>
                      </div>
                      </div>
                  
                     
                     
                    
                   
                
                     </div>
                </Tab>
                <Tab eventKey="googleauth" title="Google Authentication">
                    <div className='whitebox  pad_sec_head mt-4'>
                     
                     <div className='row mt-4'>
                        <div className='col-md-4'></div>
                        
                        <div className='col-md-8'>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">32 digit sercurity code</label>
                        </div>
                       
                      <div class="form-floating mb-3">
                            <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">6 digit 2FA code</label>
                        </div>
                   
                      <div class="form-floating mb-3">
                            <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Enter Password</label>
                        </div>
                       
                       
                        <div className='text-end '>
                                <button className='themebtn-bordered'>Confirm</button>
                            
                        </div>
                      </div>
                      </div>
                  
                     
                     
                    
                   
                
                     </div>
                </Tab>
            </Tabs>
              
               
                   
               </div> 
            </div>
        </div>
    )
}

export default AdminSettings