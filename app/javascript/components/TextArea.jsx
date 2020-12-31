import React, { forwardRef } from 'react'

import PropTypes from 'prop-types'
import { FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap';

const TextArea = forwardRef(
  (
    {
      rows,
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
        <FormControl as='textarea' rows={rows} placeholder={placeholder} {...props}/>
        {error && (
          <FormText className='text-danger'>
            {error}
          </FormText>
        )}
      </FormGroup>
    )
  }
)

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  rows: PropTypes.number,
}

TextArea.defaultProps = {
  label: undefined,
  placeholder: undefined,
  error: undefined,
  rows: 3,
}

export default TextArea
