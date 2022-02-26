import React, { Component } from 'react';
import Carousel from './Carousel';
import Introduce from './Introduce';
import Navbar from './Navbar';


class Homepage extends Component {
    render() {
        return (
            <div>
                {/* Navbar */}
                <Navbar/>
                {/* Carousel */}
                <div><Carousel/></div>
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