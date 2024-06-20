import React, { useRef,useState } from 'react';
import HomePage from './Home/HomePage.js';
import FaucetComp from './Home/FaucetComp.js';
import CheckerComp from './Home/CheckerComp.js';
import ProjectsComp from './Home/ProjectComp.js';
import GuidesComp from './Home/GuidesComp.js';
import NamComp from './Home/NamadaFaucet.js';
import PfbComp from './Home/PfbComp.js';

import './View.css';
import './css_any_device/mobile_style.css';
import Sidebar from './header/ContactData.js';
import logo from './logo.png';
import ModalView from './../web.components/ModalView.js';
import ModalCheck from './../web.components/ModalChecker.js';


// ========= MOBILE ==========
import ModalView_Mobile from './../web.components/mobile_components/ModalView_Mobile.js'
import ModalCheck_Mobile from '../../../original_website/src/web.components/mobile_components/ModalChecker_Mobile.js';
import HomePage_mob from './Home/HomePage_mob.js';



const url = "https://stake-take.com/";

const View = () => {
  const faucetRef = useRef(null);
  const checkerRef = useRef(null);
  const projectsRef = useRef(null);
  const guidesRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [modalOpenView, setModalOpenView] = useState(false);
  const [modalOpenCheck, setModalOpenCheck] = useState(false);
  const handleModalOpenView = () => {
    setModalOpenView(true);
  };

  const handleModalCloseView = () => {
    setModalOpenView(false);
  };

  const handleModalOpenCheck = () => {
    setModalOpenCheck(true);
  };

  const handleModalCloseCheck = () => {
    setModalOpenCheck(false);
  };
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
<div>
<div className="logo-container">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="Logo"/>
            </a>
        </div>
        <HomePage />
       <HomePage_mob />
        <div className="portfolio">
          <div className="container">
            <main className="_1">
              <div className="gallery">
     <NamComp />

     <PfbComp />
              </div>
            </main>
            <div className="_2">
              <div className="gallery_2">
              <FaucetComp onModalViewClick={handleModalOpenView}/>
      <ModalView isOpen={modalOpenView} onClose={handleModalCloseView} />
      <ModalView_Mobile isOpen={modalOpenView} onClose={handleModalCloseView} />

      <CheckerComp onModalCheckClick={handleModalOpenCheck} />
      <ModalCheck isOpen={modalOpenCheck} onClose={handleModalCloseCheck} />
      <ModalCheck_Mobile isOpen={modalOpenCheck} onClose={handleModalCloseCheck} />

              
              </div>
            </div>


            <div className="_3">
              <div className="gallery_3">
               <GuidesComp />  
                <ProjectsComp />
              
              </div>
            </div>
          </div>
        </div>
  
      </div>

  );
}

export default View;
