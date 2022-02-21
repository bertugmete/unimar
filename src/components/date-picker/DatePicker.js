import React from 'react'
import { Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const SelectDate = ({ onChange, value }) => {
  const startDate = new Date()
  return (
    <Form.Group>
      <DatePicker
        placeholderText="DD/MM/YYYY"
        dateFormat="dd/MM/yyyy"
        selected={value}
        onChange={onChange}
        className="date"
      />
    </Form.Group>
  )
}

export default SelectDate
