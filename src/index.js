/*
 * questionnaire redux component
 *
 * -- sample app
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './configureStore';

const store = configureStore();
console.log(store.getState());

/* Sample App */ 

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('app-root')
);
