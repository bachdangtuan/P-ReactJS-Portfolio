import React, { Component } from 'react';
// import Education from './Education/Education';
import Homepage from './Home/Homepage';
import Navbar from './Home/Navbar/Navbar';
import NoMatch from './ErrorPage/NoMatch';
import Education from './Education/Education';
import Contact from './Contact/Contact';
import WorkProcess from './WorkProcess/WorkProcess';
import MyProjects from './MyProjects/MyProjects';


import { Routes, Route } from 'react-router-dom'



class MyPortfolio extends Component {
    render() {
        return (
            <div>
                
                    <Navbar></Navbar>
            
                <div>
                 
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects" element={<MyProjects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/working" element={<WorkProcess />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
                </div>
            </div>
        );
    }
}

export default MyPortfolio;