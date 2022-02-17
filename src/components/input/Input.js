import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const Input = ({ label, name, onChange, value, type, defaultValue, className, placeholder }) => {
  return (
    <Form.Group className="mb-3">
      <FloatingLabel controlId="floatingInput" className="mb-3" label={label}>
        <Form.Control
          className={className}
          name={name}
          onChange={onChange}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      </FloatingLabel>
    </Form.Group>
  )
}

export default Input
