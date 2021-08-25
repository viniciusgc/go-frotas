import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { formatMoney } from '../../utils/money';
import grupo from '../../assets/grupo.png';
import './style.scss';

function Vehicles({ vehicles, handleReserve }) {
  const getImage = () => {
    if (vehicles.URLImagem) {
      return vehicles.URLImagem;
    }

    return grupo;
  };

  return (
    <div className="vehicle">
      {vehicles.map(vehicle => (
        <Card className="vehicle-card" key={vehicle.LetraDescricao}>
          <CardImg top src={getImage()} alt={vehicle.LetraDescricao} />

          <CardBody className="text-center">
            <CardTitle tag="h4">{`Grupo ${vehicle.LetraDescricao}`}</CardTitle>

            <CardSubtitle tag="h5" className="mb-2 text-muted">
              {`${formatMoney(
                vehicle.Tarifas[0].ValorPeriodoVeiculo
              )} / Diária`}
            </CardSubtitle>

            <CardText>{vehicle.SubDescricao}</CardText>

            <Button
              size="lg"
              color="primary"
              onClick={() => handleReserve(vehicle)}
            >
              Alugar
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default Vehicles;
