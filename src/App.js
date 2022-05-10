/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RocketList from './components/rocket/rocketList';

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path='/' index element={<RocketList />} />
      </Routes>
    </Router>
  </div>
);

export default App;
