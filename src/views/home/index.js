import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card, CardTitle, Col, Row, Button } from 'reactstrap';
import Layout from '../container/layout';
import { ReservationForm, Steps, Vehicles } from '../../components';

import './style.scss';

function Home() {
  const [step, setStep] = useState(1);

  const handleVehicles = () => {
    setStep(2);
  };

  return (
    <Layout>
      <Row className="mb-5">
        <Col>
          <Card className="main-card" body>
            <div className="wrapper">
              <CardTitle tag="h2">
                <FontAwesomeIcon icon="calendar-check" />

                <span className="ml-2">Nova Reserva</span>
              </CardTitle>

              <Steps steps={3} active={step} />
            </div>

            <div className="hr" />

            <div className="body">
              {step === 1 && <ReservationForm />}

              {step === 2 && <Vehicles />}
            </div>

            {step !== 2 && (
              <Row className="mt-5">
                <Col>
                  <Button
                    color="primary"
                    size="lg"
                    className="float-right"
                    onClick={handleVehicles}
                  >
                    Próximo
                  </Button>
                </Col>
              </Row>
            )}
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default Home;
