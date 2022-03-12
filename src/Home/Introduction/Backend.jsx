import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default class Backend extends Component {
    renderBE = () => {
        let { detailsBE } = this.props
        console.log(detailsBE);
        return detailsBE.map((sp, index) => {
            return <div>

                <h5 className='mt-4'>{sp.mt1}</h5>
                <h5 className='mt-4'>{sp.mt2}</h5>
                <h5 className='mt-4'>{sp.mt3}</h5>
            </div>
        })
    }
    render() {
        return (
            <div className="row align-items-center">
                <div className="col-md-6">
                    <ScrollAnimation animateIn="slideInLeft">
                        {this.renderBE()}
                    </ScrollAnimation>
                </div>
                <div className="col-md-6">
                    <ScrollAnimation animateIn="slideInRight">
                    <img src="https://picsum.photos/id/1/1000/800" alt="" />
                        </ScrollAnimation>

                </div>

            </div>

        )
    }
}
