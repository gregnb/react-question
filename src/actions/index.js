import * as types from './types';
import axios from 'axios';

export const addQuestion = (question, data) => ({
  type: types.ADD_QUESTION,
  question,
  data
});

export const answerQuestion = (data) => ({
  type: types.ANSWER_QUESTION,
  data
});

export const deleteQuestion = (id) => ({
  type: types.DELETE_QUESTION,
  id
});

export const getQuestion = (id) => ({
  type: types.GET_QUESTION,
  id
});

export const asyncState = (type, state, data) => ({
  type,
  state,
  data
});

/* async requests */

export function axiosFetch(type, url) {
  return function(dispatch) {
    
    dispatch(asyncState(type, types.ASYNC_REQUEST, null));

    return axios({
      url: url,
      timeout: 5000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      dispatch(asyncState(type, types.ASYNC_SUCCESS, response.data));
    }).catch((error) => {
      dispatch(asyncState(type, types.ASYNC_ERROR, error.response));
    });

  }
}
