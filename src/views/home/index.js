import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { Card, CardFooter, CardTitle, Col, Row, Button } from 'reactstrap';
import Layout from '../container/layout';
import {
  ModalInfo,
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
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleVehicles = async data => {
    setLoading(true);

    setDate(data);

    try {
      const vehiclesData = await getVehiclesGroup(data);

      setVehicles(vehiclesData);

      setStep(2);
    } catch (error) {
      console.error(error);

      setModal(true);
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

  const handleBackSteps = index => {
    if (step > 1) {
      setStep(index);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
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

              <Steps steps={4} active={step} onClick={handleBackSteps} />
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

            {(step === 2 || step === 3) && !loading && (
              <CardFooter className="bg-white">
                <div className="row justify-content-center">
                  <Button size="md" onClick={handleBack}>
                    Voltar
                  </Button>
                </div>
              </CardFooter>
            )}
          </Card>
        </Col>
      </Row>

      <ModalInfo
        show={modal}
        toggle={toggle}
        description="Não encontramos nehum grupo de veículos disponível na data solicitada. Por favor tente novamente!"
      />
    </Layout>
  );
}

export default Home;
