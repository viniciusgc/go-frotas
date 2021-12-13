import React, { useRef, useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import { useField } from '@unform/core';

import 'react-datepicker/dist/react-datepicker.css';
import { FormGroup, Label } from 'reactstrap';
import './style.scss';
import { setHours, setMinutes } from 'date-fns';

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

  const filterPassedTime = time => {
    const selectedDate = new Date(time);

    return (
      selectedDate.getDay() !== 6 ||
      (selectedDate.getDay() === 6 &&
        selectedDate.toLocaleTimeString() < '12:30:00')
    );
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
        dateFormat="dd/MM/yyyy, HH:mm"
        filterDate={isWeekday}
        {...rest}
        id="validationServer03Feedback"
        autoComplete="off"
        showTimeSelect
        filterTime={filterPassedTime}
        excludeTimes={[
          setHours(setMinutes(new Date(), 30), 18),
          setHours(setMinutes(new Date(), 0), 19),
          setHours(setMinutes(new Date(), 30), 19),
          setHours(setMinutes(new Date(), 0), 20),
          setHours(setMinutes(new Date(), 30), 20),
          setHours(setMinutes(new Date(), 0), 21),
          setHours(setMinutes(new Date(), 30), 21),
          setHours(setMinutes(new Date(), 0), 22),
          setHours(setMinutes(new Date(), 30), 22),
          setHours(setMinutes(new Date(), 0), 23),
          setHours(setMinutes(new Date(), 30), 23),
          setHours(setMinutes(new Date(), 0), 23),
          setHours(setMinutes(new Date(), 30), 23),
          setHours(setMinutes(new Date(), 0), 23),
          setHours(setMinutes(new Date(), 30), 23),
          setHours(setMinutes(new Date(), 0), 0),
          setHours(setMinutes(new Date(), 30), 0),
          setHours(setMinutes(new Date(), 0), 1),
          setHours(setMinutes(new Date(), 30), 1),
          setHours(setMinutes(new Date(), 0), 2),
          setHours(setMinutes(new Date(), 30), 2),
          setHours(setMinutes(new Date(), 0), 3),
          setHours(setMinutes(new Date(), 30), 3),
          setHours(setMinutes(new Date(), 0), 4),
          setHours(setMinutes(new Date(), 30), 4),
          setHours(setMinutes(new Date(), 0), 5),
          setHours(setMinutes(new Date(), 30), 5),
          setHours(setMinutes(new Date(), 0), 6),
          setHours(setMinutes(new Date(), 30), 6),
          setHours(setMinutes(new Date(), 0), 7),
          setHours(setMinutes(new Date(), 30), 7),
        ]}
      />
    </FormGroup>
  );
}
