import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

export default class SystemOperation extends Component {
    renderSO = () => {
        let { detailsSO } = this.props
        console.log(detailsSO);
        return detailsSO.map((sp, index) => {
            return <div>

                <h6 className='mt-4'>{sp.mt1}</h6>
                <h6 className='mt-4'>{sp.mt2}</h6>
                <h6 className='mt-4'>{sp.mt3}</h6>
                <h6 className='mt-4'>{sp.mt4}</h6>
            </div>
        })
    }
    render() {
        return (
            <div className="row align-items-center">
                <div className="col-md-6">
                    <ScrollAnimation animateIn="slideInLeft">
                        <h2>Systems Operation</h2>
                        {this.renderSO()}
                    </ScrollAnimation>
                </div>
                <div className="col-md-6 frontEnd operation">
                        <img src={require('../../img/so2.png')} />
              
                        <Fade>
                            <img src={require('../../img/so1.png')} />
                        </Fade>
                        <img src={require('../../img/so4.png')} />
                        <img src={require('../../img/so3.png')} />
                        <img src={require('../../img/so5.png')} />

                </div>

            </div>

        )
    }
}
