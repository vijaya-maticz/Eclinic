import React,{useState , Fragment} from 'react';
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';
import "react-datepicker/dist/react-datepicker.css";
import DataTable from 'react-data-table-component';
import asset1 from '../../Assets/Images/asset1.png'
import asset2 from '../../Assets/Images/asset2.png'
import asset3 from '../../Assets/Images/asset3.png'
import { Button } from 'react-bootstrap';
import AddToken from '../Modals/AddToken';
const TableView = () =>{
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
               <div className="adminheader"><AdminHeader /></div> 
               <div className='cont p-sm-5 p-4'>
              <div className='d-flex jc-between'> 
              <h3 className='fw-600 '>View Contacts</h3>
              <button className='btn btn-theme' onClick={() => setToken(true)}>Add</button>
                
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

export default TableView