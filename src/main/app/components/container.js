import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      store: []
    };
  }

  componentDidMount() {
    //首页

    //TODO 当点击菜单的时候，打开菜单指向的标签页
    this.setState({
      store: [
        {
          id: 1,
          title: 'first',
          content: 'first content'
        }, {
          id: 2,
          title: 'second',
          content: 'second content'
        }
      ]
    });
  }

  handleClick(id) {
    alert(this.state.store[id]);
  }

  render() {
    const tabStore = this
      .state
      .store
      .slice();

    return (
      <Tabs>
        <TabList>
          <Tab>
            首页
          </Tab>
          {tabStore.map((one) => <Tab key={one.id}>
            {one.title}
          </Tab>)
}
        </TabList>
        <TabPanel>
          <button onClick={(one) => this.handleClick().bind(this)}>
            菜单1
          </button>
          <button>
            菜单2
          </button>
        </TabPanel>
        {tabStore.map((one) => <TabPanel key={one.id}>
          <p>
            {one.content}
          </p>
        </TabPanel>)
}

      </Tabs>
    );
  }
}

export default Container