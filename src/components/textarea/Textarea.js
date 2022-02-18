import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const Textarea = ({ label, name, onChange, value, type, defaultValue, className, placeholder, ...props }) => {
  return (
    <Form.Group className="mb-3">
      <FloatingLabel controlId="floatingInput" className="mb-3" label={label}>
        <Form.Control
          as="textarea"
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

export default Textarea
