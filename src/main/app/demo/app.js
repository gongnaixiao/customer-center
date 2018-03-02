import React, {Component} from 'react';
import Container from './tab/Container'
import Greeter from './greet/Greeter'
import Clicker from './clicker/Clicker'

export default class App extends Component {
  render() {
    return (<Clicker />);
  }
}