import React, { Component } from 'react';
import Frontend from './Frontend';
import axios from 'axios';
import Backend from './Backend';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  background: linear-gradient(to right bottom, #896eff, #19293e  )
`;

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

      <div className='text-center'>
        <div className='my-4'>

          <h4 className="m-auto" style={{ backgroundColor: 'rgba(137, 110, 255, 0.1)', borderRadius: 10, width: '15%' }}>I CAN<span className="text-primary"> DO </span></h4>
    </div>
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Frontend Development</Tab>
        <Tab>Backend Development</Tab>
        <Tab>Systems Operation</Tab>
      </TabsList>
      <TabPanel value={0}>
          <Frontend detailsFE ={this.state.dataTitle} ></Frontend>   
        </TabPanel>
      <TabPanel value={1}>
      <Backend detailsBE ={this.state.dataTitle} ></Backend>   
        </TabPanel>
      <TabPanel value={2}>Third content</TabPanel>
    </TabsUnstyled>

    </div>

    );
  }
}

export default Introduce;