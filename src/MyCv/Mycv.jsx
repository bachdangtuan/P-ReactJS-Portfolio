import React, { useEffect, useState } from 'react'
import '../CSS/mycv.css';


export default function Mycv() {
    //State Cột bên left
    const [dataCV, setdataCV] = useState({
        contact: {
            sdt: '0934.01.07.04',
            email: 'bdt.tuan@gmail.com',
            diaChi: '44/12 Tan Hai, Ward 13, Tan Binh District'
        },
        social: {
            facebook: 'https://www.facebook.com/darktuan93/',
            github: 'https://github.com/bachdangtuan',
            linedin: '',
            twiter: ''
        },
        hinhAnh: './img/tuan.jpg'
    })
    // State cột bên right
    const [dataWork, setdataWork] = useState([
        {
            "object": "Thám Tử Gia Khánh - Website introducing detective services",
            "year": "12/2021",
            "diadiem": "https://thamtugiakhanh.com/",
            "noidung1": " TeamSize: 1 ",
            "noidung2": " Technology Using: ReactJS, HTML, Bootstrap 4.6, Nginx, Ubuntu 18.04",
            "noidung3": " Mission: Build layout, design interface, deploy server",
        },
        {
            "object": "My-Portfolio",
            "year": "12/2021 - now",
            "diadiem": "https://bachdangtuan.vercel.app/",
            "noidung1": " TeamSize: 1 ",
            "noidung2": " Technology Using: ReactJS, Redux, React Router, Bootstrap, HTML",
            "noidung3": " Mission: Build layout, design interface, deploy vercel app",
        },
    ])
    // State education
    const [dataEdu, setdataEdu] = useState([
        {
            "object": " CyberSoft Academy",
            "year": "12/2021 - 2022",
        },
    ])
    // State Skill
    const [dataSkill, setdataSkill] = useState([
        {
            "object": "TeamWork",
            "width": "89%",
        },
        {
            "object": "Try Hard",
            "width": "80%",

        },
        {
            "object": "Research",
            "width": "80%",
        },
        {
            "object": "Communicate",
            "width": "85%",
        },
    ])

    // Hàm render cột bên phải
    // Render công việc
    const renderCV = () => {
        return dataWork.map((sp, index) => {
            return <div className="work-exp">
                <h6>{sp.object} <span>{sp.year}</span></h6>
                <a href={sp.diadiem} target="_blank" >{sp.diadiem}</a>
                <ul key={index}>
                    <li><i className="far fa-hand-point-right" /> {sp.noidung1} </li>
                    <li><i className="far fa-hand-point-right" /> {sp.noidung2} </li>
                    <li><i className="far fa-hand-point-right" /> {sp.noidung3} </li>
                </ul>
            </div>
        })
    }

    //Render Education
    const renderUdu = () => {
        return dataEdu.map((sp, index) => {
            return <li className="col-md-6"><span>{sp.year}</span> <br />
                {sp.object}</li>



        })

    }
    //Render Skill 
    const renderSkill = () => {
        return dataSkill.map((sp, index) => {
            return (
                <div className="col-md-6" key={index}>
                    <div className=" prog-row row">
                        <div className="col-sm-6">
                            {sp.object}
                        </div>
                        <div className="col-sm-6">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${sp.width}` }} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }





    // Hàm render cột bên trái
    const social = () => {
        const Social = dataCV.social
        for (const key in Social) {
            return (
                <ul className="row social-link no-margin">
                    <li><a href={Social.facebook} target="_blank" className="fab fa-facebook-f" /></li>
                    <li><a href={Social.twiter} target="_blank" className="fab fa-twitter" /></li>
                    <li><a href={Social.linedin} className="fab fa-linkedin-in" /></li>
                    <li><a href={Social.github} target="_blank" className="fab fa-github" /></li>
                </ul>

            )
        }
    }

    const hobie = () => {
        return <ul className="hoby row no-margin">
            <li><i className="fas fa-pencil-alt" /> <br /> Writing</li>
            <li><i className="fas fa-bicycle" /> <br /> Cycling</li>
            <li><i className="fas fa-futbol" /> <br /> Football</li>
            <li><i className="fas fa-film" /><br /> Movies</li>
            <li><i className="fas fa-plane-departure" /> <br />Travel</li>
            <li><i className="fas fa-gamepad" /> <br /> Games</li>
        </ul>
    }
    const renderData = () => {
        return <div>
            <div className="profile-info">
                <img src={dataCV.hinhAnh} alt />
                <h3>Bach Dang Tuan</h3>
                <span>Website Developer</span>
            </div>
            <h4 className="ltitle">Contact</h4>
            <div className="contact-box pb0">
                <div className="icon">
                    <i className="fas fa-phone" />
                </div>
                <div className="detail">
                    {dataCV.contact.sdt}
                </div>
            </div>
            <div className="contact-box pb0">
                <div className="icon">
                    <i className="fas fa-globe-americas" />
                </div>
                <div className="detail">
                    {dataCV.contact.email}
                </div>
            </div>
            <div className="contact-box">
                <div className="icon">
                    <i className="fas fa-map-marker-alt" />
                </div>
                <div className="detail">
                    {dataCV.contact.diaChi}
                </div>
            </div>
            <h4 className="ltitle">Social</h4>

            {social()}

            {/* <h4 className="ltitle">Referencess</h4>
            <div className="refer-cov">
                <b>Jonney Smith</b>
                <p>CEO Casinocarol</p>
                <span>p +00 890 1232 8767</span>
            </div>
            <div className="refer-cov">
                <b>Jonney Smith</b>
                <p>System Administrator</p>
                <span>p +00 890 1232 8767</span>
            </div> */}
            <h4 className="ltitle">Hobbies</h4>
            {hobie()}
        </div>
    }

    return (
        <div className=' position-relative mh-100 w-100 loader' style={{ zIndex: 9430 }}>
            <div className="row m-auto w-100 loader__div "
                style={{
                    background: '#011831',
                    height: 'auto',
                    zoom: '75%'
                }} >
                <div className="container-fluid overcover position-relative mh-100 w-100">
                    <div className="container profile-box">
                        <div className="row">
                            <div className="col-md-4 left-co">
                                <div className="left-side">
                                    {renderData()}
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
                                            <ul className="btn-link buttonDownload">
                                                {/* <li>
                                                    <a href><i className="fas fa-paper-plane" /> Hire Me</a>
                                                </li> */}
                                                {/* <li>
                                                    <a href='https://drive.google.com/u/0/uc?id=1huB0rgaWOWmQtZoz85nDrx7DOYxGRuTH&export=download' download><i className="fas fa-cloud-download-alt" > </i>  Download Resume</a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <h2 className="rit-titl"><i className="fas fa-briefcase" /> Work Experiance</h2>
                                    {renderCV()}
                                    <h2 className="rit-titl"><i className="fas fa-graduation-cap" /> Education</h2>
                                    <div className="education">
                                        <ul className="row no-margin">
                                            {renderUdu()}
                                        </ul>
                                    </div>
                                    <h2 className="rit-titl"><i className="fas fa-users-cog" /> Soft Skills</h2>
                                    <div className="profess-cover row no-margin">
                                        {renderSkill()}
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
