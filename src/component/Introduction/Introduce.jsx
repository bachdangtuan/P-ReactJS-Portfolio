import React, { Component } from 'react';
import Frontend from './Frontend';

class Introduce extends Component {
    render() {
        return (
            <div className="container">
                <h1 className='text-center'>I CAN
                    <span className='text-primary'> DO !</span>
                </h1>
                <Frontend></Frontend>
            </div>

        );
    }
}

export default Introduce;