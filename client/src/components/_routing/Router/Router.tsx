import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SelfReportPage from '../../../pages/SelfReportPage'
import WelcomePage from '../../../pages/WelcomePage'
import NotFound from '../../../pages/_error/NotFound'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>

        <Route path="/report" exact>
          <SelfReportPage />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
