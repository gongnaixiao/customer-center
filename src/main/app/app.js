import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container'

import Greeter from './demo/Greeter';
//import {AppContainer} from 'react-hot-loader'
import './demo/main.css';

ReactDOM.render(
    <Greeter />,
    document.getElementById('root')
);