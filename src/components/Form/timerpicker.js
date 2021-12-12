import React, { useRef, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import { useField } from '@unform/core';

import 'react-datepicker/dist/react-datepicker.css';
import { FormGroup, Label } from 'reactstrap';
import './style.scss';
import { setHours, setMinutes } from 'date-fns';

export default function TimerPicker({ name, label, ...rest }) {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [date, setDate] = useState(defaultValue || null);

  const filterPassedTime = time => {
    // const currentDate = new Date();
    const selectedDate = new Date(time);

    return (
      selectedDate < setHours(setMinutes(new Date(), 0), 18) &&
      selectedDate > setHours(setMinutes(new Date(), 45), 8)
    );
  };

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

      <DatePicker
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
        timeIntervals={30}
        timeCaption="Horário"
        dateFormat="H:mm"
        timeFormat="H:mm"
        filterTime={filterPassedTime}
        {...rest}
      />
    </FormGroup>
  );
}
