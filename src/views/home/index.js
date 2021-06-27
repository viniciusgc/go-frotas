import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardTitle, Col, Row } from 'reactstrap';
import Layout from '../container/layout';
import { ReservationForm, Steps } from '../../components';

import './style.scss';

function Home() {
  return (
    <Layout>
      <Row>
        <Col>
          <Card className="main-card" body>
            <div className="wrapper">
              <CardTitle tag="h2">
                <FontAwesomeIcon icon="calendar-check" />

                <span className="ml-2">Nova Reserva</span>
              </CardTitle>

              <Steps steps={3} active={1} />
            </div>

            <div className="hr" />

            <div className="body">
              <ReservationForm />
            </div>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default Home;
