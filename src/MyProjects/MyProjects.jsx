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
            return <div className="col-md-3" key={index}>
                <Card sx={{ maxWidth: 345 }} className='m-auto card__project'>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://picsum.photos/300/200 "
                    />
                    <CardContent className='text-center'>
                        <Typography gutterBottom variant="h5" component="div">
                            Template Mẫu 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, expedita magnam dolores ducimus a libero voluptate officia fugit optio vitae similique possimus veniam nisi labore animi ab laboriosam sit iste!
                        </Typography>
                    </CardContent>
                    <CardActions className='m-auto'>
                        <Button variant="contained"
                            href='https://github.com/bachdangtuan' target="_blank"
                            sx={{
                                borderRadius: '10px',
                                maxHeight: '50px',
                                fontWeight: '600',
                                fontSize: 'medium',
                                background: 'linear-gradient(to right bottom, #896eff, #19293e  )',
                            }}>Live view
                        </Button>
                        <Button variant="contained"
                            href='https://github.com/bachdangtuan' target="_blank"
                            sx={{
                                borderRadius: '10px',
                                maxHeight: '50px',
                                fontWeight: '600',
                                fontSize: 'medium',
                                background: 'linear-gradient(to right bottom, #896eff, #19293e  )',
                            }} data-toggle="modal" data-target="#modelId">Info
                        </Button>
                        <a href='https://google.com'>
                            <SvgGithub></SvgGithub>
                        </a>
                    </CardActions>
                </Card>
            </div>
        })
    }

    //Render Project

    render() {
        return (
            <div>
                <div style={{
                    height: '130px'
                }} className='bg-light'>
                </div>
                <div className='text-center container'>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Đây là trang MyProjects</p>
                        </div>
                        <div className="col-md-6">
                            <p>Ảnh</p>
                        </div>
                    </div>
                </div>
                <div className='bg__project'>
                    <h4 className='text-center text-light'>My Project</h4>
                    <div className="row m-auto  ">
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



