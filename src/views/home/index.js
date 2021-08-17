import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { Card, CardTitle, Col, Row } from 'reactstrap';
import Layout from '../container/layout';
import {
  Protections,
  ReservationForm,
  Reserve,
  Steps,
  Vehicles,
} from '../../components';

import './style.scss';
import { getVehiclesGroup, reservation } from './actions';

function Home() {
  const [loading, setLoading] = useState(false);
  const [group, setGroup] = useState({});
  const [date, setDate] = useState({});
  const [step, setStep] = useState(1);
  const [vehicles, setVehicles] = useState([]);
  const [protections, setProtections] = useState([]);

  const handleVehicles = async data => {
    setLoading(true);

    setDate(data);

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

  const handleReserve = async protection => {
    setLoading(true);

    try {
      await reservation(group, protection, date);

      setStep(4);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleProtections = data => {
    setProtections(data.Protecoes);
    setGroup(data);
    setStep(3);
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

              <Steps steps={4} active={step} />
            </div>

            <div className="hr" />

            <div className="body">
              {!loading && (
                <>
                  {step === 1 && (
                    <ReservationForm handleVehicles={handleVehicles} />
                  )}

                  {step === 2 && (
                    <Vehicles
                      vehicles={vehicles}
                      handleReserve={handleProtections}
                    />
                  )}

                  {step === 3 && (
                    <Protections
                      protections={protections}
                      handleReserve={handleReserve}
                    />
                  )}

                  {step === 4 && <Reserve />}
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
