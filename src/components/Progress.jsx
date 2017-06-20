import React from 'react';

const Progress = ({ index, total }) => {

  const position = ((index / total) * 100) + '%';
  console.log(position);

  return (
    <div className="questionnaire-progress">
      <h2>Question {index+1} out of {total}</h2>
      <div className="questionnaire-bar">
        <span style={{ width: position}}></span>
      </div>
    </div>
  );

};

export default Progress;