import React, { Component } from 'react'
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Move(), Sticky());
import ScrollAnimation from 'react-animate-on-scroll';



export default class Frontend extends Component {
    renderSP = () => {
        let { details } = this.props
        return details.map((sp, index) => {
            return (
                <div className='text-primary'>
                    <h5 className='mt-4'>{sp.fe1}</h5>
        
                    <h5 className='mt-4'>{sp.fe2}</h5>
    
                    <h5 className='mt-4'>{sp.fe3}</h5>
      
                    <h5 className='mt-4'>{sp.fe4}</h5>
                </div>


            )
        })

    }

    render() {
        return (
            <div className="row align-items-center">
                <div className="col-md-6">

                </div>
                <div className="col-md-6">
                    <h1>Frontend
                        <span className='text-primary'> Development</span>
                    </h1>

                    <ScrollAnimation animateIn="fadeInUp">
                        {this.renderSP()}
                    </ScrollAnimation>
                </div>


            </div>

        )
    }
}
