import React from 'react'
import { I18nextProvider } from 'react-i18next'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { map, values } from 'lodash'
import { SWRConfig } from 'swr'

import Navbar from '~/components/navbar'
import i18n from '~/lib/i18n'
import Routes from '~/routes'
import { fetcher } from '~/lib/axios'

/*
 * Config
 */

const swrConfig = {
  fetcher,
}

const App = () => {
  return (
    <SWRConfig value={swrConfig}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Navbar/>
          <Switch>
            {map(values(Routes), route => (
              <Route key={route.path} exact={route.exact} path={route.path}>
                <route.component />
              </Route>
              )
            )}
          </Switch>
        </Router>
      </I18nextProvider>
      </SWRConfig>
      )
}
export default App