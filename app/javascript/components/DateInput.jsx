import React, { forwardRef } from 'react'

import PropTypes from 'prop-types'
import { FormGroup, FormLabel, FormText } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
 
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = forwardRef(
  (
    {
      label,
      error,
      value,
      placeholder,
      ...props
    }
  ) => (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <DatePicker className='form-control' selected={value} placeholder={placeholder} {...props} />
      {error && (
      <FormText className='text-danger'>
        {error}
      </FormText>
        )}
    </FormGroup>
    )
)

DateInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  placeholder: PropTypes.string
}

DateInput.defaultProps = {
  label: undefined,
  placeholder: undefined,
  error: undefined,
  value: () => new Date()
}

export default DateInput
