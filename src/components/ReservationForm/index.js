import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { Col, Row, Button } from 'reactstrap';
import Input from '../Form/input';
import DatePickerInput from '../Form/datepicker';
import TimerPicker from '../Form/timerpicker';

export default function ReservationForm({ handleVehicles }) {
  const formRef = useRef(null);
  // const [hasSameStore, setHasSameStore] = useState(true);

  const checkErrors = data => {
    if (!data.dataInicio) {
      formRef.current.setFieldError('dataInicio', 'data obrigatória');
    }

    if (!data.dataTermino) {
      formRef.current.setFieldError('dataTermino', 'data obrigatória');
    }

    if (!data.horaInicio) {
      formRef.current.setFieldError('horaInicio', 'data obrigatória');
    }

    if (!data.horaTermino) {
      formRef.current.setFieldError('horaTermino', 'data obrigatória');
    }

    return (
      !data.dataInicio ||
      !data.dataTermino ||
      !data.horaInicio ||
      !data.horaTermino
    );
  };
  const handleSubmit = async data => {
    const error = checkErrors(data);

    if (error) {
      return null;
    }

    return handleVehicles(data);
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Row>
        <Col md="6">
          <Input
            name="local"
            label="Onde você deseja retirar seu carro?"
            type="text"
            readOnly
            value="Av Maria Antonia Camargo de Oliveira 390, Araraquara - SP"
          />
        </Col>

        {/* {!hasSameStore && (
          <Col md="6">
            <Input
              name="termino"
              label="Onde você deseja devolver seu carro?"
              type="text"
              required
            />
          </Col>
        )} */}
      </Row>

      {/* <Row className="mb-4">
        <Col md="6">
          <Checkbox
            name="name"
            label="Devolução na mesma loja"
            checked={hasSameStore}
            onChange={e => setHasSameStore(e.target.checked)}
          />
        </Col>
      </Row> */}

      <Row>
        <Col md="4">
          <DatePickerInput
            name="dataInicio"
            label="Data de Retirada"
            placeholder="Escolha a data"
          />
        </Col>
        <Col md="2">
          <TimerPicker name="horaInicio" label="Hora de Retirada" />
        </Col>

        <Col md="4">
          <DatePickerInput name="dataTermino" label="Data de Devolução" />
        </Col>

        <Col md="2">
          <TimerPicker name="horaTermino" label="Hora de Devolução" />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Button
            color="primary"
            size="lg"
            className="float-right"
            type="submit"
          >
            Próximo
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
