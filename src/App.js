/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RocketList from './components/rocket/rocketList';
import Header from './components/header/header';
import MyProfile from './components/pages/MyProfile';
import Mission from './components/pages/Mission';
import { fetchMission } from './redux/actions/mission';
import { retrieveRockets } from './redux/actions/rocket';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveRockets());
    dispatch(fetchMission());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' index element={<RocketList />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/missions' element={<Mission />} />
      </Routes>
    </>
  );
};

export default App;
