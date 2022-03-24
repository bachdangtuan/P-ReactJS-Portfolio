import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Contact extends Component {
    render() {
        return (

            <div>
                <div style={{
                    height: '130px'
                }} className='bg-light'>
                </div>

                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 banner-content'>
                            <ScrollAnimation animateIn="fadeInUp">
                                <h1>CONTACT
                                    <span className='text-primary'> ME</span>
                                </h1>
                            </ScrollAnimation>
                            <br />
                            <ScrollAnimation animateIn="fadeInUp" delay={1000}>
                                <img src={require('../img/logo-zalo.png')} width={50} /> <span>0934010704</span>
                                <br /><br />
                                <img src={require('../img/skype.png')} width={50} /> <span>0934010704</span>
                                <br /><br />
                                <img src={require('../img/f.png')} width={50} /> <span>0934010704</span>
                                <br /><br />
                                <a href=''>
                                <img src={require('../img/gm.png')} width={50} /> <span>bachdangtuan93@gmail.com</span>
                                </a>
                                <br /><br />
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-6 frontEnd">
                            <ScrollAnimation animateIn="fadeIn" delay={1000}>
                                <img src={require('../img/m2.png')} />
                                <img src={require('../img/m3.png')} />
                                <img src={require('../img/m1.png')} />
                                <img src={require('../img/m.png')} />
                            </ScrollAnimation>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;