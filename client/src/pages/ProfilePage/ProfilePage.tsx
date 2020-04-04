import React from 'react'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import PageLayout from '../../components/_layouts/PageLayout'
// import GoogleButton from 'react-google-button' // optional

function ProfilePage () {
  const firebase = useFirebase();
  const auth = useSelector((state: any) => state.firebase.auth)

  return (
    <PageLayout title="Profile">
      <div>
        <h2>User Profile</h2>
           
      </div>
    </PageLayout>
  )
}

export default ProfilePage