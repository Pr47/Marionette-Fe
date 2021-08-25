import React from 'react'
import { Input } from '@material-ui/core'

export const DenseInputStyle = {
  '& > .MuiInput-input': {
    paddingBottom: '3px'
  }
}

export const DenseInput = props => {
  const { children, ...rest } = props
  return (
    <Input
      variant={'standard'}
      size={'small'}
      margin={'none'}
      sx={DenseInputStyle}
      {...rest}
    >
      {children}
    </Input>
  )
}
