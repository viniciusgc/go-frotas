import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';

import { useField } from '@unform/core';

import 'react-datepicker/dist/react-datepicker.css';
import { FormGroup } from 'reactstrap';
import './style.scss';

export default function TimerPicker({ name, label, ...rest }) {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

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
      <ReactDatePicker
        className="form-control datepicker mt-2e"
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
