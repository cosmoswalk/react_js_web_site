import React, { useEffect } from 'react';

const HomePage = () => {

  useEffect(() => {
    window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollSmoother);

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile && window.ScrollTrigger.isTouch !== 1) {

      window.ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.2,
        effects: true
      });

      window.gsap.fromTo('.start-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
          trigger: '.start-section',
          start: 'center',
          end: '820',
          scrub: true
        }
      });

      let itemsL = window.gsap.utils.toArray('._left ._item ');

      itemsL.forEach(item => {
        window.gsap.fromTo(item, { opacity: 0, x: -50 }, {
          opacity: 1, x: 0,
          scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
          }
        });
      });

      let itemsR = window.gsap.utils.toArray('._right ._item');

      itemsR.forEach(item => {
        window.gsap.fromTo(item, { opacity: 0, x: 50 }, {
          opacity: 1, x: 0,
          scrollTrigger: {
            trigger: item,
            start: '-750',
            end: 'top',
            scrub: true
          }
        });
      });

    }
  }, []);

  return (
 

    <header className="start-section">

        <img data-speed=".6" className="start" src="img/start.png" alt="Alt" />
        <div className="container">
            <div data-speed=".75" className="main-header">
                <h1 className="main-title">Join the Revolution: Stake with Confidence & Transparency</h1>
            </div>
        </div>
    </header>    
    
    
  
  );
};

export default HomePage;