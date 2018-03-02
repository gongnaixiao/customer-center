import React, {Component} from 'react';

class Foobar extends Component {
  render() {
    return (
        <div style={{width:'100%', height:'100%', border:0}}>
          <iframe src="http://127.0.0.1:8082/test"> </iframe>
        </div>
    );
  }
}

export default Foobar