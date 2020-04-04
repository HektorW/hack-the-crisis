import React from 'react'
import { useSelector } from 'react-redux'
import PageLayout from '../../components/_layouts/PageLayout'
import { Link } from 'react-router-dom';
import { AppState } from 'modules/allReducers';
import PulseChart from './PulseChart';
import TemperatureChart from './TemperatureChart';
import { useGetUser } from '../../hooks/useGetUser';



function ProfilePage () {
  const user = useGetUser();

  return (
    <PageLayout title="Profile">
      <div>
        <h2>Hej {user.displayName}!</h2>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '40px'}}
      >
        <PulseChart />
        <TemperatureChart />
      </div>
      <div>
        <Link to={'/'}>
          Till frågeformulär
        </Link>
      </div>
    </PageLayout>
  )
}

export default ProfilePage
