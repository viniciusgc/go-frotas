import React, { useRef, useState } from 'react';
import './style.scss';
import { Form } from '@unform/web';
import { Button } from 'reactstrap';
import ReactLoading from 'react-loading';
import Logo from '../../assets/logos-big.png';
import { InputMask, ModalInfo } from '../../components';
import { getCustomer } from './actions';

function Login() {
  const formRef = useRef(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const handleSubmit = async data => {
    if (!data.cpf) {
      setError(true);

      return;
    }

    try {
      setLoading(true);

      await getCustomer(data);
    } catch (e) {
      console.error(e);
      setModal(true);
    } finally {
      setLoading(false);
    }
  };

  const toggle = () => setModal(!modal);

  return (
    <div className="login">
      {loading && (
        <div className="loading">
          <ReactLoading type="spinningBubbles" color="#23195f" />
        </div>
      )}

      {!loading && (
        <div className="login-card">
          <img
            className="mb-4"
            src={Logo}
            width="120"
            height="120"
            alt="logo"
          />

          <h1 className="h3 mb-4 fw-normal">Por favor, faça o login</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <InputMask
              name="cpf"
              type="text"
              mask="999.999.999-99"
              placeholder="Digite seu cpf"
              error={error}
            />

            <Button
              color="primary"
              size="lg"
              className="w-100 btn btn-lg btn-primary my-5"
              type="submit"
            >
              Entrar
            </Button>
          </Form>

          <p className="mt-5 mb-3 text-muted">
            Go Frotas © 2021. Todos os direitos reservados.
          </p>
        </div>
      )}

      <ModalInfo show={modal} toggle={toggle} />
    </div>
  );
}

export default Login;