/*
 * questionnaire redux component
 *
 * -- sample app
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import "../styles/styles.less";

import App from './containers/App';
import questions from './data/';
import { axiosFetch } from './actions/';
import { FETCH_QUESTIONS } from './actions/types';
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

store.dispatch(axiosFetch(FETCH_QUESTIONS, 'https://api.myjson.com/bins/t1w4f'));


/* Sample App */ 

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('app-root')
);
