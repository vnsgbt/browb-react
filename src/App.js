import React from 'react'

import logo from './logo.svg'
import './App.css';

// Separate stateless components from containers
import Counter from './containers/Counter'

// App is just a presenter
const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <Counter />
  </div>
)

export default App
