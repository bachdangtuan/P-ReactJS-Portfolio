import React, { Component } from 'react'
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Move(), Sticky());
import ScrollAnimation from 'react-animate-on-scroll';



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
                <div className="col-md-6">
                <ScrollAnimation animateIn="fadeInUp">
                <img src="https://picsum.photos/id/1/1000/800" alt="" />
                </ScrollAnimation>
                </div>
                <div className="col-md-6">
                    <ScrollAnimation animateIn="fadeInUp">
                        {this.renderSP()}
                    </ScrollAnimation>
                </div>


            </div>

        )
    }
}
