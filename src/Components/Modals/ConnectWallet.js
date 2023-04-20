import React, {  useState } from "react";

import { Modal,Button, Form } from "react-bootstrap";
import wall1 from "../../Assets/Images/wall1.png"
import wall2 from "../../Assets/Images/wall2.png"
import wall3 from "../../Assets/Images/wall3.png"
import wall4 from "../../Assets/Images/wall4.png"

const ConnectWallet = (props) =>{
   const[wallet, setWallet] = useState(true)
   
    return(
        <div className="">
                
            <Modal show={wallet} size="sm" centered className="br-15 ">
             
                <Modal.Body  className="p-0 br-15 walletmodal">
                <button onClick={() => props.onDismiss()} className="close-btn">X</button>
                 <div className="p-4">
               <div className="row">
                <div className="col-md-6">
                    <div className="shadowbox">
                        <img src={wall1} />
                       <p>Metamask</p> 
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="shadowbox">
                        <img src={wall2} />
                        <p>Wallet Connecct</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="shadowbox">
                        <img src={wall3} />
                       <p>Fortmatic</p> 
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="shadowbox">
                        <img src={wall4} />
                       <p>Frame</p> 
                    </div>
                </div>
               </div></div>
                </Modal.Body>
            </Modal>
        </div>
    )
}


export default ConnectWallet