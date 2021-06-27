import React from 'react';

import './style.scss';

function Steps({ steps, active }) {
  const getAmounts = () => {
    return new Array(steps).fill(0);
  };
  const amount = getAmounts();

  return (
    <div className="container-steps">
      {amount.map((item, index) => (
        <div
          className={
            active === index + 1 ? 'wrapper-steps active' : 'wrapper-steps'
          }
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

export default Steps;
