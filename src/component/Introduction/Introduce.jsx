import React, { Component } from 'react';
import Frontend from './Frontend';
import axios from 'axios';
import ScrollAnimation from 'react-animate-on-scroll';
import Backend from './Backend';


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

      <div className=" introduction">
        <div name="frontend">
            <div className='text-center'>
              <h1 className='m-auto' style={{
                backgroundColor: 'rgba(137,110,255,.1)',
                borderRadius: '10px',
                width: '30%'
              }}>I CAN
                <span className='text-primary'> DO </span>
              </h1>
            </div>
          <ScrollAnimation animateIn='zoomIn'>
            <h1 className='mt-4 text-center'>Frontend
              <span className='text-primary'> Development</span>
            </h1>
          </ScrollAnimation>
          <Frontend detailsFE={this.state.dataTitle}></Frontend>

        </div>



        <div name="backend">
          <ScrollAnimation animateIn='zoomIn' delay={500}>
            <h1 className='mt-4 text-center'>Backend
              <span className='text-primary'> Development</span>
            </h1>
          </ScrollAnimation>
          <Backend detailsBE={this.state.dataTitle}></Backend>


        </div>
      </div>

    );
  }
}

export default Introduce;