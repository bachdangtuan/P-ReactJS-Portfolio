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
                            <ScrollAnimation animateIn="fadeInUp" delay={700}>
                                <a href='https://zalo.me/0934010704' >
                                <img src={require('../img/logo-zalo.png')} width={50} /> <span>0934010704</span>
                                <br /><br />
                                </a>
                                <a href="skype:live:.cid.592f5cd485144be1?chat">
                                <img src={require('../img/skype.png')} width={50} /> <span>Talk with me via Skype</span> 
                                </a>
                                <br /><br />
                                <a href='https://www.facebook.com/darktuan93/' >
                                    <img src={require('../img/f.png')} width={50} /> <span>https://www.facebook.com/darktuan93/</span>
                                </a>
                                <br /><br />
                                <a href="mailto:bachdangtuan93@gmail.com">
                                    <img src={require('../img/gm.png')} width={50} /> <span>bachdangtuan.dev@gmail.com</span>
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