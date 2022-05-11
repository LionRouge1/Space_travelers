/* eslint-disable jsx-quotes */
import React from 'react';
import JoinMission from '../mission/JoinMission';
import ReservedRockets from '../rocket/reservedRockets';

const MyProfile = () => (
  <>
    <main className='profile'>
      <ReservedRockets />
      <JoinMission />
    </main>
  </>
);

export default MyProfile;
