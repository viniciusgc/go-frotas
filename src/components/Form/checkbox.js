import React from 'react';
import { FormGroup, Label } from 'reactstrap';

export default function Checkbox({ name, label, ...rest }) {
  return (
    <FormGroup check>
      <Label check>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id={name}
          {...rest}
        />{' '}
        {label}
      </Label>
    </FormGroup>
  );
}
