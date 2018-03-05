import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './react-tabs.css'

class Container extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>客户中心</Tab>
        </TabList>
        <TabPanel>
          <span>菜单1</span>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Container