import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


class WorkProcess extends Component {
    render() {
        return (
            <div>
                {/* Ảnh background và chữ  */}
                <div>
                    <div className='container pb-5' style={{
                        paddingTop: '220px'
                    }}>
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
                            <div className="col-md-6 frontEnd myproject">
                                <ScrollAnimation animateIn="fadeIn" delay={400}>
                                    <img src={require('../img/shadow.png')} />
                                    <img src={require('../img/banner.png')} />
                                    <img src={require('../img/title.png')} />
                                    <img src={require('../img/plan.png')} />
                                    <img src={require('../img/char2.png')} />
                                    <img src={require('../img/char1.png')} />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Accordion */}
                <div className='container pb-5'>
                    <Accordion className='h1'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h5>FPT Information Systems (2016-2017)</h5>
                        </AccordionSummary>
                        <AccordionDetails>
                            
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='h1'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <h5>J&T Express (2019-2020)</h5>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <h5>Terralogic Software (2020-now)</h5>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>

        );
    }
}

export default WorkProcess;