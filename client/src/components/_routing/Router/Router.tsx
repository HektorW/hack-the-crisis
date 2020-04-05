import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import SelfReportPage from '../../../pages/SelfReportPage'
import WelcomePage from '../../../pages/WelcomePage'
import ProfilePage from '../../../pages/ProfilePage'
import NotFound from '../../../pages/_error/NotFound'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { useGetUser } from '../../../hooks/useGetUser'

function PrivateRoute({ children, ...rest }) {
  const auth = useGetUser();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>

        <PrivateRoute path="/profile">
            <ProfilePage />
        </PrivateRoute>

        <PrivateRoute path="/report" exact>
          <SelfReportPage />
        </PrivateRoute>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
