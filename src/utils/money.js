const centsPosition = -2;
const currency = 'R$';

export function formatMoney(
  value,
  withCurrencyPrefix = true,
  withCents = true
) {
  const negativeValue = value.toString().indexOf('-') > -1;

  let fixedValue = value.toString();

  if (fixedValue.split('.')[1].length === 1) {
    fixedValue = fixedValue.concat('0');
  }

  fixedValue = fixedValue
    .replace('.', '')
    .replace('-', '')
    .padStart(3, '0');

  const valueWithDecimalSeparator = [
    fixedValue.slice(0, centsPosition),
    '.',
    fixedValue.slice(centsPosition),
  ].join('');

  let formattedValue = valueWithDecimalSeparator
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+,)/g, '$1.');

  if (negativeValue) {
    formattedValue = `-${formattedValue}`;
  }

  if (withCurrencyPrefix) {
    formattedValue = `${currency} ${formattedValue}`;
  }

  if (!withCents) {
    formattedValue = formattedValue.replace(',00', '');
  }

  return formattedValue;
}

export function formatMoneyToCents(value) {
  return +value.replace(/[^0-9]/g, '');
}
