import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import close from '../close.svg';
import './react-tabs.css'
import Foobar from './Foobar'

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
          url: 'www.baidu.com'
        }, {
          id: 2,
          name: '菜单2',
          url: 'www.baidu.com'
        }
      ]
    });

  }

  handleClick(menu) {
    const pages = this
      .state
      .pages
      .slice();

    let selectedIndex = pages.findIndex(item => item.id === menu.id);
    if (selectedIndex == -1) {
      pages.push({id: menu.id, title: menu.name, content: menu.name});
      selectedIndex = pages.length;
    } else {
      selectedIndex++;
    }

    this.setState({pages: pages, selectedIndex: selectedIndex});
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

  handleSelected(index, last, event) {
    const target = event.target;
    if (!(target.name === 'close')) {
      this.setState({selectedIndex: index});
    }
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
        selectedIndex={this.state.selectedIndex}
        style={{
        width: '100%',
        height: '100%'
      }}>
        <TabList>
          <Tab>
            首页
          </Tab>

          {pages.map((page) => <Tab key={page.id}>
            {page.title}
            <img
              name='close'
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
          </Tab>)}

        </TabList>

        <TabPanel>
          {menus.map((menu) => <button
            key={menu.id}
            onClick={this
            .handleClick
            .bind(this, menu)}>{menu.name}</button>)}
        </TabPanel>

        {pages.map((page) => <TabPanel key={page.id}>
          {page.content}
        </TabPanel>)}

      </Tabs>
    );
  }
}

export default Container