import React from 'react';
import { Button } from 'reactstrap';

import './style.scss';

function Steps({ steps, active, onClick }) {
  const getAmounts = () => {
    return new Array(steps).fill(0);
  };

  const amount = getAmounts();

  return (
    <div className="container-steps">
      {amount.map((item, index) => (
        <Button
          key={item}
          className={
            active === index + 1 ? 'wrapper-steps active' : 'wrapper-steps'
          }
          color="info"
          disabled={active < index + 1 || active === 4}
          onClick={() => onClick(index + 1)}
        >
          <div>{index + 1}</div>
        </Button>
      ))}
    </div>
  );
}

export default Steps;
