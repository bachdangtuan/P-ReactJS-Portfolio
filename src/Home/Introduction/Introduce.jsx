import React, { Component } from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import SystemOperation from './SystemOperation';

import axios from 'axios';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const purple = {
  50: '#EE82EE',
  100: '#DA70D6',
  200: '#FF00FF',
  300: '#BA55D3',
  400: '#19293e',
  500: '#6f42c1',
  600: '#9400D3',
  700: '#9932CC',
  800: '#8B008B',
  900: '#800080',
  1000: '#ffffff',
};

const Tab = styled(TabUnstyled)`
  color: white;
  cursor: pointer;
  font-size: 18px;
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
    background-color: ${purple[1000]};
    color: ${purple[500]};
  }

  &:focus {
    color: ${purple[500]};
    border-radius: 5px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${purple[1000]};
    color: ${purple[500]};
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
        console.log(dataTitle);
      })
      .catch(error => console.log('test error', error));
  }


  render() {
    return (

      <div className='text-center'>
        <div className='my-4'>

          <h1 className="m-auto texth4" style={{ borderRadius: 10 }}>I CAN<span className="text-primary"> DO </span></h1>
        </div>
        <TabsUnstyled defaultValue={0}>
          <TabsList>
            <Tab>Frontend Development</Tab>
            <Tab>Systems Operation</Tab>
            <Tab>Backend Development</Tab>
          </TabsList>
          <TabPanel value={0}>
            <Frontend detailsFE={this.state.dataTitle} />
          </TabPanel>
          <TabPanel value={1}>
            <SystemOperation detailsSO={this.state.dataTitle} />
          </TabPanel>
          <TabPanel value={2}>
            <Backend detailsBE={this.state.dataTitle} />
          </TabPanel> 
        </TabsUnstyled>

      </div>

    );
  }
}

export default Introduce;