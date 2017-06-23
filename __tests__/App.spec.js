import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import ConnectedApp, { App } from '../src/containers/App';
import mockData from './data.js';

/*  App.jsx tests
    -------------------------------------------------------------------------------------------------- */

describe("src/containers/App.jsx - Without Redux", () => {
  let wrapper;

  beforeEach(() => {
  
    const props = {
      questions: mockData,
      currentQuestion: 0,
      totalQuestions: mockData.length
    };

    wrapper = mount(<App data={props} />);
  
  });
  
  it("+ src/containers/App.jsx - render component", () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+ src/containers/App.jsx - h1', () => {
    expect(wrapper.contains(<h1>What is your name?</h1>)).toBe(true);
  });

});

describe("src/containers/App.jsx - With Redux", () => {

  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
  
    const initialState = { 
      questionReducer: {
        questions: mockData,
        currentQuestion: 0,
        totalQuestions: mockData.length
      } 
    };
  
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><ConnectedApp /></Provider>);
  
  });

  it("+ src/containers/App.jsx - render component", () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+ src/containers/App.jsx - h1', () => {
    expect(wrapper.contains(<h1>What is your name?</h1>)).toBe(true);
  });


});
