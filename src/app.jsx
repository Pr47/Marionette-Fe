import React from 'react'
import {
  BrowserRouter, Switch, Route, Link, useHistory
} from 'react-router-dom'
import { Box, Button } from '@material-ui/core'

import Login from './views/LoginPage.jsx'
import Logout from './views/Logout.jsx'
import Index from './views/IndexPage.jsx'
import HUDMenu from './components/hud.jsx'

import { noLoginMenu } from './data/menu'

const App = () => {
  const history = useHistory()
  const [menuContent, setMenuContent] = React.useState(noLoginMenu)
  return (
    <BrowserRouter>
      <HUDMenu content={menuContent} />
      <Box className="App" sx={{ flex: 'auto', height: '95vh' }}>
        <Switch>
          <Route exact path="/login">
            <Login history={history} setMenuContent={setMenuContent}/>
          </Route>
          <Route exact path="/logout">
            <Logout setMenuContent={setMenuContent}/>
          </Route>
          <Route exact path="/index">
            <Index history={history}/>
          </Route>
          <Route exact path="/logged-out">
            <div>You were logged out, damn it</div>
            <Link to="/login">
              <Button variant="contained">Goto log-in</Button>
            </Link>
          </Route>
        </Switch>
      </Box>
    </BrowserRouter>
  )
}

export default App
