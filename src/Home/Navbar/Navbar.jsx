import { height } from '@mui/system';
import React, { useState, useEffect } from 'react'
import '../../CSS/nav-bar.css'
import Fade from 'react-reveal/Fade'; //Lib react-reveal
import { NavLink } from 'react-router-dom'

//Lib Animate React JS (add styled)



// renderSP = () => {
//     for (const key in menuHeader) {
//         console.log(key);

//     }
// }

export default function Navbar() {

    // Add Class => xuat hien sau boi vi khi load web no phai chay cai function nay moi them vao web dc
    // function addClasst() {
    //     let addClass = document.querySelectorAll('.nav-menu ul li')
    //     for (const input of addClass) {
    //         { input.className = 'pr-4' ; }
    //     }
    // }
    // addClasst();
    // In menu duyệt object

    // Scroll man hinh
    const [curentNav, scrollNav] = useState("130px");
    const [currentNavColor, scrollNavColor] = useState("transparent");
    const [boxShadownNav, scrollBoxshadowNav] = useState('none');


    let scrollFunction = function () {
        window.scrollY > 10 ? scrollNavColor("white") : scrollNavColor("transparent")
        window.scrollY > 10 ? scrollNav("80px") : scrollNav("130px")
        window.scrollY > 10 ? scrollBoxshadowNav("rgb(0 0 254 / 10%) 0px 0px 50px 0px") : scrollBoxshadowNav("none")
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollFunction);
        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
    },
        []);



    // RETURN

    return (
        <nav className='navbar nav-menu navbar-expand-lg fixed-top ' style={{
            backgroundColor: currentNavColor,
            height: curentNav,
            boxShadow: boxShadownNav,
            transition: "all 1s",
        }}>

            <div className="container m-auto">
                <Fade top>
                    <NavLink to="/" className="nav-link navbar-brand ">
                        <h3>DΛn9Tuaz</h3>
                    </NavLink>
                    <button className="navbar-toggler collapsed navicon justify-content-end " type="button"
                        data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=''></span>
                        <span className=''></span>
                        <span className=''></span>

                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <a className="navbar-brand logo-header" href="#">
                            <h5>DΛn9Tuaz©</h5>
                        </a>

                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className='nav-item pr-3'>
                                <NavLink to="/" className="nav-link active">Home
                                    <i class="fa fa-chevron-right"></i>
                                </NavLink>
                            </li>
                            <li className='nav-item pr-3'>
                                <NavLink to="/education" className="nav-link active">Education
                                    <i class="fa fa-chevron-right"></i>
                                </NavLink>
                            </li>
                            <li className='nav-item pr-3'>
                                <NavLink to="/working" className="nav-link active">Working Process
                                    <i class="fa fa-chevron-right"></i>
                                </NavLink>
                            </li>
                            <li className='nav-item pr-3'>
                                <NavLink to="/projects" className="nav-link active">My Projects
                                    <i class="fa fa-chevron-right"></i>
                                </NavLink>
                            </li>
                            <li className='nav-item pr-3'>
                                <NavLink to="/contact" className="nav-link active">Contact
                                    <i class="fa fa-chevron-right"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Fade>

            </div>
        </nav>
    )
}
