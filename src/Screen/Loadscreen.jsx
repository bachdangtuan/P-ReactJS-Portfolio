import React, { Component } from 'react';

class Loadscreen extends Component {
    test = window.setInterval(function() {
        window.location.href = '/home';
    }, 1500);
    
    render() {
        return (
            <div className='bg-dark position-relative' style={{zIndex:9000}}>
                <div className="row m-auto w-100" 
                style={{
                    background:'#011831',
                    height:'948px',
                }}
                
                >
                <img src={require('../img/loader1.gif')} className='m-auto'/>
                </div>
           
            </div>
        );
    }
}

export default Loadscreen;