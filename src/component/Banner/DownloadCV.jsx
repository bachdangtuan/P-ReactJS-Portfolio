import React, { Component } from 'react'
import Button from '@mui/material/Button';



export default class  DownloadCV extends Component {
  render() {

    return (
      <div>

        <Button variant="contained" 
          sx={{
            fontWeight: 'bolder',
            fontSize:'larger',
            background: 'linear-gradient(to right bottom, #896eff, #3d90ff  )',
          }}>Download CV</Button>
          
         
      </div >

    )
  }
} 
