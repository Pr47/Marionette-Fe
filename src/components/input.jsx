import React from 'react'
import { Input } from '@material-ui/core'

export const DenseInput = props => {
  const { children, ...rest } = props
  return (
    <Input
      variant={'standard'}
      size={'small'}
      margin={'none'}
      {...rest}
    >
      {children}
    </Input>
  )
}
