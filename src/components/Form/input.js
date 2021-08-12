import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FormGroup, Label } from 'reactstrap';

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <input
        className="form-control"
        id={name}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <h1>Test</h1>}
    </FormGroup>
  );
}
