import React, { Component } from 'react';

let test = window.setTimeout(function() {
     window.location.href = '/home';
 }, 2000);
class Loadscreen extends Component {

    render() {
        return (
            <div className='bg-dark position-relative'  style={{zIndex:9000}}>
                    {test}
            </div>
        );
    }
}

export default Loadscreen;