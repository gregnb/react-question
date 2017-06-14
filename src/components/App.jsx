import React from 'react';
import { connect } from 'react-redux';

import * as AllActions from '../actions';

class App extends React.Component {

  handleClick = () => {
    const num = Math.floor(Math.random() * 20);
    this.props.addQuestion('a random question '+num);
  }
 
  render() {    
    return (
      <div id="wrapper">
        <h1>Soon..</h1>
        <button onClick={this.handleClick}>Add question</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({  
  data: state.questionReducer.data
});

export default connect(mapStateToProps, { ...AllActions })(App);



