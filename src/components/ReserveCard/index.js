import React from 'react';
import { Card, CardBody, CardImg, Col, Row } from 'reactstrap';
import { formatMoney } from '../../utils/money';
import reserva from '../../assets/reserva.png';
import './style.scss';

function ReserveCard({ reservation }) {
  const getImage = () => {
    if (reservation.GrupoVeiculo.URLImagem) {
      return reservation.GrupoVeiculo.URLImagem;
    }

    return reserva;
  };

  return (
    <Card className="mb-3">
      <CardBody>
        <Row className="align-items-center">
          <Col md={2}>
            <CardImg src={getImage()} alt="veiculo" className="image" />
          </Col>
          <Col>
            <p>
              <span>Categoria:</span> {reservation.GrupoVeiculo.Descricao}
            </p>
            <p>
              <span>Veículos:</span> {reservation.GrupoVeiculo.SubDescricao}
            </p>
            <p>
              <span>Data Retirada:</span>{' '}
              {`${reservation.DataInicio} às ${reservation.HoraInicio}`}
            </p>
            <p>
              <span>Data Devolução:</span>
              {`${reservation.DataTermino} às ${reservation.HoraTermino}`}
            </p>
          </Col>
          <Col>
            <p>
              <span>Retirada</span>
            </p>
            <p>Av Maria Antonia Camargo de Oliveira, 390, Araraquara - SP</p>
            <p>
              <span>Devolução</span>
            </p>
            <p>Av Maria Antonia Camargo de Oliveira, 390, Araraquara - SP</p>
          </Col>
          <Col md={2}>
            <div className="price">
              {`${formatMoney(
                reservation.Tarifa.ValorPeriodoVeiculo
              )} / Diária`}
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default ReserveCard;
