import React, { Component } from 'react';
import '../../CSS/banner.css';
import DownloadCV from './DownloadCV';

class Banner extends Component {
    render() {
        return (
            <div className='banner-one'>
                <div className="container">
                    <div className='banner-inner'>
                        <div className='img1'>
                            <img src={require('../../img/pic3.png')} />

                        </div>
                        <div className='img2'>
                            <img src={require('../../img/pic4.png')} />

                        </div>
                        <div className='row align-items-center'>
                            <div className='col-md-6 banner-content'>
                                <h2 className='text-primary' >My Name</h2>
                                <h1>BACH DANG
                                <span className='text-primary'> TUAN</span>
                                </h1>
                                <p>Life is a series of challenges, I don't believe I can't, As for the way, I still walk</p>
                                <DownloadCV></DownloadCV>
                            </div>
                            <div className='col-md-6'>
                                <div className='move-box'>
                                    <img src={require('../../img/pic1.png')} className='move2' />
                                    <img src={require('../../img/pic6.png')} className='move1'/>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </div>


        );
    }
}

export default Banner;    