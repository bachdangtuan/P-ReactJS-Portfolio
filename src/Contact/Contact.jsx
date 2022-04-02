import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@mui/material/Button';

let data = [
    {
        url: 'https://zalo.me/0934010704',
        img: '../img/logo-zalo.png',
        name: "Talk with me via Zalo"
    },
    {
        url: "skype:live:.cid.592f5cd485144be1?chat",
        img: '../img/skype.png',
        name: "Connect with me via Skype"
    },
    {
        url: 'https://www.facebook.com/darktuan93/',
        img: '../img/f.png',
        name: "My Facebook"
    },
    {
        url: "mailto:bachdangtuan93@gmail.com",
        img: '../img/gm.png',
        name: "My Email "
    },
    {
        url: "mailto:bachdangtuan93@gmail.com",
        img: '../img/telegram.png',
        name: "My Email "
    },
    {
        url: "mailto:bachdangtuan93@gmail.com",
        img: '../img/instagram.png',
        name: "My Email "
    },
]
let map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1382793695248!2d106.63780211428715!3d10.800719561699465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529503326c8c7%3A0x8b0b14c5aeb77460!2zNDQsIDEyIFTDom4gSOG6o2ksIFBoxrDhu51uZyAxMywgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1648916181371!5m2!1sen!2s"

class Contact extends Component {
    renderSP = () => {
        return data.map((sp, index) => {
            return (
                <a href={sp.url} className='pr-4' target="_blank">
                    <img src={sp.img} alt="" width={50} />
                </a>
            )




        })
    }

    render() {
        return (
            <div className='container' style={{
                paddingTop: '220px'
            }}>
                <div className='row align-items-center pb-5'>
                    <div className='col-md-6 banner-content'>
                        <ScrollAnimation animateIn="fadeInUp">
                            <h1>CONTACT
                                <span className='text-primary'> ME</span>
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut repellendus voluptatibus maiores omnis adipisci ea quia eveniet consequuntur in architecto ipsa dolor quos, alias esse asperiores hic eos ullam perferendis.</p>
                        </ScrollAnimation>
                        <br />
                        <ScrollAnimation animateIn="fadeInUp" >
                            {this.renderSP()}
                            <hr />
                            <Button variant="contained"
                                href='/mycv' target="_blank"
                                sx={{
                                    borderRadius: '10px',
                                    maxHeight: '50px',
                                    fontWeight: '600',
                                    fontSize: 'medium',
                                    background: 'linear-gradient(to right bottom, #896eff, #19293e  )',
                                }}> 🌟 My Resume
                            </Button>
                        </ScrollAnimation>
                    </div>
                    <div className="col-md-6 frontEnd myproject">
                        <ScrollAnimation animateIn="fadeIn" width='100'>
                            <img src={require('../img/Globalization-amico.png')} />
                            <img src={require('../img/hihi1.png')} style={
                                { animation: 'none' }
                            } />
                            <img src={require('../img/hihi2.png')} />
                            <img src={require('../img/hihi3.png')} />
                            <img src={require('../img/hihi4.png')} />
                        </ScrollAnimation>
                    </div>
                </div>
                {/* My blog */}

                <div className='row align-items-center pb-5'>
                    <div className="col-md-6 frontEnd">
                        <ScrollAnimation animateIn="fadeIn" >
                            <img src={require('../img/img6.png')} />
                        </ScrollAnimation>
                    </div>
                    <div className='col-md-6 banner-content text-center'>
                        <ScrollAnimation animateIn="fadeInUp">
                            <h1>MY
                                <span className='text-primary'> BLOG</span>
                            </h1>
                        </ScrollAnimation>
                        <br />
                        <ScrollAnimation animateIn="fadeInUp" >
                            <p>Comming Soon !</p>

                            <Button variant="contained"
                                href='/mycv' target="_blank"
                                sx={{
                                    borderRadius: '10px',
                                    maxHeight: '50px',
                                    fontWeight: '600',
                                    fontSize: 'medium',
                                    background: 'linear-gradient(to right bottom, #896eff, #19293e  )',
                                }}> 🌟 Visit MyBlog
                            </Button>
                        </ScrollAnimation>
                    </div>
                </div>

                {/* My Address */}
                <div className='row align-items-center'>
                    <div className='col-md-6 banner-content text-center'>
                        <ScrollAnimation animateIn="fadeInUp">
                            <h1>MY
                                <span className='text-primary'> ADDRESS</span>
                            </h1>
                        </ScrollAnimation>
                        <br />
                        <ScrollAnimation animateIn="fadeInUp" >
                            <p>44/12 TÂN HẢI</p>
                            <p>PHƯỜNG 12 QUẬN TÂN BÌNH </p>
                            <p>THÀNH PHỐ HỒ CHÍ MINH</p>
                        </ScrollAnimation>
                    </div>

                    <div className="col-md-6 frontEnd pb-5">
                        <ScrollAnimation animateIn="fadeIn" >
                        <iframe src={map} width={5
                            
                            50} height={460} style={{ border: '2px solid #896eff' }} allowFullScreen loading="lazy"  title="Địa chỉ nhà của Tuấn"/>

                        </ScrollAnimation>
                    </div>

                </div>
             
            </div>

        );
    }
}

export default Contact;


