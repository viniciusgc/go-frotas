import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { Card, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';
import './style.scss';
import ReactLoading from 'react-loading';
import Input from '../../components/Form/input';
import { InputMask, ModalInfo } from '../../components';
import { createCustomer } from './actions';

function Register() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const checkErrors = data => {
    if (!data.NomeCliente) {
      formRef.current.setFieldError('NomeCliente', 'data obrigatória');
    }

    if (!data.Email) {
      formRef.current.setFieldError('Email', 'data obrigatória');
    }

    if (!data.CPF) {
      formRef.current.setFieldError('CPF', 'data obrigatória');
    }

    if (!data.Celular) {
      formRef.current.setFieldError('Celular', 'data obrigatória');
    }

    return !data.NomeCliente || !data.Email || !data.CPF || !data.Celular;
  };

  const handleSubmit = async data => {
    const error = checkErrors(data);

    if (error) {
      return null;
    }

    try {
      setLoading(true);

      await createCustomer(data);
    } catch (e) {
      console.error(e);
      setModal(true);
    } finally {
      setLoading(false);
    }

    return data;
  };

  return (
    <div className="register">
      {loading && (
        <div className="loading">
          <ReactLoading type="spinningBubbles" color="#23195f" />
        </div>
      )}

      {!loading && (
        <Card className="card-register">
          <CardBody>
            <CardTitle tag="h2" className="text-center">
              Cadastro de usuário
            </CardTitle>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Row>
                <Col md="12">
                  <Input
                    name="NomeCliente"
                    label="Nome *"
                    type="text"
                    placeholder="Digite seu nome..."
                  />
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Input
                    name="Email"
                    label="E-mail *"
                    type="email"
                    placeholder="Digite seu e-mail..."
                  />
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <InputMask
                    label="CPF *"
                    name="CPF"
                    type="text"
                    mask="999.999.999-99"
                    placeholder="Digite seu cpf..."
                    error
                  />
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <InputMask
                    label="Celular*"
                    name="Celular"
                    type="text"
                    mask="(99) 99999-9999"
                    placeholder="Digite seu celular..."
                  />
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <InputMask
                    label="Telefone"
                    name="Telefone"
                    type="text"
                    mask="(99) 9999-9999"
                    placeholder="Digite seu telefone..."
                  />
                </Col>
              </Row>
              <Button
                color="primary"
                size="lg"
                className="w-100 btn btn-lg btn-primary my-3"
                type="submit"
              >
                Cadastrar
              </Button>
            </Form>
          </CardBody>
        </Card>
      )}

      <ModalInfo show={modal} toggle={toggle} />
    </div>
  );
}

export default Register;
