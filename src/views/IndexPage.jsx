import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
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

Index.propTypes = {
  history: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired
}

export default withSnackbar(withRouter(Index))
