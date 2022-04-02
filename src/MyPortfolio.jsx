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
import Mycv from './MyCv/Mycv';
import Footer from './Home/Footer/Footer';
import { Routes, Route } from 'react-router-dom'



class MyPortfolio extends Component {
    render() {
        return (
            <div>

                <Navbar></Navbar>
                
                <Routes>

                    <Route path="/" element={<Loadscreen />}/>
                    <Route path="/home" element={<Homepage />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects" element={<MyProjects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/working" element={<WorkProcess />} />
                    <Route path="/mycv" element={<Mycv />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
                {/* Footer */}
                <section name='Footer'>
                    <Footer></Footer>
                </section>
            </div>
        );
    }
}

export default MyPortfolio;