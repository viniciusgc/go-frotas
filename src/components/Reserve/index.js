import React from 'react';
import { Button } from 'reactstrap';

import './style.scss';

function Reserve() {
  const goToReserves = () => {
    window.location.href = '/reservas';
  };

  const goToHome = () => {
    window.location.href = '/inicio';
  };

  return (
    <div className="reserve">
      <h1>Reserva realizada com sucesso!</h1>

      <p className="mt-3">
        Sua resrva vou realizada com sucesso. Confira suas reservas clicando no
        botão abaixo.
      </p>

      <Button size="lg" className="mt-5" onClick={goToReserves} color="primary">
        Ver minhas reservas
      </Button>

      <Button size="lg" className="mt-3" onClick={goToHome}>
        Fazer nova reserva
      </Button>
    </div>
  );
}

export default Reserve;
