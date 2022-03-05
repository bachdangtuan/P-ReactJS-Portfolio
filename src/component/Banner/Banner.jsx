import React, { Component } from 'react';
import '../../CSS/banner.css';
import DownloadCV from './DownloadCV';
import FadeIn from 'react-fade-in';
import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';
import { zoomIn } from 'react-animations';
import { zoomOut } from 'react-animations';

const filAnimation = keyframes`${fadeInLeft}`;
const zIAnimation = keyframes`${zoomIn}`;
const zOAnimation = keyframes`${zoomOut}`;

const Fildiv = styled.div`
  animation: 3s ${filAnimation};
`;

const ZoomIndiv = styled.div`
    animation:  5s ${zIAnimation};
`;

const ZoomOutdiv = styled.div`
    animation:  6s ${zOAnimation};
`;


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
                                <Fildiv>
                                    <h2 className='text-primary' >My Name</h2>
                                    <h1>BACH DANG
                                        <span className='text-primary'> TUAN</span>
                                    </h1>
                                </Fildiv>
                                <FadeIn transitionDuration={1000} delay={1000}>
                                    <p>Life is a series of challenges.
                                        <br /> I don't believe I can't<br /> As for the way, I still walk</p>
                                    <DownloadCV></DownloadCV>
                                </FadeIn>
                            </div>
                            <div className='col-md-6'>
                                <div className='move-box'>
                                    <div>
                                    <ZoomIndiv>
                                        <img src={require('../../img/pic1.png')} className='move2' />
                                    </ZoomIndiv>   
                                        </div>
                                    <img src={require('../../img/pic6.png')} className='move1' />



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