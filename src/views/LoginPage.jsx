import React from 'react'
import {
  Button, Grid, Card, CardContent
} from '@material-ui/core'
import { withSnackbar } from 'notistack'
import { withRouter } from 'react-router-dom'
import { DenseInput } from '../components/input.jsx'

import { mobius } from '../utils/mobius'
import { saveCreds } from '../utils/credUtil'
import { loginMenu } from '../data/menu'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { userName: '', password: '' }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    const self = this
    const { userName, password } = self.state
    const impl = async () => {
      const { success, message, result } = await mobius.post('/api/login').data({
        userName, password
      }).do()
      if (success) {
        saveCreds(result)
        self.props.history.replace('/index')
        self.props.setMenuContent(loginMenu)
      } else {
        this.props.enqueueSnackbar(`登录错误: ${message}`)
      }
    }
    impl().then(() => {}).catch(err => this.props.enqueueSnackbar(`${err}`))
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        sx={{ height: '100%' }}
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        <Card sx={{ borderRadius: '0', '& > .MuiCardContent-root': { paddingBottom: '18px' } }} elevation={5}>
          <CardContent sx={{ paddingBottom: '0', marginBottom: '0' }}>
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              <Grid sx={{ padding: '4px' }}>
                <DenseInput
                  required
                  id="userName"
                  placeholder="用户名"
                  value={this.state.userName}
                  onInput={ e => this.setState({ userName: e.target.value }) }
                />
              </Grid>
              <Grid sx={{ padding: '4px' }}>
                <DenseInput
                  required
                  id="password"
                  type="password"
                  placeholder="密码"
                  value={this.state.password}
                  onInput={ e => this.setState({ password: e.target.value }) }
                />
              </Grid>
              <Grid container justifyContent="center">
                <Button
                  variant="contained"
                  sx={{
                    marginTop: '8px',
                    borderRadius: '0'
                  }}
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  登录
                </Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

export default withSnackbar(withRouter(Login))
