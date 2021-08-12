import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';

import { useField } from '@unform/core';

import 'react-datepicker/dist/react-datepicker.css';
import { FormGroup, Label } from 'reactstrap';
import './style.scss';

export default function TimerPicker({ name, label, ...rest }) {
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

  return (
    <FormGroup inline>
      <Label for={name}>{label}</Label>

      <ReactDatePicker
        className={
          error
            ? 'form-control datepicker is-invalid'
            : 'form-control datepicker'
        }
        ref={datepickerRef}
        selected={date}
        onChange={setDate}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Horário"
        dateFormat="H:mm"
        timeFormat="H:mm"
        {...rest}
      />
    </FormGroup>
  );
}
