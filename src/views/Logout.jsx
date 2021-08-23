import React from 'react'
import { Redirect } from 'react-router-dom'
import { noLoginMenu } from '../data/menu'
import { purgeCreds } from '../utils/credUtil'

export default class Logout extends React.Component {
  componentDidMount() {
    this.props.setMenuContent(noLoginMenu)
    purgeCreds()
  }

  render() {
    return <Redirect to="/login"/>
  }
}
