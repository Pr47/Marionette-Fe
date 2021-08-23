import React from 'react'

import Button from '@material-ui/core/button'

export const DenseButtonStyle = {
  borderRadius: '0',
  lineHeight: 'unset'
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
