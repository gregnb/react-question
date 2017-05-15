import { combineReducers } from 'redux';
import * as types from '../actions/types';

export const questionReducer = (state = {}, action) => {  
  switch (action.type) {
    case types.ADD_QUESTION:
      return { ...state, data: action.data };
    default:
      return state;
  }
};


const reducers = combineReducers({  
  questionReducer
});

export default reducers;

