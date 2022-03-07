import { height } from '@mui/system';
import React, { useState, useEffect } from 'react'
import '../../CSS/nav-bar.css'
import DownloadCV from '../Banner/DownloadCV';
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
const sIDAnimation = keyframes`${slideInDown}`

const SIDdiv = styled.div`
    animation: 1s ${sIDAnimation};
`;

export default function Navbar() {

    // Add Class => xuat hien sau boi vi khi load web no phai chay cai function nay moi them vao web dc
    // function addClasst() {
    //     let addClass = document.querySelectorAll('.nav-menu ul li')
    //     for (const input of addClass) {
    //         { input.className = 'pr-4' ; }
    //     }
    // }
    // addClasst();

    // Scroll man hinh
    const [curentNav, scrollNav] = useState("130px");
    const [currentNavColor, scrollNavColor] = useState("transparent");
    const [boxShadownNav, scrollBoxshadowNav] = useState('none');


    let scrollFunction = function () {
        window.scrollY > 10 ? scrollNavColor("white") : scrollNavColor("transparent")
        window.scrollY > 10 ? scrollNav("80px") : scrollNav("130px")
        window.scrollY > 10 ? scrollBoxshadowNav("rgb(137 110 254 / 10%) 0px 0px 50px 0px") : scrollBoxshadowNav("none")
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollFunction);
        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
    }, []);



    // RETURN

    return (
        <nav className='navbar nav-menu navbar-expand-lg fixed-top ' style={{
            backgroundColor: currentNavColor,
            height: curentNav,
            boxShadow: boxShadownNav,
            transition: "all 1s",
        }}>
            <div className="container m-auto">
                <SIDdiv>
                    <a className="navbar-brand" href="#">
                        <img src={require('../../img/logo2.png')} style={
                            { height: '65px' }} />
                    </a>

                 </SIDdiv>
                 <SIDdiv>
                     
                    <button className="navbar-toggler collapsed navicon justify-content-end " type="button"
                        data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=''></span>
                        <span className=''></span>
                        <span className=''></span>

                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <a className="navbar-brand logo-header" href="#">
                            <img src={require('../../img/logo3.png')} style={
                                {
                                    height: '65px',
                                    transform: 'translate(-10px, -15px)'
                                }} />
                        </a>

                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className='nav-item pr-3'>
                                <a className="nav-link active" aria-current="page" href="#">Home
                                    <i class="fa fa-chevron-right"></i>
                                </a>
                            </li>
                            <li className='nav-item pr-3'>
                                <a className="nav-link" href="#">Education
                                    <i class="fa fa-chevron-right"></i>
                                </a>
                            </li>
                            <li className='nav-item pr-3'>
                                <a className="nav-link" href="#">My Projects
                                    <i class="fa fa-chevron-right"></i>
                                </a>
                            </li>
                            <li className='nav-item pr-3'>
                                <a className="nav-link" href="#">Contract
                                    <i class="fa fa-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                 </SIDdiv>
            </div>
        </nav>
    )
}
