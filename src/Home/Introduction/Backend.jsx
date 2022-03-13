import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default class Backend extends Component {
    renderBE = () => {
        let { detailsBE } = this.props
        console.log(detailsBE);
        return detailsBE.map((sp, index) => {
            return <div>

                <h6 className='mt-4'>{sp.be1}</h6>
                <h6 className='mt-4'>{sp.be2}</h6>
                <h6 className='mt-4'>{sp.be3}</h6>
                <h6 className='mt-4'>{sp.be4}</h6>
            </div>
        })
    }
    render() {
        return (
            <div className="row align-items-center">
                <div className="col-md-6 frontEnd">
                    <ScrollAnimation animateIn="zoomIn">
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
                    <ScrollAnimation animateIn="slideInLeft">
                    <h2>Backend</h2>
                        {this.renderBE()}
                    </ScrollAnimation>

                </div>

            </div>

        )
    }
}
