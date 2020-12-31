import React from 'react'

import { map, values } from 'lodash'
import { I18nextProvider } from 'react-i18next'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { SWRConfig } from 'swr'

import Navbar from '~/components/navbar'
import { ArticleProvider } from '~/context/ArticleContext'
import { fetcher } from '~/lib/axios'
import i18n from '~/lib/i18n'
import Routes from '~/routes'

/*
 * Config
 */

const swrConfig = {
  fetcher,
}

const App = () => (
  <SWRConfig value={swrConfig}>
    <I18nextProvider i18n={i18n}>
      <Router>
        <ArticleProvider>
          <Navbar />
          <Switch>
            {map(values(Routes), route => (
              <Route key={route.path} exact={route.exact} path={route.path}>
                <route.component />
              </Route>
                )
              )}
          </Switch>
        </ArticleProvider>
      </Router>
    </I18nextProvider>
  </SWRConfig>
      )
export default App