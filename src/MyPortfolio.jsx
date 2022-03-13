import React, { Component } from 'react';
// import Education from './Education/Education';
import Homepage from './Home/Homepage';
import Navbar from './Home/Navbar/Navbar';
import NoMatch from './ErrorPage/NoMatch';
import Education from './Education/Education';
import Contact from './Contact/Contact';
import WorkProcess from './WorkProcess/WorkProcess';
import MyProjects from './MyProjects/MyProjects';
import Loadscreen from './Screen/Loadscreen';

import { Routes, Route } from 'react-router-dom'



class MyPortfolio extends Component {
    render() {
        return (
            <div>

                <Navbar></Navbar>


                    <Routes>
                       
                    {/* let test = window.setTimeout(function() {
     window.location.href = '/home';
 }, 2000); */}

                        <Route path="/" element={<Loadscreen />}
                     
                        />
                        <Route path="/home" element={<Homepage />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/projects" element={<MyProjects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/working" element={<WorkProcess />} />
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
   
            </div>
        );
    }
}

export default MyPortfolio;