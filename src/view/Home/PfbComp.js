import React from 'react';

const PfbComp = () => {
    return (        <div data-speed=".9" className="gallery__left2 _left">
                   
    <img className="gallery__item2 _item Pfb_img" src="img/work/namada-faucet.png" alt="Alt" />
    <img className="gallery__item2 _item Pfb_mob" src="img/work/8.png" alt="Alt" />

    <div className="text-block gallery__item2 _item">
        <h2 className="text-block__h"> Pay For Blob</h2>
        <p className="text-block__p">To submit data to Celestia, users submit blob transactions (BlobTx). Blob transactions contain two components, a standard Cosmos-SDK transaction called MsgPayForBlobs and one or more Blobs of data. </p>
        <a href="https://pfb.stake-take.com/" className="button_learn" target="_blank">Learn more →</a>
    </div>

</div> );
}
 
export default PfbComp;