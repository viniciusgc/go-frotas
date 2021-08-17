import client from '../../client';
import { API, COMPANY } from '../../constants';
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

const makeReserveData = (group, protection, date) => {
  return {
    CodigoEmpresa: COMPANY.CODIGO_EMPRESA,
    CodigoUnidade: COMPANY.CODIGO_UNIDADE,
    CodigoCliente: localStorage.getItem('customer'),
    CodigoGrupo: group.CodigoGrupo,
    CodigoProtecao: protection,
    CodigoTarifa: group.Tarifas[0].CodigoTarifaVeiculo,
    DataInicio: formatDate(date.dataInicio),
    DataTermino: formatDate(date.dataTermino),
    HoraInicio: formatHour(date.horaInicio),
    HoraTermino: formatHour(date.horaTermino),
    CodigoMunicipioRetirada: COMPANY.CODIGO_MUNICPIO_RETIRADA,
    CodigoMunicipioDevolucao: COMPANY.CODIGO_MUNICPIO_RETIRADA,
    Origem: 'W',
    ItensProtecao: [0],
    Adicionais: [0],
    ValorLocacaoJovem: '',
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

export const reservation = (group, protection, date) => {
  const data = makeReserveData(group, protection, date);

  return client
    .post(`${API.RESERVES}`, data)
    .then(({ data: { Data } }) => {
      return Data;
    })
    .catch(e => {
      console.error(e);
    });
};
