import React from 'react';

const Questionnaire = ({ currentQuestion, question, handleAnswer }) => {

  return (
    <div className="questionnaire-card">
      <h1>{question.question}</h1>
        <ul>
        {question.options.map((option, index) => {
          return (
           <li key={index} onClick={handleAnswer.bind(null, currentQuestion, option)}>
            {option}
           </li>
          )
        })}
        </ul>
    </div>
  );

};

export default Questionnaire;