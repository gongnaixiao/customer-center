import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './react-tabs.css'

class Container extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Mario</Tab>
          <Tab disabled>Luigi</Tab>
          <Tab>Peach</Tab>
          <Tab>Yoshi</Tab>
          <Tab>Toad</Tab>
        </TabList>
        <TabPanel>
          <p>Mario</p>
        </TabPanel>
        <TabPanel>
          <p>Luigi</p>
        </TabPanel>
        <TabPanel>
          <p>Peach</p>
        </TabPanel>
        <TabPanel>
          <p>Yoshi</p>
        </TabPanel>
        <TabPanel>
          <p>Toad</p>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Container