import React, { Component } from 'react';
import '../../CSS/banner.css';
import DownloadCV from './DownloadCV';
import FadeIn from 'react-fade-in';
import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';
import { zoomIn } from 'react-animations';
import { zoomOut } from 'react-animations';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';



const filAnimation = keyframes`${fadeInLeft}`;
const zIAnimation = keyframes`${zoomIn}`;
const zOAnimation = keyframes`${zoomOut}`;

const Fildiv = styled.div`
  animation: 3s ${filAnimation};
`;

const ZoomIndiv = styled.div`
    animation:  1.8s ${zIAnimation};
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
                                    <ZoomIndiv>
                                        <div>
                                            <img src={require('../../img/item5.png')} className='move1' />
                                        </div>

                                        
                                    </ZoomIndiv>
                                    <LightSpeed left delay={1500}>

                                        <img src={require('../../img/item1.png')} />
                                    </LightSpeed>
                                    
                                    <Fade top delay={2500}>
                    
                                        <img src={require('../../img/item2.png')}/>
                                    </Fade>

                                    <Roll delay={2600}>
                                    <img src={require('../../img/item3.png')}/>
                                    </Roll>
                                    <img src={require('../../img/item4.png')} className='move2' />
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