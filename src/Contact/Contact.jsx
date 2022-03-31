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
    }
]
class Contact extends Component {
    renderSP = () => {
        return data.map((sp, index) => {
            return <ul>
                <li style={{
                    listStyle: 'none',
                }}>
                    <a href={sp.url}>
                        <img src={sp.img} alt="" width={50} />
                        <span>{sp.name}</span>
                    </a>
                </li>
            </ul>

        })
    }

    render() {
        return (
            <div className='container' style={{
                paddingTop: '150px'
            }}>
                <div className='row align-items-center'>
                    <div className='col-md-6 banner-content'>
                        <ScrollAnimation animateIn="fadeInUp">
                            <h1>CONTACT
                                <span className='text-primary'> ME</span>
                            </h1>
                            <p>I'm online 24/7. I'm ready to reply to your message</p>

                        </ScrollAnimation>
                        <br />
                        <ScrollAnimation animateIn="fadeInUp" >
                            {this.renderSP()}
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

        );
    }
}

export default Contact;


