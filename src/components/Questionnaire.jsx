import React from 'react';
import PropTypes from 'prop-types';

const Questionnaire = ({ currentQuestion, question, handleAnswer }) => {

  return (
    <div className="questionnaire-card">
      <h1>{question.question}</h1>
        <ul>
        {question.options.map((option, index) => {
          return (
           <li key={index} onClick={handleAnswer.bind(null, currentQuestion, option)}>
            <span className="radio"></span>
            <span className="text">{option}</span>
           </li>
          )
        })}
        </ul>
    </div>
  );

};

Questionnaire.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  handleAnswer: PropTypes.func.isRequired
};

export default Questionnaire;