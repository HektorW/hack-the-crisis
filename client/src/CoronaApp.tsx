import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import Router from './components/_routing/Router'
import { CoronaStore } from './store/store.types'

interface CoronaAppProps {
  store: CoronaStore
}

const fbConfig = {
  apiKey: "AIzaSyCUeM-WXz844W9RgmFLcuf6z1r-WHRjlgs",
  authDomain: "hackthecrisis-c0a78.firebaseapp.com",
  databaseURL: "https://hackthecrisis-c0a78.firebaseio.com/",
  // storageBucket: "redux-firebasev3.appspot.com",
  messagingSenderId: "801431044519" 
};

try {
  firebase.initializeApp(fbConfig);
  console.log('testar')
} catch (err) {
  console.log('lol', err)
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
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router />
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default hot(CoronaApp)
