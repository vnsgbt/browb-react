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
