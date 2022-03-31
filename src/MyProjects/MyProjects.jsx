import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../CSS/myproject.css';
import axios from 'axios';
import SvgGithub from '../Home/Banner/SvgGithub';
import ModalProject from './ModalProject';
import ScrollAnimation from 'react-animate-on-scroll';
class MyProjects extends Component {

    
    state = {
        dataProject: []
    }
    componentDidMount() {

        axios.get(`https://621e368a849220b1fc93323b.mockapi.io/dataproject`)
            .then(res => {
                const dataProject = res.data;
                this.setState({ dataProject });

            })
            .catch(error => console.log('test error', error));
    }

    renderProject = () => {
        
        let dataProd = this.state.dataProject
        return dataProd.map((sp, index) => {
            return <d iv className="col-xl-3" key={index}>
                <Card sx={{ maxWidth: 345 }} className='m-auto card__project'>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://picsum.photos/300/200"
                    />
                    <CardContent className='text-center'>
                        <Typography gutterBottom variant="h5" component="div">
                            {sp.tenSP}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {sp.description}
                        </Typography>
                    </CardContent>
                    <CardActions className='m-auto'>
                        <Button variant="contained"
                            href={sp.link} target="_blank"
                            sx={{
                                borderRadius: '10px',
                                maxHeight: '50px',
                                fontWeight: '600',
                                fontSize: 'medium',
                                background: 'linear-gradient(to right bottom, #896eff, #19293e  )',
                            }}>Live view
                        </Button>
                        <Button variant="contained"
                            href='#'
                            sx={{
                                borderRadius: '10px',
                                maxHeight: '50px',
                                fontWeight: '600',
                                fontSize: 'medium',
                                background: 'linear-gradient(to right bottom, #896eff, #19293e  )',
                            }} data-toggle="modal" data-target="#modelId">Info
                        </Button>
                        <a href='https://google.com'>
                            <Button href='#'>
                             <SvgGithub></SvgGithub>

                            </Button>
                        </a>
                    </CardActions>
                </Card>
            </d>
        })
    }

    //Render Project

    render() {
        return (
            <div>
                <div className='container pb-5' style={{
                    paddingTop: '150px'
                }}>
                    <div className='row align-items-center'>
                        <div className='col-md-6 banner-content'>
                            <ScrollAnimation animateIn="fadeInUp">
                                <h1>MY
                                    <span className='text-primary'> PROJECT </span>
                                </h1>
                                <p>I am always looking and learning everywhere to improve my personal skills. The way that I teach myself is practice.
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
                <div className='bg__project pb-5'>
                    <div className="row m-auto pt-5 ">
                        {/* Danh Sách Dự Án */}
                        {this.renderProject()}
                    </div>
                </div>
                <ModalProject></ModalProject>
            </div>
        );
    }
}

export default MyProjects;



