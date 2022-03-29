import React, { Component } from 'react';

class Loadscreen extends Component {
    test = window.setInterval(function() {
        window.location.href = '/home';
    }, 800);

    render() {
        return (
            <div className=' position-relative mh-100 w-100 loader' style={{ zIndex: 9430 }}>
                <div className="row m-auto w-100 loader__div "
                    style={{
                        background: '#011831',
                        height: '100vh',
                    }}

                >
                    <img src={require('../img/loader1.gif')} className='m-auto' />
                </div>

            </div>
        );
    }
}

export default Loadscreen;