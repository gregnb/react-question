import { combineReducers } from 'redux';
import * as types from '../actions/types';

export const questionReducer = (state = {}, action) => {  
  switch (action.type) {
    case types.ADD_QUESTION:
      return { 
          ...state, 
          questions: { ...state.questions, ...{ [action.question] : action.data }}, 
          totalQuestions: state.totalQuestions + 1
      };

    case types.GET_QUESTION:
      return { ...state, currentQuestion: action.id };
    
    case types.DELETE_QUESTION:
      
      const questionKeys = Object.keys(state.questions);
      const questionID = questionKeys[action.id];    

      const { [questionID]:deletedKey, ...otherQuestions } = state.questions;
      return { ...state, questions: otherQuestions, totalQuestions: state.totalQuestions - 1 };
    
    case types.ANSWER_QUESTION:

      /* poor design. if we normalized data more would be better? */
      
      let questions = { ...state.questions };
      let questionData = { ...state.questions[action.data.question] };
      questionData.selected = action.data.answer;

      questions[action.data.question] = questionData;

      return { ...state, questions, currentQuestion: state.currentQuestion + 1 };

    default:
      return state;
      
  }
};


const reducers = combineReducers({  
  questionReducer
});

export default reducers;

