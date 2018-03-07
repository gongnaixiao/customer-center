import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import close from '../close.svg';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      pages: [],
      selectedIndex: 0
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

    if (pages.findIndex(item => item.id === menu.id) == -1) {
      pages.push({id: menu.id, title: menu.name, content: menu.name});
    }

    this.setState({pages: pages, selectedIndex: menu.id});
  }

  closeClick(page, event) {
    event.preventDefault();
    const pages = this
      .state
      .pages
      .slice();
    pages.splice(pages.findIndex(item => item.id === page.id), 1);

    this.setState({pages: pages, selectedIndex: 0});
  }

  handleSelected(index, last) {
    this.setState({
      selectedIndex: index,
      //...otherStateUpdates
    });
    return false;
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
      <Tabs
        onSelect={this
        .handleSelected
        .bind(this)}
        selectedIndex={this.state.selectedIndex}>
        <TabList>
          <Tab>
            首页
          </Tab>

          {pages.map((page) => <Tab key={page.id}>
            {page.title}
            <img
              style={{
              position: 'absolute',
              opacity: 1,
              marginTop: 1.1,
              marginRight: 5.1,
              height: 16
            }}
              src={close}
              onClick={this
              .closeClick
              .bind(this, page)}/>
          </Tab>)
}

        </TabList>

        <TabPanel>
          {menus.map((menu) => <button
            key={menu.id}
            onClick={this
            .handleClick
            .bind(this, menu)}>{menu.name}</button>)}
        </TabPanel>

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