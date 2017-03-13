import React, { Component , PropTypes } from 'react'

import logo from './logo.svg'
import './App.css';

import Counter from './components/Counter'

class App extends Component {
  static propTypes = {
    appstore: PropTypes.object.isRequired   
  }

  render() {
    const { appstore } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter 
          value={appstore.getState()}
          onIncrement={() => appstore.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => appstore.dispatch({ type: 'DECREMENT' })} />
      </div>
    );
  }
}

export default App;
