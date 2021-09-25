import client from '../../client';
import { API, COMPANY } from '../../constants';

const makeData = data => {
  return {
    codigoEmpresa: COMPANY.CODIGO_EMPRESA,
    codigoUnidade: COMPANY.CODIGO_UNIDADE,
    Passaporte: '',
    Identidade: '',
    Sexo: '',
    Logradouro: '',
    Bairro: '',
    Complemento: '',
    Cep: '',
    Estado: '',
    Cidade: '',
    Numero: 0,
    ...data,
    CodigoMunicipio: 0,
    CPF: data.CPF.replace('-', '').replaceAll('.', ''),
    Telefone: data.Telefone.replace('-', '')
      .replace(' ', '')
      .replace('(', '')
      .replace(')', ''),
    Celular: data.Celular.replace('-', '')
      .replace(' ', '')
      .replace('(', '')
      .replace(')', ''),
  };
};

export const createCustomer = async data => {
  const customer = makeData(data);

  return client
    .post(`${API.CLIENT}`, customer)
    .then(({ data: { Data } }) => {
      if (Data.CodigoCliente) {
        localStorage.setItem('customer', Data.CodigoCliente);
        localStorage.setItem('name', Data.NomeFantasia);

        window.location.href = '/inicio';
      } else {
        throw new Error();
      }
    })
    .catch(e => {
      console.error(e);
      throw new Error();
    });
};
