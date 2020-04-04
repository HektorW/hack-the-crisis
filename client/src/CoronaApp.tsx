import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'

import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore'

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from 'redux-firestore' 

import Router from './components/_routing/Router'
import { CoronaStore } from './store/store.types'
import { firebase as fbConfig, reduxFirebase as rfConfig } from "./config";

interface CoronaAppProps {
  store: CoronaStore
}

// TODO, should not be initialized here.
try {
  // Initialize firebase instance
  firebase.initializeApp(fbConfig);
  // Initialize other services on firebase instance
  firebase.firestore() // <- needed if using firestore
} catch (err) {
  console.error('Could not initialize firebase', err)
}


function CoronaApp({ store }: CoronaAppProps) {
  // TODO... fix
  const rrfProps = {
    firebase,
    config: {
      userProfile: "users"
    },
    dispatch: store.dispatch
  };

  
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
        >
        <Router />
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default hot(CoronaApp)
