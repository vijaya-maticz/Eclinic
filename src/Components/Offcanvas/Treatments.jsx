import React, { useState } from 'react';
import {Offcanvas } from 'react-bootstrap'

const Treatment = (props) =>{
    const[show, setShow] = useState(true)
    return(
        <div>
             <Offcanvas show={show} placement="bottom">
                <Offcanvas.Header >
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    <button onClick={props.onDismiss}>x</button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                        {console.log("viji",props.treats[0].title)}
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className=''>
                                        
                                    </div>
                                </div>
                                <div className='col-md-4'></div>
                            </div>
                        </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Treatment