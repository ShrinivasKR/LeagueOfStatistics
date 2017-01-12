import React, { Component } from 'react';
import Logo from './Logo/Logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo height="5em"/>
        </div>
        <p className="App-intro">
          To get started, enter your Summoner Name.
        </p>
      </div>
    );
  }
}

export default App;
