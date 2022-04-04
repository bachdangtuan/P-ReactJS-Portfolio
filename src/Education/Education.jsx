import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import certification from '../data/certification.json';
import degrees from '../data/degrees.json';
import certificationOther from '../data/certificationOther.json';
class Education extends Component {

    renderOther = () =>{
        return certificationOther.map((sp,index)=>{
            return <div className="col-md-4" key={index}>
                <a class="card" style={{
                    cursor:'pointer'
                }} href="https://google.com">
                    <img className="card-img-top" src={sp.hinhAnh} alt="Card image cap" />
                    <div class="card-body">
                        <h5>{sp.khoaHoc}</h5>
                        <h6>-{sp.school}-</h6>
                    </div>
                </a>
            </div>
        })
    }

    renderDegree = () => {
        return degrees.map((sp, index) => {
            return (
                <div className="row degrees pb-4" key={index}>
                    <div className="col-3 p-0">
                        <ScrollAnimation animateIn="flipInY">
                            <div className='degrees__'>
                                <img src={sp.hinhAnh} alt="" width={45} className="pt-2" />
                                <p>{sp.school}</p>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-9 degrees__infor card">
                        <div className="card-header row borderT">
                            <div className="col-7">
                                <h5>{sp.khoaHoc}</h5>
                            </div>
                            <div className="col-5 text-right">
                                <h5>{sp.time}</h5>
                            </div>
                        </div>

                        <div className='card-body w-100 text-left'>
                            <p>{sp.title1}</p>
                            <p>{sp.title2}</p>
                        </div>
                    </div>
                </div>)
        })
    }

    renderCert = () => {
        return certification.map((sp, index) => {
            return <div className="col-md-4 pb-4" key={index}>
                <div class="card">
                    <img className="card-img-top " src={sp.hinhAnh} alt="Card image cap" />
                    <div class="card-body certification__">
                        <h5>{sp.khoaHoc}</h5>
                        <h6>-{sp.school}-</h6>
                    </div>
                </div>
            </div>
        })
    }
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
                                <img src="../img/logo/udemy.png" alt="" width={100} className="pt-2 pr-3" />
                                <img src="../img/logo/w3shool.png" alt="" width={60} className="pt-2 pr-4" />
                                <img src="../img/logo/freecodecamp.png" alt="" width={60} className="pt-2" />
                            </ScrollAnimation>
                            <br />
                        </div>
                    </div>
                </div>

                {/*Degrees Received*/}
                <div className='container banner-content text-center pb-5'>
                    <ScrollAnimation animateIn="fadeInUp">
                        <h1>EDUCATION
                            <span className='text-primary'> INFOR </span>
                        </h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sequi nulla exercitationem quasi illo provident debitis voluptatibus nihil, ex id modi numquam voluptatem fuga doloribus aliquam, reiciendis perspiciatis architecto voluptate.
                        </p>
                    </ScrollAnimation>
                    <br />
                    
                        {this.renderDegree()}
                  
                </div>
                {/* Certification for dev */}
                <div className='container banner-content text-center pb-5'>
                    <ScrollAnimation animateIn="fadeInUp">
                        <h1>CERTIFICATE
                            <span className='text-primary'> FOR DEV </span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elito!</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <div className='row'>
                            {this.renderCert()}
                        </div>
                    </ScrollAnimation>
                    <br />
                </div>
                {/* Certification other */}
                <div className='container banner-content text-center pb-5'>
                    <ScrollAnimation animateIn="fadeInUp">
                        <h1>CERTIFICATE
                            <span className='text-primary'> OTHER </span>
                        </h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <div className='row'>
                            {this.renderOther()}
                        </div>
                    </ScrollAnimation>
                    <br />
                </div>

            </div>
        );
    }
}

export default Education;