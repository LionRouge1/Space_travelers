/* eslint-disable jsx-quotes */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RocketList from './components/rocket/rocketList';
import Header from './components/header/header';
import MyProfile from './components/pages/MyProfile';
import Mission from './components/pages/Mission';

const App = () => {
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
