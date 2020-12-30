import React from 'react'
import { I18nextProvider } from 'react-i18next'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { map, values } from 'lodash'

import i18n from 'lib/i18n'
import Routes from 'routes'

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Switch>
          {map(values(Routes), route => (
            <Route key={route.path} exact={route.exact} path={route.path}>
              <route.component />
            </Route>
            )
          )}
        </Switch>
      </Router>
    </I18nextProvider>)
}
export default App