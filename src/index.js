/*
 * questionnaire redux component
 *
 * -- sample app
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import "./styles/style.less";

import App from './containers/App';
import questions from './data/';
import configureStore from './configureStore';

const initialState = { 
  questionReducer: { 
    questions,
    currentQuestion: 0,
    totalQuestions: questions.length
  }
};

const store = configureStore(initialState);
console.log(store.getState());

/* Sample App */ 

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('app-root')
);
