import client from '../../client';
import { API } from '../../constants';

export const getReservations = () => {
  const customer = localStorage.getItem('customer');

  return client
    .get(`${API.RESERVATIONS}${customer}`)
    .then(({ data: { Data } }) => {
      return Data;
    })
    .catch(e => {
      console.error(e);
    });
};
