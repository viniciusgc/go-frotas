import client from '../../client';
import { API } from '../../constants';
import { diffDate, formatDate, formatHour } from '../../utils/date';

const makeData = data => {
  return {
    codigoEmpresa: 1,
    codigoUnidade: 1,
    dataInicio: formatDate(data.dataInicio),
    dataTermino: formatDate(data.dataTermino),
    horaInicio: formatHour(data.horaInicio),
    horaTermino: formatHour(data.horaTermino),
    periodo: diffDate(data.dataInicio, data.dataTermino),
  };
};

export const getVehiclesGroup = data => {
  const params = makeData(data);

  return client
    .get(`${API.VEHICLES}`, {
      params: {
        ...params,
      },
    })
    .then(({ data: { Data } }) => {
      return Data;
    })
    .catch(e => {
      console.error(e);
    });
};
