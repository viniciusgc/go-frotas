import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FormGroup, Label } from 'reactstrap';
import ReactInputMask from 'react-input-mask';
import './style.scss';

export default function InputMask({ name, label, styles, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  const getStyles = () => {
    const defaultSyle = error
      ? 'form-control input-mask is-invalid'
      : 'form-control input-mask';

    if (styles) {
      return `${defaultSyle} ${styles}`;
    }

    return defaultSyle;
  };

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>

      <ReactInputMask
        className={getStyles()}
        id={name}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    </FormGroup>
  );
}
