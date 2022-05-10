/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import RocketList from './components/rocket/rocketList';
import Header from './components/header/header';
import MyProfile from './components/pages/MyProfile';
import Mission from './components/pages/Mission';
import { retrieveRockets } from './redux/actions/rocket';
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveRockets());
  }, []);

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' index element={<RocketList />} />
      <Route path='/profile' element={<MyProfile />} />
      <Route path='/missions' element={<Mission />} />
    </Routes>
    </>
)};

export default App;
