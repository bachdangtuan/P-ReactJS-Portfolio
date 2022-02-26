import React, { Component } from 'react';
import Banner from './Banner';
import Introduce from './Introduce';
import Navbar from './Navbar';


class Homepage extends Component {
    render() {
        return (
            <div>
                {/* Navbar */}
                <Navbar />
                {/* Carousel */}
                <Banner/>
                <div className="container py-5">
                    <div className='py-5'>
                        {/* Introduce */}


                        <Introduce></Introduce>

                    </div>
                </div>
            </div>


        );
    }
}

export default Homepage;    