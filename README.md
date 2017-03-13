
## Add component

Create a new component at:

- `components/Counter.js`

```js
// components/Counter.js
import React, { Component } from 'react'

class Counter extends Component {

  render() {
    return (
      <p>
        Clicked: times
        {' '}
        <button> + </button>
        {' '}
        <button> - </button>
        {' '}
        <button> Increment if odd </button>
        {' '}
        <button> Increment async </button>
      </p>
    )
  }
}

export default Counter
```

### Render component:

```js
// App.js

// import Counter
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        {/*Render Counter*/}
        <Counter />
        
      </div>
    );
  }
}
```
