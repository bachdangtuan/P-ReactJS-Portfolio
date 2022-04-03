import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import certification from '../data/certification.json';

class Education extends Component {
    renderCert = () => {
        return certification.map((sp, index) => {
            return <div className="col-md-4" key={index}>
                <div class="card">
                    <img className="card-img-top" src={sp.hinhAnh} alt="Card image cap" />
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
                                <img src="../img/logo/asroma.png" alt="" width={60} className="pt-2" />
                                <img src="../img/logo/asroma.png" alt="" width={60} className="pt-2" />
                                <img src="../img/logo/asroma.png" alt="" width={60} className="pt-2" />
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
                    <div className="row degrees pb-4">
                        <div className="col-3 p-0">
                            <ScrollAnimation animateIn="flipInY">
                                <div className='degrees__'>
                                    <img src="../img/logo/asroma.png" alt="" width={60} className="pt-2" />
                                    <p>Fc Inter Milan</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-9 degrees__infor">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugiat porro in voluptatum, iste iusto illum! Fugiat atque provident dicta quos ad consequatur, ducimus voluptate odio id voluptatem dolor officia?
                            Labore, maxime odio beatae debitis, consequatur ipsam quibusdam, sit vel commodi distinctio incidunt cum facere. Vitae eum nostrum nulla dicta libero. Minus distinctio sapiente suscipit quae ducimus ratione at repellat.
                            Doloremque ut possimus, esse officiis iure explicabo praesentium neque blanditiis, autem molestias voluptatibus, cum consectetur vero vitae! Obcaecati unde totam reiciendis ipsum officiis accusamus nam. Dolores doloribus esse voluptatum provident!
                        </div>
                    </div>
                    <div className="row degrees">
                        <div className="col-3 p-0">
                            <ScrollAnimation animateIn="flipInY">
                                <div className='degrees__'>
                                    <img src="../img/logo/asroma.png" alt="" width={60} className="pt-2" />
                                    <p>Fc Inter Milan</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-9 degrees__infor">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugiat porro in voluptatum, iste iusto illum! Fugiat atque provident dicta quos ad consequatur, ducimus voluptate odio id voluptatem dolor officia?
                            Labore, maxime odio beatae debitis, consequatur ipsam quibusdam, sit vel commodi distinctio incidunt cum facere. Vitae eum nostrum nulla dicta libero. Minus distinctio sapiente suscipit quae ducimus ratione at repellat.
                            Doloremque ut possimus, esse officiis iure explicabo praesentium neque blanditiis, autem molestias voluptatibus, cum consectetur vero vitae! Obcaecati unde totam reiciendis ipsum officiis accusamus nam. Dolores doloribus esse voluptatum provident!
                        </div>
                    </div>
                </div>
                {/* Certification for dev */}
                <div className='container banner-content text-center pb-5'>
                    <ScrollAnimation animateIn="fadeInUp">
                        <h1>CERTIFICATIONS
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
                        <h1>CERTIFICATIONS
                            <span className='text-primary'> OTHER </span>
                        </h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <div className='row'>
                            {this.renderCert()}
                        </div>
                    </ScrollAnimation>
                    <br />
                </div>

            </div>
        );
    }
}

export default Education;