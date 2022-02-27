import React, { Component } from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Introduce from './Introduction/Introduce';
import Navbar from './Navbar/Navbar';


class Homepage extends Component {
    render() {
        return (
            <div>
                {/* Navbar */}
                <Navbar />
                {/* Banner */}
                <Banner/>
                <div className="container py-5">
                <div className='py-5'>
                {/* Introduce */}
                <Introduce></Introduce>
                </div>
                </div>
                {/* Footer */}
                <div>
                <Footer></Footer>
                </div>
            </div>


        );
    }
}

export default Homepage;    