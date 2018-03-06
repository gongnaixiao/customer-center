import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      pages: []
    };
  }

  componentDidMount() {
    //首页

    //TODO 当点击菜单的时候，打开菜单指向的标签页 菜单
    this.setState({
      menus: [
        {
          id: 1,
          name: '菜单1',
          url: ''
        }, {
          id: 2,
          name: '菜单2',
          url: ''
        }
      ]
    });

  }

  handleClick(menu) {
    const pages = this
      .state
      .pages
      .slice();
    if (!pages.includes(menu)) {
      pages.push(menu);
    }
    
    this.setState({pages: pages});
  }

  render() {
    const pages = this
      .state
      .pages
      .slice();
    const menus = this
      .state
      .menus
      .slice();

    return (
      <Tabs>
        <TabList>
          <Tab>
            首页
          </Tab>
          {pages.map((page) => <Tab key={page.id}>
            {page.name}
          </Tab>)}
        </TabList>
        <TabPanel>
          {menus.map((menu) => <button
            key={menu.id}
            onClick={this
            .handleClick
            .bind(this, menu)}>{menu.name}</button>)}</TabPanel>

        {pages.map((page) => <TabPanel key={page.id}>
          <p>
            {page.content}
          </p>
        </TabPanel>)}
      </Tabs>
    );
  }
}

export default Container