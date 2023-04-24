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
const Records = () =>{
    const columns = [
        {
          name: "s.No",
           selector: (vals) => vals.time,
          sortable: true
        },
     
          {
            name: "Token Symbols",
            selector: (vals) => vals.count,
            sortable: true
          },
          {
            name: "Token address",
            selector: (vals) => vals.token,
            sortable: true
          },
          {
            name: "Asset image",
            selector: (vals) => vals.img,
            sortable: true
          },
          {
            name: "Action",
            selector: (vals) => vals.btn,
            sortable: true
          }
          
       
    ]  
    const data = [
  
      {
        time: "1",
        token: "USDC",
        count: "0x547x......x154xc1781",
        img: <img src={asset1} />,
        btn: <button className='btn btn-theme'>Edit</button>,
       
      },
      {
        time: "2",
        token: "BUSD",
        count: "+53.4684$",
        img: <img src={asset2} />,
        btn: <button className='btn btn-theme'>Edit</button>
      },
      {
        time: "3",
        token: "TMC",
        count: "+53.4684$",
        img: <img src={asset3} />,
        btn: <button className='btn btn-theme'>Edit</button>
      },
      {
        time: "1",
        token: "USDC",
        count: "0x547x......x154xc1781",
        img: <img src={asset1} />,
        btn: <button className='btn btn-theme'>Edit</button>,
       
      },
      {
        time: "2",
        token: "BUSD",
        count: "+53.4684$",
        img: <img src={asset2} />,
        btn: <button className='btn btn-theme'>Edit</button>
      },
      {
        time: "3",
        token: "TMC",
        count: "+53.4684$",
        img: <img src={asset3} />,
        btn: <button className='btn btn-theme'>Edit</button>
      },
    
      {
        time: "1",
        token: "USDC",
        count: "0x547x......x154xc1781",
        img: <img src={asset1} />,
        btn: <button className='btn btn-theme'>Edit</button>,
       
      },
      {
        time: "2",
        token: "BUSD",
        count: "+53.4684$",
        img: <img src={asset2} />,
        btn: <button className='btn btn-theme'>Edit</button>
      },
      {
        time: "3",
        token: "TMC",
        count: "+53.4684$",
        img: <img src={asset3} />,
        btn: <button className='btn btn-theme'>Edit</button>
      },
    
      {
        time: "1",
        token: "USDC",
        count: "0x547x......x154xc1781",
        img: <img src={asset1} />,
        btn: <button className='btn btn-theme'>Edit</button>,
       
      },
      {
        time: "2",
        token: "BUSD",
        count: "+53.4684$",
        img: <img src={asset2} />,
        btn: <button className='btn btn-theme'>Edit</button>
      },
      {
        time: "3",
        token: "TMC",
        count: "+53.4684$",
        img: <img src={asset3} />,
        btn: <button className='btn btn-theme'>Edit</button>
      },
    
      {
        time: "1",
        token: "USDC",
        count: "0x547x......x154xc1781",
        img: <img src={asset1} />,
        btn: <button className='btn btn-theme'>Edit</button>,
       
      },
      {
        time: "2",
        token: "BUSD",
        count: "+53.4684$",
        img: <img src={asset2} />,
        btn: <button className='btn btn-theme'>Edit</button>
      },
      {
        time: "3",
        token: "TMC",
        count: "+53.4684$",
        img: <img src={asset3} />,
        btn: <button className='btn btn-theme'>Edit</button>
      },
    
      {
        time: "1",
        token: "USDC",
        count: "0x547x......x154xc1781",
        img: <img src={asset1} />,
        btn: <button className='btn btn-theme'>Edit</button>,
       
      },
      {
        time: "2",
        token: "BUSD",
        count: "+53.4684$",
        img: <img src={asset2} />,
        btn: <button className='btn btn-theme'>Edit</button>
      },
      {
        time: "3",
        token: "TMC",
        count: "+53.4684$",
        img: <img src={asset3} />,
        btn: <button className='btn btn-theme'>Edit</button>
      },
    
    
    ]
  
  

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const[token, setToken] = useState(false)


    return(
        <div id="dashboard" className='tableview showsidebar'>
            {token && <AddToken onDismiss={() => setToken(false)}/> }
            <div id='sidebar'>
                <Sidebar/>
            </div>
            <div className='headandcont'>
               <div className="adminheader"><HomeHeader /></div> 
               <div className='cont p-sm-5 p-4 cont cont_padding'>
              <div className='d-flex jc-between'> 
              <h3 className='dash_head_blk'>Records</h3>
              <div className='d-flex align-items-center'>
              <div className='switch_div mx-auto switch_div_length'>
                        <p className='pe-2'>Prescription</p>
                       
                    <label className="switch mx-auto">
                    <input type="checkbox"  />
                    <span className="slider round"></span>
                    </label>
                        <p className='ps-2'>Certificate</p>

                        </div>

                        <div class="input-group input_grp_search ms-2">
                        <input type="text" placeholder='Search' className='form-control ms-2 search_input_style'/>

  <span class="input-group-text" id="basic-addon2">
  <i className="fa fa-search"></i>

  </span>
</div>

           <div className=''>
           </div>
              </div>
             </div> 
              
                <div className='tablesec shadowbox '>
                    <div className='mt-5 responsive br-30' >
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

export default Records