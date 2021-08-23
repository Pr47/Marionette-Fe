import React from 'react'
import {
  Box, AppBar, Toolbar, Menu, MenuItem
} from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'

import { DenseButton } from './button.jsx'
import { typeAssert } from '../utils/typeAssert'

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
  const {
    children, onClick, ...rest
  } = props

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
  const { id, text, items } = props
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const menuItems = items.map(item => (
    <HUDMenuItem key={`menu-item-${id}-${item.id}`} onClick={handleClose} component={Link} to={item.link}>
      {item.text}
    </HUDMenuItem>
  ))

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
        { menuItems }
      </Menu>
    </div>
  )
}

const hudMenuAssertion = [
  {
    id: 'string',
    text: 'string',
    items: [
      {
        id: 'string',
        text: 'string',
        link: 'string'
      }
    ]
  }
]

class HUDMenu extends React.PureComponent {
  render() {
    typeAssert(this.props.content, hudMenuAssertion)

    const subMenus = this.props.content.map(subMenu => (
      <HUDMenuButton id={subMenu.id} key={`sub-menu-${subMenu.id}`} text={subMenu.text} items={subMenu.items}/>
    ))

    return (
      <Box>
        <AppBar position="static">
          <Toolbar variant="dense" sx={{ minHeight: '0' }}>
            { subMenus }
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}

export default withRouter(HUDMenu)
