import React, { forwardRef } from 'react'

import PropTypes from 'prop-types'
import { FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap';

const TextField = forwardRef(
  (
    {
      type,
      label,
      error,
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <FormGroup>
        <FormLabel>{label}</FormLabel>
        <FormControl type={type} placeholder={placeholder} {...props}/>
        {error && (
          <FormText className="text-danger">
            {error}
          </FormText>
        )}
      </FormGroup>
    )
  }
)

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
}

TextField.defaultProps = {
  label: undefined,
  placeholder: undefined,
  error: undefined,
  type: undefined,
}

export default TextField
