import React from 'react';
import { Button, Col, Modal, ModalBody, Row } from 'reactstrap';
import './style.scss';

const ModalInfo = props => {
  const { className, show, toggle, description } = props;

  const getText = () => {
    if (description) {
      return <p>{description}</p>;
    }

    return (
      <p>
        Não foi possível encontrar esse cpf em nosso sistema. <br />
        Por favor verifique e tente novamente.
      </p>
    );
  };

  return (
    <div className="modal">
      <Modal isOpen={show} className={className} centered>
        <ModalBody>
          <Row className="mb-3">
            <Col className="text-center">
              <h1 className="h3 mb-4 fw-normal">Atenção!</h1>

              {getText()}
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <Button color="primary" onClick={toggle} size="lg">
                OK
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalInfo;
