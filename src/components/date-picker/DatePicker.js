import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const SelectDate = ({}) => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <Form.Group>
      <DatePicker
        placeholderText="DD/MM/YYYY"
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="date"
      />
    </Form.Group>
  )
}

export default SelectDate
