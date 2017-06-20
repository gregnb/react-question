import React from 'react';
import { connect } from 'react-redux';

import Questionnaire from '../components/Questionnaire';
import Progress from '../components/Progress';

import * as AllActions from '../actions';

class App extends React.Component {
 
  handleAnswer = (question, answer) => {
    this.props.answerQuestion({ question, answer });
  }

  render() {

    const {
      questions,
      currentQuestion,
      totalQuestions
    } = this.props.data;

    if(currentQuestion == totalQuestions) {
      return (
        <div id="questionnaire-wrapper">
          Survey finished!
        </div>
      );
    }

    return (
      <section id="questionnaire-wrapper">
        <Progress index={currentQuestion} total={totalQuestions} />
        <Questionnaire 
          currentQuestion={currentQuestion}
          question={questions[currentQuestion]}
          handleAnswer={this.handleAnswer}
        />
      </section>
    );

  }
}

const mapStateToProps = (state) => ({  
  data: state.questionReducer
});

export default connect(mapStateToProps, { ...AllActions })(App);



