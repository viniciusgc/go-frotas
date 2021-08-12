import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FormGroup } from 'reactstrap';
import ReactInputMask from 'react-input-mask';
import './style.scss';

export default function InputMask({ name, label, error, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

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

  return (
    <FormGroup>
      <ReactInputMask
        className={
          error
            ? 'form-control form-control-lg input-mask is-invalid'
            : 'form-control form-control-lg input-mask'
        }
        id={name}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && (
        <div id="validationServer03Feedback" className="invalid-feedback">
          Por favor digite seu cpf corretamente.
        </div>
      )}
    </FormGroup>
  );
}
