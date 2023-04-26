import React,{useState , Fragment} from 'react';
import HomeHeader from '../HomeHeader';
import "react-datepicker/dist/react-datepicker.css";
import DataTable from 'react-data-table-component';
import asset1 from '../../Assets/Images/asset1.png'
import asset2 from '../../Assets/Images/asset2.png'
import asset3 from '../../Assets/Images/asset3.png'
import dummyimg from '../../Assets/Images/eclinic-img/dummyimg.png'
import dummyimgbig from '../../Assets/Images/eclinic-img/dummyimgbig.png'
import qr from '../../Assets/Images/eclinic-img/qr.png'
import { Tabs, Tab} from 'react-bootstrap';
import AddToken from '../Modals/AddToken';
import AdminSidebar from './AdminSidebar';
import AdminHeader from '../AdminHeader';
import Footer from '../Footer';
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

const imgsrc = () =>{
  const imgInput = document.querySelector('input.file')
const imgEl = document.querySelector('.img')
const imgName = document.querySelector('.filename')
  imgInput.addEventListener('change', () => {
    if (imgInput.files && imgInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imgEl.src = e.target.result;
        imgName.innerText = imgInput.files[0].name
      }
      reader.readAsDataURL(imgInput.files[0]);
    }
  })
}

    return(
      <>
        <div id="dashboard" className='tableview showsidebar recordes_sec_padd admin'>
            {token && <AddToken onDismiss={() => setToken(false)}/> }
            <div id='sidebar'>
                <AdminSidebar/>
            </div>
            <div className='headandcont'>
               <div className="adminheader"><AdminHeader /></div> 
               <div className='cont p-sm-5 p-4 cont cont_padding'>
              <div className=''> 
              <h4 className=''>Transaction</h4>
        
             </div> 
             <div className='whitebox mt-4'>
              <Tabs defaultActiveKey="sitedetail" id="uncontrolled-tab-example" className="mb-3" >
                  <Tab eventKey="sitedetail" title="Site detail">
                      <div className='  pad_sec_head mt-4'>
                      
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
                          <div className='col-xl-6'>
                              <div className='borderedinputbox mb-4'>
                                        <div className='d-flex jc-between align-items-center flex-column flex-sm-row gap-2 text-center text-sm-start'>
                                          <div className='d-flex align-items-center flex-column flex-sm-row gap-2 text-center text-sm-start'>
                                            <div className='browseimg'><img className='img' src={dummyimg} />
                                              </div> 
                                              <div>
                                                  <h5>Uh5load Logo</h5>
                                                  <p className='filename'>Logo.png</p>
                                              </div>
                                          </div>
                                        <div className='browseinput'> 
                                          <button className='btn themebtn '> Upload Image</button>  
                                          <input type="file" className='file' onClick={() => imgsrc()}/>
                                          </div>
                                        </div>
                                    </div>
                              </div>
                            <div className="col-xl-6">
                               <div class="form-floating mb-3">
                                  <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                  <label for="floatingInput">Twitter Link</label>
                                </div>
                            
                              </div>
                          </div>
                          <div className='row'>
                          <div className='col-xl-6'>
                            <div class="form-floating mb-3">
                                  <input type="email" class="form-control borderinput" id="floatingInput" placeholder="name@example.com" />
                                  <label for="floatingInput">Facebook Link</label>
                              </div>
                              </div>
                              <div className='text-end col-xl-6'>
                                  <button className='themebtn-bordered big'>Confirm</button>
                              
                          </div>
                          </div>
                          
                          
                        
                      
                          </div>
                  </Tab>
                  <Tab eventKey="profile" title="Profile" className='profile'>
                  <div className='  pad_sec_head mt-4'>
                      
                      <div className='row mt-4'>
                          <div className='col-xl-3'>
                          <div className='borderedinputbox text-xl-center text-sm-start text-center  mb-4 py-3'>
                                        <div className='d-flex jc-between align-items-center flex-xl-column flex-sm-row flex-column'>
                                          <div className='d-flex align-items-center gap-2 flex-xl-column flex-sm-row flex-column'>
                                            <div className='browseimg'><img className='img' src={dummyimgbig} />
                                              </div> 
                                              <div className='my-4'>
                                                  <h5>Uh5load Logo</h5>
                                                  <p className='filename'>Logo.png</p>
                                              </div>
                                          </div>
                                        <div className='browseinput'> 
                                          <button className='btn themebtn '> Upload Image</button>  
                                          <input type="file" className='file' onClick={() => imgsrc()}/>
                                          </div>
                                        </div>
                                    </div>
                          </div>
                          
                          <div className='col-xl-9'>
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
                       
                        </div>
                        </div>
                        <div className='row'>
                        <div className='text-end '>
                                  <button className='themebtn-bordered big'>Confirm</button>
                              
                          </div>
                        </div>
                    
                      
                      
                      
                    
                  
                      </div>
                  </Tab>
                  <Tab eventKey="googleauth" title="Google Authentication">
                      <div className='  pad_sec_head mt-4'>
                      
                      <div className='row mt-4 align-items-center'>
                          <div className='col-xl-3'>
                            <div className='borderedinputbox text-center mb-4 p-xl-4 p-3'>
                                <div className='qrcode text-center p-xl-3 p-sm-5 p-2'>
                                   <img src={qr}/>
                                </div>
                            </div>

                          </div>
                          
                          <div className='col-xl-9'>
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
                                  <button className='themebtn-bordered big'>Confirm</button>
                              
                          </div>
                        </div>
                      </div>
                    
                      
                      
                      
                    
                  
                      </div>
                  </Tab>
              </Tabs>
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

export default AdminSettings