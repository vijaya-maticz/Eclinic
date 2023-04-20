import React, {  useState } from "react";

import { Modal,Button, Form } from "react-bootstrap";
import badge1 from "../../Assets/Images/user-tick.png"

const AddLabel = (props) =>{
   const[addlabel, setAddLabel] = useState(true)
   
    return(
        <div className="">
                
            <Modal show={addlabel} size="md" className="br-15 ">
             
                <Modal.Body  className="p-0 br-15">
                <button onClick={() => props.onDismiss()} className="close-btn">X</button>
             <div className=" px-3 py-4">
                <h5 className="mt-3"> Add custom label</h5>
                <p className="mt-3">
                    This label would be displayed instead of the following 
                    address and only be
                </p>
                <p className='badge bg-primary d-flex themebadge mt-4 mb-0' ><img src={badge1} /><span className='tokentrunk'> x1548x45x5545x548x454x54545x454x5454x454x</span></p>
                <div className='mt-3'>
                        <label className='mb-2 f-14'>Custom label</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="mt-4 text-end">
                        <button className="btn btn-outline-secondary me-3">Cancel</button>
                        <button className="btn btn-theme smallbtn">Save</button>
                    </div>
             </div>
             
                </Modal.Body>
            </Modal>
        </div>
    )
}


export default AddLabel