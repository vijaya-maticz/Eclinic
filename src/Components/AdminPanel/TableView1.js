import React,{useState , Fragment} from 'react';
import AdminHeader from './AdminHeader';
import {FloatingLabel, Form,Button} from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import { Bar } from "react-chartjs-2";
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ReactDatatable from '@ashvin27/react-datatable';
import AdminSidebar from './AdminSidebar';
import Footer from '../Footer';
const TableView = () =>{
    const columns = [
        {
            key: "id",
            text: "Id",
            className: "name",
            align: "left",
            sortable: true,
        },
        {
            key: "reserveid",
            text: "Reserve Id",
            className: "name",
            align: "left",
            sortable: true,
        },
        {
            key: "Roomname",
            text: "Room Name",
            className: "name",
            align: "left",
            sortable: true,
        },
        {
            key: "username",
            text: "User Name",
            className: "name",
            align: "left",
            sortable: true,
        },
        {
            key: "emailid",
            text: "Email",
            className: "name",
            align: "left",
            sortable: true,
        },
        {
            key: "userdatafrom",
            text: "Id",
            className: "name",
            align: "left",
            sortable: true,
        },
        {
            key: "userdatato",
            text: "Id",
            className: "name",
            align: "left",
            sortable: true,
        },
        {
            key: "iddocuments",
            text: "Id",
            className: "name",
            align: "left",
            sortable: true,
        },
        {
            key: "staus",
            text: "Id",
            className: "name",
            align: "left",
            sortable: true,
        },
        {
            key: "action",
            text: "Edit action",
            className: "action",
            width: 100,
            align: "left",
            sortable: true,
            cell: record => {
                return (
                    <Fragment>
                        {/* <button
                            className="btn btn-primary btn-sm"
                            // onClick={() => viewRecord(record)}
                            style={{ marginRight: '5px' }}>
                            <i class="fa fa-eye mr-0" ></i>
                        </button> */}
                        <button
                            className="btn btn-primary btn-sm"
                            // onClick={() => editRecord(record)}
                            // style={{ marginRight: '5px' }}
                            >
                            <i className="fa fa-edit mr-0"></i>
                        </button>
                        {/* <button
                            className="btn btn-danger btn-sm"
                            onClick={() => uploadImage(record)}>
                            <i className="fa fa-edit mr-0"></i>
                        </button> */}
                        {/* <button
                            className="btn btn-primary btn-sm"
                            onClick={() => WhiteList(record)}
                            style={{ marginRight: '5px' }}>
                            <i className="fa fa-edit mr-0"></i>
                        </button> */}
                    </Fragment>
                );
            }
        }
]

const config = {
    page_size: 10,
    length_menu: [ 10, 20, 50 ],
    filename: "Users",
    no_data_text: 'No user found!',
    button: {
        excel: true,
        print: true,
        csv: true
    },
    language: {
        length_menu: "Show MENU result per page",
        filter: "Filter User",
        info: "Showing START to END of TOTAL records",
        pagination: {
            previous: "Previous",
            next: "Next",
            last: "Last"
        }
    },
    show_length_menu: true,
    show_filter: true,
    show_pagination: true,
    show_info: true,
};
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
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
    return(
        <>
        <div id="dashboard" className='showsidebar'>
            <div id='sidebar'>
                <AdminSidebar/>
            </div>
            <div className='headandcont'>
               <div className="adminheader"><AdminHeader /></div> 
               <div className='cont'>
                <h4 className='adminblue my-4'>Table view</h4>
                
             
              
                <div className='tablesec shadowbox px-3 mt-3 br-10 mb-5'>
                    <h6 className='adminblue pt-4 me-2' ><span className='fa fa-book'></span> View User</h6>
                    {/* <DataTable pagination columns={columns} data={data} /> */}
                    <DataTable striped responsive
                        config={config}
                        className={config.className}
                        records={data}
                        columns={columns}

                    />
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

export default TableView