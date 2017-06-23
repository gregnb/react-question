import { combineReducers } from 'redux';
import * as types from '../actions/types';

export const questionReducer = (state = {}, action) => {  
  switch (action.type) {
    case types.ADD_QUESTION: {
      return { 
          ...state, 
          questions: { ...state.questions, ...{ [action.question] : action.data }}, 
          totalQuestions: state.totalQuestions + 1
      };
    }
    case types.GET_QUESTION: {
      return { ...state, currentQuestion: action.id };
    }
    case types.DELETE_QUESTION: { 
      const otherQuestions = state.questions.filter((value, index) => index !== action.id); 
      return { ...state, questions: otherQuestions, totalQuestions: state.totalQuestions - 1 };
    }
    case types.ANSWER_QUESTION: {
      const questionData = { ...state.questions[action.data.question], selected : action.data.answer };
      const updatedQuestions = { ...state.questions, [action.data.question]: questionData };  

      return { ...state, questions: updatedQuestions, currentQuestion: state.currentQuestion + 1 };
    }
    case types.FETCH_QUESTIONS: {
      if (action.state === types.ASYNC_REQUEST) {
        return { 
          ...state,
          isLoading: true
        };
      } else if (action.state === types.ASYNC_SUCCESS) {
        return { 
          ...state,
          isLoading: false,
          questions: action.data, 
          currentQuestion: 0, 
          totalQuestions: action.data.length 
        };
      } else if (action.state === types.ASYNC_ERROR) {
        return { 
          ...state, 
          isLoading: false,
          loadingError: action.data
        };
      }
      break;
    }
    default: {
      return state;
    }
  }
};

const reducers = combineReducers({  
  questionReducer
});

export default reducers;

