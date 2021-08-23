import React from 'react'

import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'

export const DenseButtonStyle = {
  borderRadius: '0',
  lineHeight: 'unset',
  padding: '4px 4px'
}

export const DenseButton = props => {
  const { children, ...rest } = props
  return (
    <Button
      disableElevation
      sx={ DenseButtonStyle }
      {...rest}
    >
      {children}
    </Button>
  )
}

DenseButton.propTypes = {
  children: PropTypes.any
}
