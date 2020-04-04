import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import SelfReportPage from '../../../pages/SelfReportPage'
import WelcomePage from '../../../pages/WelcomePage'
import LoginPage from '../../../pages/LoginPage'
import ProfilePage from '../../../pages/ProfilePage'
import NotFound from '../../../pages/_error/NotFound'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

function PrivateRoute({ children, ...rest }) {
  const auth = useSelector((state: any) => state.firebase.auth);
  console.log('joel', auth)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
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
        <Route path="/login">
            {/* Component containing a login which redirects to /protected. */}
            <LoginPage />
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
