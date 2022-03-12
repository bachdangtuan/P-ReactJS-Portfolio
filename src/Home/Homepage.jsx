import React, { Component } from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Introduce from './Introduction/Introduce';
import Navbar from './Navbar/Navbar';

class Homepage extends Component {
    render() {
        return (
            <div name='Hompage'>
                {/* Banner */}
                <section name='Banner'>
                    <Banner />
                </section>
                <section name='Introduction'>
                    <div className="container py-5">
                        <div className='py-5'>
                            {/* Introduce */}
                            <Introduce></Introduce>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <section name='Footer'>
                    <Footer></Footer>
                </section>
            </div>


        );
    }
}

export default Homepage;    