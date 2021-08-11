import client from '../../client';
import { API } from '../../constants';

export const getReservations = () => {
  return client
    .get(`${API.RESERVATIONS}42`)
    .then(({ data: { Data } }) => {
      return Data;
    })
    .catch(e => {
      console.error(e);
    });
};
