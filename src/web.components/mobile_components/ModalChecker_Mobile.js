import React, { useState, useEffect } from 'react';
import './mobile_modal.css';
import { images } from '../../view/Home/logo_faucet/logoShare.js';

const ModalCheck_Mobile = ({ isOpen, onClose }) => {

    const handleContentClick = (event) => {
        event.stopPropagation();
    };



    return isOpen ? (
     
            <div className="modal-check-mob" onClick={onClose}>
                <div className="modal-content-check-mob" onClick={handleContentClick}>
                    <span className="close-window" onClick={onClose}>&times;</span>
                    <div className="modal-body-check">
                    
                        <div className='text-window-mob'>  
                        Disk Checker: Automation at Your Fingertips!
<p>Our Disk Checker tool is an ingenious script that launches a bot specifically designed to monitor disk space in Linux environments.</p>

 It works tirelessly around the clock, ensuring you have real-time, accurate information on your server storage status at all times.
Getting started is easy - simply reach out to us via email! <a href='mailto:support@stake-take.com' target='_blank'>
<img className="mini-images__item" src={images.letter} alt="Alt" style={{width: 30, height: 30 , borderRadius:' 10px',  marginRight: '20px'}} /> </a>
<p>
Step into the future of server space management with Disk Checker!  </p>                 </div>
                        </div>
                        <div  style={{justifyContent: 'center', textAlign: 'center'}} >
               <img className='scrn_checker_mob' src={images.checker_screen} alt="Alt"  /> 
          
            </div>
                </div>
            </div>
     
    ) : null;
}

export default ModalCheck_Mobile;
