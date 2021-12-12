import React, { useRef, useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import { useField } from '@unform/core';

import 'react-datepicker/dist/react-datepicker.css';
import { FormGroup, Label } from 'reactstrap';
import './style.scss';

registerLocale('ptBR', ptBR);
export default function DatePickerInput({ name, label, ...rest }) {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: ref => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  const isWeekday = value => {
    const day = value.getDay();
    return day !== 0;
  };

  return (
    <FormGroup inline>
      <Label for={name}>{label}</Label>

      <DatePicker
        className={
          error
            ? 'form-control datepicker is-invalid'
            : 'form-control datepicker'
        }
        ref={datepickerRef}
        selected={date}
        minDate={new Date()}
        onChange={setDate}
        locale="ptBR"
        dateFormat="dd/MM/yyyy"
        filterDate={isWeekday}
        {...rest}
        id="validationServer03Feedback"
        autoComplete="off"
      />
    </FormGroup>
  );
}
