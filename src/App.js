import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Counter from './components/Counter'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { countValue: 7 }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState({countValue: this.state.countValue + 1})
  }

  decrement() {
    this.setState({countValue: this.state.countValue - 1})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter 
          value={this.state.countValue}
          onIncrement={this.increment}
          onDecrement={this.decrement} />
      </div>
    );
  }
}

export default App;
