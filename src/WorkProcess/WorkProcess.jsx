import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import working from '../data/working.json';

class WorkProcess extends Component {

    renderWorking = () =>{
        return working.map((sp,index) =>{
            return  <Accordion className='h1'>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <h5>{sp.company}</h5>
            </AccordionSummary>
            <AccordionDetails>
                <div className="row container">
                    <div className="col-3">
                    <img src={sp.hinhAnh} alt="" width={100} className="float-left" style={{
                        width:'100%',
                        height:'100%',
                    }} />
                    </div>
                    <div className='container col-9' >
                        <h5>{sp.tieude}</h5>
                        <p>{sp.title1}</p>
                        <h6>Position: {sp.position}</h6>
                        <p>{sp.title2}</p>
                    </div>
                    <h6>Work Experience</h6>
                    <p>{sp.exper1}</p>
                    <p>{sp.exper2}</p>
                    <p>{sp.exper3}</p>
                </div>
            </AccordionDetails>
        </Accordion>
        })
    }

    render() {
        return (
            <div>
                {/* Ảnh background và chữ  */}
                <div className='container' style={{
                    paddingTop: '220px'
                }}>
                    <div className='height_'>
                        <div className='row align-items-center'>
                            <div className='col-md-6 banner-content'>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <h1>WORKING
                                        <span className='text-primary'> PROCESS </span>
                                    </h1>
                                    <p>I used to study and work in an information technology environment as a Network Engineer, Systems Administrator.<br /> <br />
                                        I had 1 year of self-study for Developer Website at Terralogic Software.In addition, I have some other skills in information technology
                                    </p>

                                </ScrollAnimation>
                                <br />
                            </div>
                            <div className="col-md-6 frontEnd myproject workprocess">
                                <ScrollAnimation animateIn="fadeIn" delay={400}>
                                    <img src={require('../img/khung.png')} />
                                    <img src={require('../img/binhnuoc.png')} />
                                    <img src={require('../img/nv1.png')} />
                                    <img src={require('../img/ban.png')} />
                                    <img src={require('../img/nv2.png')} />
                                    <img src={require('../img/nv4.png')} />
                                    <img src={require('../img/nv3.png')} />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Accordion */}
                <div className='container pb-5'>
                        {this.renderWorking()};
                </div>
            </div>

        );
    }
}

export default WorkProcess;