import React, { useState } from 'react';
import {Modal,Button, FloatingLabel, Form} from 'react-bootstrap'

const AddToken = (props) =>{
    const[token, setToken] = useState(true)
    return(
        <>
         
      <Modal show={token} centered>
       
        <Modal.Body>
            <div>
                <div className='d-flex jc-between'>
                    <h4>
                    Add Token
                    </h4>
                    <button className='btn btn-theme close-btn' onClick={() => props.onDismiss()}><span className='fa fa-times'></span></button>
                </div>
                <hr className='mx-3 my-4'/>
            <div className=' py-4 br-10 h-55'>
                <input type="text" placeholder='Asset Address' className='form-control mb-4'/>
                <input type="text" placeholder='Asset Symbol' className='form-control mb-4'/>
                <input type="text" placeholder='Asset Name' className='form-control mb-4'/>
                <input type="text" placeholder='Asset Price' className='form-control'/>

                           
<div className='text-center mt-5'>
       <Button className='btn btn-theme aquabtn ' >
            Add
          </Button>
</div>
                         
            </div>
            </div>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default AddToken