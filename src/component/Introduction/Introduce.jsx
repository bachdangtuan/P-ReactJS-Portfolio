import React, { Component } from 'react';
import Frontend from './Frontend';
import axios from 'axios';
import ScrollAnimation from 'react-animate-on-scroll';

class Introduce extends Component {
  state = {
    dataTitle: []
  }
  componentDidMount() {

    axios.get(`https://622467d23af069a0f9b511e7.mockapi.io/TuanAPI`)
      .then(res => {
        const dataTitle = res.data;
        this.setState({ dataTitle });
      })
      .catch(error => console.log('test error', error));
  }


  render() {
    return (

      <div className="container">
        <ScrollAnimation animateIn="fadeInUp">
          <h1 className='text-center'>I CAN
            <span className='text-primary'> DO !</span>
          </h1>

          <Frontend details={this.state.dataTitle}></Frontend>

        </ScrollAnimation>
      </div>

    );
  }
}

export default Introduce;