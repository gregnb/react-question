import React from 'react';

const Progress = (props) => {

  const {
    index,
    total,
  } = props;

  return (
    <div className="progress-bar">
      {index} {total}
    </div>
  );

};

export default Progress;