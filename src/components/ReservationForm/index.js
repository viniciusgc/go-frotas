import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { Button, Col, Row } from 'reactstrap';
import Input from '../Form/input';
import Checkbox from '../Form/checkbox';
import DatePicker from '../Form/datepicker';
import TimerPicker from '../Form/timerpicker';

export default function ReservationForm() {
  const formRef = useRef(null);
  const [hasSameStore, setHasSameStore] = useState(true);

  return (
    <Form onSubmit={() => console.log('foi')} ref={formRef}>
      <Row>
        <Col md="6">
          <Input
            name="inicio"
            label="Onde você deseja retirar seu carro?"
            type="text"
            required
          />
        </Col>

        {!hasSameStore && (
          <Col md="6">
            <Input
              name="termino"
              label="Onde você deseja devolver seu carro?"
              type="text"
              required
            />
          </Col>
        )}
      </Row>

      <Row className="mb-4">
        <Col md="6">
          <Checkbox
            name="name"
            label="Devolução na mesma loja"
            checked={hasSameStore}
            onChange={e => setHasSameStore(e.target.checked)}
          />
        </Col>
      </Row>

      <Row>
        <Col md="4">
          <DatePicker
            name="name"
            label="Data e Hora de Retirada"
            placeholder="Escolha a data"
          />
        </Col>
        <Col md="2">
          <TimerPicker name="name" label="Data e Hora de Retirada" />
        </Col>

        <Col md="4">
          <DatePicker name="name" label="Data e Hora de Devolução" />
        </Col>

        <Col md="2">
          <TimerPicker name="name" label="Data e Hora de Retirada" />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Button color="primary" size="lg" className="float-right">
            Avançar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
