import * as types from './types';
	
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


