import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, LocationProvider} from '@reach/router';

import createHashSource from 'hash-source';
import {createHistory} from '@reach/router';

const source = createHashSource();
const customHistory = createHistory(source);

class Route extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <LocationProvider history={customHistory}>
        <Router style={{height: '100%'}}>
          <Route path="default" default />
        </Router>
      </LocationProvider>
    );
  }
}

export default App;
