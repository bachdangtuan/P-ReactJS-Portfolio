import React, { Component } from 'react'
import Button from '@mui/material/Button';
import SvgGithub from './SvgGithub';


export default class  DownloadCV extends Component {
  render() {

    return (
      <div>

        <Button variant="contained" 
          sx={{
            borderRadius:'10px',
            maxHeight:'50px',
            fontWeight: '600',
            fontSize:'medium',
            background: 'linear-gradient(to right bottom, #896eff, #19293e  )',
          }}>Follow me on GitHub <SvgGithub></SvgGithub>
         </Button>
          
     
      </div >

    )
  }
} 
