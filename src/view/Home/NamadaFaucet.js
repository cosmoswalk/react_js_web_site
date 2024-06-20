import React from 'react';

const NamComp = () => {
    return ( 
        <div data-speed="1.1" className="gallery__right2 _right ">

            <div className="text-block gallery__item2 _item" id="Nam-section">
           
                <h2 className="text-block__h" > Introducing the Namada Stake-Take Faucet: Streamline Your Network Testing Experience</h2>
                 
                <p className="text-block__p">We are thrilled to introduce the Namada Stake-Take Faucet. This faucet, created by our team at Stake-Take, is designed to facilitate the testing of the network. It has already been rigorously tested more 100 individuals from the Namada community, ensuring its reliability and effectiveness. </p>
                <a href="https://namada.faucet.stake-take.com/" className="button_learn" target='_blank'>Learn more →</a>
            </div>
            <img className="gallery__item2 _item Nam_mob" src="img/work/namada-faucet.png" alt="Alt" /> 
      
            <img className="gallery__item2 _item Nam_img" src="img/work/8.png" alt="Alt" /> 
        </div> );
}
 
export default NamComp;