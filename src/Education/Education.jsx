import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Education extends Component {
    render() {
        return (

            <div className='container' style={{
                paddingTop: '220px'
            }}>
                <div className='height_'>
                    <div className='row align-items-center'>
                        <div className="col-md-6 frontEnd myproject">
                            <ScrollAnimation animateIn="fadeIn" delay={400}>
                                <img src={require('../img/shadow.png')} />
                                <img src={require('../img/banner.png')} />
                                <img src={require('../img/title.png')} />
                                <img src={require('../img/plan.png')} />
                                <img src={require('../img/char2.png')} />
                                <img src={require('../img/char1.png')} />
                            </ScrollAnimation>
                        </div>
                        <div className='col-md-6 banner-content text-center'>
                            <ScrollAnimation animateIn="fadeInUp">
                                <h1>MY
                                    <span className='text-primary'> EDUCATION </span>
                                </h1>
                                <p>I am always looking and learning everywhere to improve my personal skills. The way that I teach myself is practice.
                                </p>

                            </ScrollAnimation>
                            <br />
                        </div>
                    </div>
                </div>

                {/*Degrees Received*/}
                <div className='container banner-content text-center pb-5'>
                    <ScrollAnimation animateIn="fadeInUp">
                        <h1>DEGREES
                            <span className='text-primary'> RECEIVED </span>
                        </h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sequi nulla exercitationem quasi illo provident debitis voluptatibus nihil, ex id modi numquam voluptatem fuga doloribus aliquam, reiciendis perspiciatis architecto voluptate.
                        </p>
                    </ScrollAnimation>
                    <br />
                </div>
                {/* Certification */}
                <div className='container banner-content text-center pb-5'>
                    <ScrollAnimation animateIn="fadeInUp">
                        <h1>MY
                            <span className='text-primary'> CERTIFICATIONS </span>
                        </h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sequi nulla exercitationem quasi illo provident debitis voluptatibus nihil, ex id modi numquam voluptatem fuga doloribus aliquam, reiciendis perspiciatis architecto voluptate.
                        </p>
                    </ScrollAnimation>
                    <br />
                </div>

            </div>
        );
    }
}

export default Education;