import client from '../../client';
import { API } from '../../constants';

export const getCustomer = ({ cpf }) => {
  const cpfFormatted = cpf.replace('-', '').replaceAll('.', '');

  return client
    .get(`${API.CUSTOMER}${cpfFormatted}`)
    .then(({ data: { Data } }) => {
      localStorage.setItem('customer', Data.CodigoCliente);
      localStorage.setItem('name', Data.NomeFantasia);

      window.location.href = '/inicio';
    })
    .catch(e => {
      console.error(e);
    });
};
