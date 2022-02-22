import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const Input = ({
  label,
  name,
  onChange,
  value,
  type,
  defaultValue,
  className,
  placeholder,
  ...props
}) => {
  return (
    <Form.Group className="mb-2">
      <FloatingLabel controlId="floatingInput" label={label}>
        <Form.Control
          className={className}
          name={name}
          onChange={onChange}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...props}
        />
      </FloatingLabel>
    </Form.Group>
  )
}

export default Input
