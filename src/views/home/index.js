import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { Card, CardTitle, Col, Row } from 'reactstrap';
import Layout from '../container/layout';
import { ReservationForm, Steps, Vehicles } from '../../components';

import './style.scss';
import { getVehiclesGroup } from './actions';

function Home() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [vehicles, setVehicles] = useState([]);

  const handleVehicles = async data => {
    setLoading(true);

    try {
      const vehiclesData = await getVehiclesGroup(data);

      setVehicles(vehiclesData);

      setStep(2);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
              {!loading && (
                <>
                  {step === 1 && (
                    <ReservationForm handleVehicles={handleVehicles} />
                  )}

                  {step === 2 && <Vehicles vehicles={vehicles} />}
                </>
              )}

              {loading && (
                <div className="loading">
                  <ReactLoading type="spinningBubbles" color="#23195f" />
                </div>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default Home;
