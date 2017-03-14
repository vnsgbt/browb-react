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
