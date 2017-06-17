import React from 'react';

const Progress = ({ index, total }) => {

  return (
    <div className="progress-bar">
      {index} {total}
    </div>
  );

};

export default Progress;