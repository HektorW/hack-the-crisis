import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import PageLayout from '../../components/_layouts/PageLayout'
// import GoogleButton from 'react-google-button' // optional

function LoginPage () {
  const firebase = useFirebase();
  const history = useHistory();
  const auth = useSelector((state: any) => state.firebase.auth)

  function loginWithGoogle() {
    return firebase.login({ provider: 'google', type: 'popup' })
  }

  useEffect(() => {
    if(isLoaded(auth) && !isEmpty(auth)) {
      // TODO Some magic to determine if user should be passed onto the onboarding wizard, or user profile or reports
      history.push('/profile')
    }
  }, [auth])

  return (
    <PageLayout title="Logga in">
      <div>
        <h2>Auth</h2>
        {
          !isLoaded(auth)
          ? <span>Loading...</span>
          : isEmpty(auth)
            // <GoogleButton/> button can be used instead
            ? <button onClick={loginWithGoogle}>Login With Google</button>
            : <pre>{JSON.stringify(auth, null, 2)}</pre>
        }
      </div>
    </PageLayout>
  )
}

export default LoginPage