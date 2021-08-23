import React from 'react'
import { withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: 'loading' }
  }

  render() {
    return (
      <>
        <div>欢迎使用！</div>
      </>
    )
  }
}

export default withSnackbar(withRouter(Index))
