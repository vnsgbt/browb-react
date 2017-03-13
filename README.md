
## meet redux

yarn add redux react-redux

## producing state change

```js
// ./reducers/index.js
export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
```
## create and setup store with reducers

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'

import App from './App';
import './index.css';
import counter from './reducers'


// create redux store with reducer 
const store = createStore(counter)

// capture render
const render = () => ReactDOM.render(
  <App appstore={store}/>,
  document.getElementById('root')
);

render()
// subscribe render to store's state
store.subscribe(render)
```

## Interact with redux store

```js
// App.js
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
        
        {/* Query state and dispatching actions */}
        <Counter 
          value={appstore.getState()}
          onIncrement={() => appstore.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => appstore.dispatch({ type: 'DECREMENT' })} />
      </div>
    );
  }
}
```