import React from 'react'
import { useSelector } from 'react-redux'
import {
  RouteProps,
  Route,
  RouteComponentProps,
  Redirect
} from 'react-router-dom'

import { getIsAuthenticated } from '../../../modules/authentication/authentication.selectors'

interface AuthenticatedRouteProps extends RouteProps {}

export default function AuthenticatedRoute({
  render,
  children,

  ...routeProps
}: AuthenticatedRouteProps) {
  const isAuthenticated = useSelector(getIsAuthenticated)

  function onRouteRender(routeRenderProps: RouteComponentProps) {
    if (isAuthenticated) {
      if (render) {
        return render(routeRenderProps)
      } else {
        return children
      }
    }

    return <Redirect to="/" />
  }

  return <Route {...routeProps} render={onRouteRender} />
}
