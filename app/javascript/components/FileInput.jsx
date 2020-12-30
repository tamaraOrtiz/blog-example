import React, { forwardRef } from 'react'

import PropTypes from 'prop-types'
import { FormGroup, FormFile } from 'react-bootstrap';

const FileInput = forwardRef(
  (
    {
      label,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <FormGroup>
        <FormFile label={label} isInvalid={error} feedback={error} feedbackTooltip {...props} />
      </FormGroup>
    )
  }
)

FileInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
}

FileInput.defaultProps = {
  label: undefined,
  error: undefined,
}

export default FileInput
