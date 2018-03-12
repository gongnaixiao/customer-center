import React, {Children, cloneElement, Component} from 'react';

class L1 extends Component {

  getChildren() {
    const {children} = this.props;

    return Children.map(children, (child) => {
      return child;
    });
  }

  render() {
    return (
      <div>
        L1 is now
        <div>
          {this.getChildren()}
        </div>
      </div>
    );
  }
}

export default L1;