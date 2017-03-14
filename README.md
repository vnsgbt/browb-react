
## redux everywhere

Store provider

```js
// index.js
import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import './index.css';
import counter from './reducers'

const store = createStore(counter)

// Using Provider to make store available 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

## Presentational and container

```js
// App.js
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
```

## Container and state
```js
// ./container/Counter.js
import { connect } from 'react-redux'

import CounterComponent from '../components/CounterComponent'

// State can be specified
const mapStateToProps = (state, ownProps) => ({
    value: state.value
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onIncrement: ()=> {dispatch({type: 'INCREMENT'})},
    onDecrement: ()=> {dispatch({type: 'DECREMENT'})},
    onIncrementOdd: value => {
      value % 2 !== 0 && dispatch({type: 'INCREMENT'})
    },
    onIncrementAsync:()=> {
      setTimeout(()=>{dispatch({type: 'INCREMENT'})}, 1000) 
    }
})

const Counter = connect(mapStateToProps,mapDispatchToProps)(CounterComponent)

export default Counter
```

## Combine reducers for specific state
```js
// ./reducers/index.js
import { combineReducers } from 'redux'
import value from './value'

const countApp = combineReducers({
    value
})
export default countApp

// ./reducers/value.js
const value = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default value
```

## Component presents the view
```js
// ./components/CounterComponent.js
import React, { PropTypes } from 'react'

// Stateless component
const CounterComponent = ({ value, onIncrement, onDecrement, onIncrementOdd, onIncrementAsync }) => {
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}> + </button>
        {' '}
        <button onClick={onDecrement}> - </button>
        {' '}
        <button onClick={()=>onIncrementOdd(value)}> Increment if odd </button>
        {' '}
        <button onClick={()=>onIncrementAsync()}> Increment async </button>
      </p>
    )
}

// Still have propTypes
CounterComponent.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,  
    onIncrementOdd: PropTypes.func.isRequired,  
    onIncrementAsync: PropTypes.func.isRequired  
}

export default CounterComponent
```

## 
