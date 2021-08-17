import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardFooter,
} from 'reactstrap';
import { formatMoney } from '../../utils/money';

import './style.scss';

const Protections = ({ protections, handleReserve }) => {
  const getPrice = () => {
    if (protections.ValorProtecao) {
      return formatMoney(protections.ValorProtecao);
    }

    return 'R$ 0,00';
  };

  return (
    <div>
      {protections.map(protection => (
        <div key={protection.CodigoProtecao} className="mb-4">
          <Card>
            <CardBody>
              <div className="title">
                <CardTitle tag="h5">{protection.NomeProtecao}</CardTitle>
                <span>{getPrice()}</span>
              </div>

              <CardText>{protection.Condicoes}</CardText>
            </CardBody>

            <CardFooter className="bg-white">
              <Button
                className="float-right"
                onClick={() => handleReserve(protection.CodigoProtecao)}
              >
                Selecionar
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Protections;
