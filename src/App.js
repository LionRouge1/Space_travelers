/* eslint-disable jsx-quotes */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Rocket from './components/rocket/rocket';
import MyProfile from './components/pages/MyProfile';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path='/' index element={<Rocket />} />
      <Route path='/profile' element={<MyProfile />} />
    </Routes>
  </>
);

export default App;
