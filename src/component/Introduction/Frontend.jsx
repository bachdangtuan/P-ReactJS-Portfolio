import React, { Component } from 'react'
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Move(), Sticky());
import ScrollAnimation from 'react-animate-on-scroll';
import '../../CSS/frontEnd.css';


export default class Frontend extends Component {
    renderSP = () => {
        let { detailsFE } = this.props
        return detailsFE.map((sp, index) => {
            return (
                <div className='text-primary'>
                    <h6 className='mt-4'>{sp.fe1}</h6>
                    <h6 className='mt-4'>{sp.fe2}</h6>
                    <h6 className='mt-4'>{sp.fe3}</h6>
                    <h6 className='mt-4'>{sp.fe4}</h6>
                </div>


            )
        })

    }

    render() {
        return (
            <div className="row align-items-center">
                <div className="col-md-6 frontEnd">
                    <ScrollAnimation animateIn="fadeInUp">
                        <img src={require('../../img/icon11.png')} />
                        <img src={require('../../img/icon1.png')} />
                        <img src={require('../../img/icon2.png')} />
                        <img src={require('../../img/icon4.png')} />
                        <img src={require('../../img/icon8.png')} />
                        <img src={require('../../img/icon5.png')} />
                        <img src={require('../../img/icon3.png')} />
                        <img src={require('../../img/icon7.png')} />
                        <img src={require('../../img/icon9.png')} />
                        <img src={require('../../img/icon10.png')} />
                    </ScrollAnimation>
                </div>
                <div className="col-md-6 text-left">
                    <ScrollAnimation animateIn="fadeInUp">
                    <h2>Frontend</h2>
                        {this.renderSP()}


                    </ScrollAnimation>

                </div>


            </div>

        )
    }
}
