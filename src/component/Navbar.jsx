import React, { useState, useEffect } from 'react'
import '../CSS/nav-bar.css';



export default function Navbar() {

    // Add Class 
    function addClasst() {
        let addClass = document.querySelectorAll('.nav-menu ul li')
        for (const input of addClass) {
            { input.className = 'nav-item pr-4' ; }
        }
    }
    addClasst();

    // Scroll man hinh
    const [curentNav, scrollNav] = useState("130px");
    const [currentNavColor, scrollNavColor] = useState("transparent");
    const [boxShadownNav, scrollBoxshadowNav] = useState('none');


    let scrollFunction = function () {
        window.scrollY > 10 ? scrollNavColor("white") : scrollNavColor("transparent")
        window.scrollY > 10 ? scrollNav("80px") : scrollNav("130px")
        window.scrollY > 10 ? scrollBoxshadowNav("rgb(0 0 0 / 50%) 0px 0px 50px 0px") : scrollBoxshadowNav("none")
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
            <div className="container">
                <a className="navbar-brand" href="#">Dang Tuan</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li>
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">Education</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">My Projects</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">Contract</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
