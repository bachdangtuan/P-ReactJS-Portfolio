import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default class Backend extends Component {
    renderSO = () => {
        let { detailsSO } = this.props
        console.log(detailsSO);
        return detailsSO.map((sp, index) => {
            return <div>

                <h6 className='mt-4'>{sp.mt1}</h6>
                <h6 className='mt-4'>{sp.mt2}</h6>
                <h6 className='mt-4'>{sp.mt3}</h6>
            </div>
        })
    }
    render() {
        return (
            <div className="row align-items-center">
                <div className="col-md-6">
                    <ScrollAnimation animateIn="slideInLeft">
                        {this.renderSO()}
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
