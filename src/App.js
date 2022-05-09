/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rocket from './components/rocket/rocket'

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path='/' index element={<Rocket />} />
      </Routes>
    </Router>
  </div>
);

export default App;
