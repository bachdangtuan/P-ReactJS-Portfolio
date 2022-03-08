import React, { Component } from 'react';
import Frontend from './Frontend';
import axios from 'axios';

class Introduce extends Component {
    state = {
        dataProduct: []
      }
      componentDidMount() {
        axios.get(`https://622467d23af069a0f9b511e7.mockapi.io/TuanAPI`)
          .then(res => {
            const dataProduct = res.data;
            console.log(dataProduct);
            this.setState({ dataProduct });
          })
          .catch(error => console.log(error));
      }
      
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