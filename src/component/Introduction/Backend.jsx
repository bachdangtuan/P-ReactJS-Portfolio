import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default class Backend extends Component {
    renderBE = () => {
        let { detailsBE } = this.props
        console.log(detailsBE);
        return detailsBE.map((sp, index) => {
            return <div>

                <h5 className='mt-4'>{sp.be1}</h5>
                <h5 className='mt-4'>{sp.be2}</h5>
                <h5 className='mt-4'>{sp.be3}</h5>
            </div>
        })
    }
    render() {
        return (
            <div className="row align-items-center">
                <div className="col-md-6">
                    <ScrollAnimation animateIn="slideInLeft" delay={1000} >
                        {this.renderBE()}
                    </ScrollAnimation>
                </div>
                <div className="col-md-6">
                    <ScrollAnimation animateIn="slideInRight" delay={1200}>
                    <img src="https://picsum.photos/id/1/1000/1200" alt="" />
                        </ScrollAnimation>

                </div>

            </div>

        )
    }
}
