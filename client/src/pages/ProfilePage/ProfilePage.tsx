import React from 'react'
import { useSelector } from 'react-redux'
import PageLayout from '../../components/_layouts/PageLayout'
import { Link } from 'react-router-dom';

function ProfilePage () {
  const user = useSelector((state: any) => state.firebase.auth)

  return (
    <PageLayout title="Profile">
      <div>
        <h2>Hej {user.displayName}!</h2>
      </div>

      <div>
        <Link to={'/report'}>
          Till frågeformulär
        </Link>
      </div>
    </PageLayout>
  )
}

export default ProfilePage