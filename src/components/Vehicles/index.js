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
import './style.scss';

function Vehicles() {
  return (
    <div className="vehicle">
      {[0, 1, 2].map(e => (
        <Card className="vehicle-card" key={e}>
          <CardImg
            top
            src="https://gofrotas.com.br/wp-content/uploads/2019/01/site-go-grupoC-370x370-1.png"
            alt="Card image cap"
          />
          <CardBody className="text-center">
            <CardTitle tag="h4">Grupo B - Veiculos 1.0</CardTitle>

            <CardSubtitle tag="h5" className="mb-2 text-muted">
              R$: 129,40 / Diária
            </CardSubtitle>

            <CardText>GOL / KA / UNO / ARGO</CardText>

            <Button size="lg">Alugar</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default Vehicles;
