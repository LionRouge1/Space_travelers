/* eslint-disable jsx-quotes */
import React from 'react';
import JoinMission from '../mission/JoinMission';
import ReservedRockets from '../rocket/reservedRockets';
import '../../style/profile.css';

const MyProfile = () => (
  <div className='profile'>
    <ReservedRockets />
    <JoinMission />
  </div>
);

export default MyProfile;
