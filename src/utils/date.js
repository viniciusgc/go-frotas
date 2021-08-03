import moment from 'moment';

export function formatDate(date) {
  return moment(date).format('DD/MM/YYYY');
}

export function formatHour(hour) {
  return moment(hour).format('H:mm');
}

export function diffDate(firstDate, secondDate) {
  const a = moment(firstDate);
  const b = moment(secondDate);

  return b.diff(a, 'days');
}
