import React, { Component } from 'react'
import '../CSS/mycv.css';

export default class Mycv extends Component {
    render() {
        return (
            <div className=' position-relative mh-100 w-100 loader' style={{ zIndex: 9430 }}>
                <div className="row m-auto w-100 loader__div "
                    style={{
                        background: '#011831',
                        height: '150vh',
                    }}

                >
                <div className="container-fluid overcover position-relative mh-100 w-100">
                    <div className="container profile-box">
                        <div className="row">
                            <div className="col-md-4 left-co">
                                <div className="left-side">
                                    <div className="profile-info">
                                        <img src="assets/images/profile.jpg" alt />
                                        <h3>Bach Dang Tuan</h3>
                                        <span>Website Developer</span>
                                    </div>
                                    <h4 className="ltitle">Contact</h4>
                                    <div className="contact-box pb0">
                                        <div className="icon">
                                            <i className="fas fa-phone" />
                                        </div>
                                        <div className="detail">
                                            +123 8767 5465 <br />
                                            +122 2345 3763
                                        </div>
                                    </div>
                                    <div className="contact-box pb0">
                                        <div className="icon">
                                            <i className="fas fa-globe-americas" />
                                        </div>
                                        <div className="detail">
                                            info@smarteyeapps.com <br />
                                            www.smarteyeapps.com
                                        </div>
                                    </div>
                                    <div className="contact-box">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt" />
                                        </div>
                                        <div className="detail">
                                            First Floor,Vincent Plaza, Toranto, Canada
                                        </div>
                                    </div>
                                    <h4 className="ltitle">Contact</h4>
                                    <ul className="row social-link no-margin">
                                        <li><i className="fab fa-facebook-f" /></li>
                                        <li><i className="fab fa-twitter" /></li>
                                        <li><i className="fab fa-google-plus-g" /></li>
                                        <li><i className="fab fa-linkedin-in" /></li>
                                        <li><i className="fab fa-github" /></li>
                                    </ul>
                                    <h4 className="ltitle">Referencess</h4>
                                    <div className="refer-cov">
                                        <b>Jonney Smith</b>
                                        <p>CEO Casinocarol</p>
                                        <span>p +00 890 1232 8767</span>
                                    </div>
                                    <div className="refer-cov">
                                        <b>Jonney Smith</b>
                                        <p>System Administrator</p>
                                        <span>p +00 890 1232 8767</span>
                                    </div>
                                    <h4 className="ltitle">Hobbies</h4>
                                    <ul className="hoby row no-margin">
                                        <li><i className="fas fa-pencil-alt" /> <br /> Writing</li>
                                        <li><i className="fas fa-bicycle" /> <br /> Cycling</li>
                                        <li><i className="fas fa-futbol" /> <br /> Football</li>
                                        <li><i className="fas fa-film" /><br /> Movies</li>
                                        <li><i className="fas fa-plane-departure" /> <br />Travel</li>
                                        <li><i className="fas fa-gamepad" /> <br /> Games</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8 rt-div">
                                <div className="rit-cover">
                                    <div className="hotkey">
                                        <h1 className>Bach Dang Tuan </h1>
                                        <small>Website Developer</small>
                                    </div>
                                    <h2 className="rit-titl"><i className="far fa-user" /> Profile</h2>
                                    <div className="about">
                                        <p>My name is Dang Tuan. I have a passion for computers and information technology.
                                        I'm so excited to make a website.
                                        </p>
                                        <div className="btn-ro row no-margin">
                                            <ul className="btn-link">
                                                <li>
                                                    <a href><i className="fas fa-paper-plane" /> Hire Me</a>
                                                </li>
                                                <li>
                                                    <a href><i className="fas fa-cloud-download-alt" /> Download Resume</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h2 className="rit-titl"><i className="fas fa-briefcase" /> Work Experiance</h2>
                                    <div className="work-exp">
                                        <h6>Junior Software Developer <span>2008-2011</span></h6>
                                        <i>Microsoft / United States</i>
                                        <ul>
                                            <li><i className="far fa-hand-point-right" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                            <li><i className="far fa-hand-point-right" /> Sorem dolor sit amet, consectetur. </li>
                                            <li><i className="far fa-hand-point-right" /> Porem ipsum sit amet, consectetur adipiscing </li>
                                        </ul>
                                    </div>
                                    <div className="work-exp">
                                        <h6>Junior Software Developer <span>2008-2011</span></h6>
                                        <i>Microsoft / United States</i>
                                        <ul>
                                            <li><i className="far fa-hand-point-right" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                            <li><i className="far fa-hand-point-right" /> Sed cursus augue risus, ac semper est consectetur vitae </li>
                                        </ul>
                                    </div>
                                    <div className="work-exp">
                                        <h6>Junior Software Developer <span>2008-2011</span></h6>
                                        <i>Microsoft / United States</i>
                                        <ul>
                                            <li><i className="far fa-hand-point-right" /> Praesent consequat metus sit amet rhoncus luctus.
                                            </li>
                                            <li><i className="far fa-hand-point-right" /> Lorem ipsum dolor sit amet, consectetur. </li>
                                        </ul>
                                    </div>
                                    <h2 className="rit-titl"><i className="fas fa-graduation-cap" /> Education</h2>
                                    <div className="education">
                                        <ul className="row no-margin">
                                            <li className="col-md-6"><span>2013-2015</span> <br />
                                                Master Degree - Cambridg University</li>
                                            <li className="col-md-6"><span>2013-2015</span> <br />
                                                Master Degree - Cambridg University</li>
                                            <li className="col-md-6"><span>2013-2015</span> <br />
                                                Master Degree - Cambridg University</li>
                                            <li className="col-md-6"><span>2013-2015</span> <br />
                                                Master Degree - Cambridg University</li>
                                        </ul>
                                    </div>
                                    <h2 className="rit-titl"><i className="fas fa-users-cog" /> Skills</h2>
                                    <div className="profess-cover row no-margin">
                                        <div className="col-md-6">
                                            <div className=" prog-row row">
                                                <div className="col-sm-6">
                                                    Code
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '55%' }}  />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row prog-row">
                                                <div className="col-sm-6">
                                                    Network
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '55%' }}  />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row prog-row">
                                                <div className="col-sm-6">
                                                    Systems
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '55%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row prog-row">
                                                <div className="col-sm-6">
                                                    Hardware
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '55%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  
                </div>

            </div>
        )
    }
}
