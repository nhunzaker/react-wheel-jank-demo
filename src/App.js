import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { times } from 'lodash';

function wait(time) {
  console.log('Blocking!')
  var startTime = (new Date()).getTime();
  var endTime = startTime + time;
  while ((new Date()).getTime() < endTime) {
    // wait for it...
  }
  console.log('Not blocking!')
}

// jank up the main thread!
setInterval(() => wait(3000), 4000)

var scrollableDivStyle = {
  width: 300,
  height: 200,
  overflowY: 'auto',
  margin: '0 auto',
  background: '#ededed'
};

class App extends Component {
  onWheel () {
    console.log('wheel')
  }

  onTouchStart () {
    console.log('touch start')
  }

  onTouchMove () {
    console.log('touch move')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Wheel Jank Demo</h2>
        </div>
        <h3>Version 2</h3>
        <p className="App-intro">
          In this version, we have a React-style <code>onWheel</code> event only attached
          to the inner div, but this also adds a global <code>wheel</code> event to the
          whole document under the hood.
        </p>
        <div style={scrollableDivStyle} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onWheel={this.onWheel}>
          <h2>I am scrollable!</h2>
          <ul>
            {(times(50, i => (<li key={i}>List item #{i + 1}</li>)))}
          </ul>
        </div>
        <ul>
          {(times(50, i => (<li key={i}>List item #{i + 1}</li>)))}
        </ul>
      </div>
    );
  }
}

export default App;
