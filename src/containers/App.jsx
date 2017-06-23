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

    if (currentQuestion == totalQuestions) {
      return (
        <section id="questionnaire-wrapper">
          Survey finished!
        </section>
      );
    }

    return (
      <section id="questionnaire-wrapper">
        <Progress index={currentQuestion} total={totalQuestions} />
        <Questionnaire
          delay={225}
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

export { App };
export default connect(mapStateToProps, { ...AllActions })(App);



