import client from '../../client';
import { API } from '../../constants';

export const getCustomer = async ({ cpf }) => {
  const cpfFormatted = cpf.replace('-', '').replaceAll('.', '');

  return client
    .get(`${API.CUSTOMER}${cpfFormatted}`)
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
