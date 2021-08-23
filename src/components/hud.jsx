import React from 'react'
import {
  Box, AppBar, Toolbar, Button, Menu, MenuItem
} from '@material-ui/core'
import PropTypes from 'prop-types'

import { DenseButton } from './button'

const HUDMenuItemStyle = {
  paddingTop: '2px !important',
  paddingBottom: '2px !important',
  ':hover': {
    backgroundColor: '#1976d2',
    color: '#fff'
  }
}

const HUDPopMenuStyle = {
  minHeight: '0',
  '& > .MuiPaper-root': {
    borderRadius: '0',
    '& > .MuiList-root': {
      paddingTop: '2px !important',
      paddingBottom: '2px !important',
    }
  }
}

const HUDMenuItem = (props) => {
  const { children, onClick, sx, ...rest } = props

  return (
    <MenuItem
      onClick={onClick}
      sx={HUDMenuItemStyle}
      {...rest}
    >
      {children}
    </MenuItem>
  )
}

const HUDMenuButton = (props) => {
  console.log(props)
  const { text } = props
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <DenseButton
        variant="contained"
        aria-haspopup="true"
        aria-expanded={ open ? 'true' : undefined }
        onClick={ handleClick }
      >
        { text }
      </DenseButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={HUDPopMenuStyle}
      >
        <HUDMenuItem onClick={handleClose}>Testing</HUDMenuItem>
        <HUDMenuItem onClick={handleClose}>Testing</HUDMenuItem>
        <HUDMenuItem onClick={handleClose}>Testing</HUDMenuItem>
      </Menu>
    </div>
  )
}

export default class HUDMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Box>
        <AppBar position="static">
          <Toolbar variant="dense" sx={{ minHeight: '0' }}>
            <HUDMenuButton text="ABCD"/>
            <HUDMenuButton text="DEFG"/>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}

HUDMenu.propTypes = {
  items: PropTypes.array
}
