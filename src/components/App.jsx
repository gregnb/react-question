import React from 'react';
import { connect } from 'react-redux';

import * as AllActions from '../actions';

class App extends React.Component {
 
  handleAnswer = (question, answer) => {

    this.props.answerQuestion({ question, answer });

  }

  /*handleClick = () => {
    
    const num = Math.floor(Math.random() * 20);

    this.props.addQuestion({
      question: `This should be new? ${num}`, 
      options: [ "Greg", "Joe", "Tom"],
      answer: "Greg"
    });

  }
  */

  handleDelete = (id) => {

    this.props.deleteQuestion(id);

  }

  render() {

    console.log("render in app called");
    console.log(this.props);

    const question = this.props.data.questions[this.props.data.currentQuestion];
    if(this.props.data.currentQuestion == this.props.data.totalQuestions) {
      return (
        <div id="question-wrapper">
          Survey finished!
        </div>
      );
    }

    return (
      <div id="question-card">
        <h1>{question.question}</h1>
        <ul>
        {question.options.map((option, index) => {
          return (
           <li key={index} onClick={this.handleAnswer.bind(null, this.props.data.currentQuestion, option)}>{option}</li>
          )
        })}
        </ul>
        <button onClick={this.handleDelete.bind(null, 1)}>Delete button</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({  
  data: state.questionReducer
});

export default connect((mapStateToProps), { ...AllActions })(App);



