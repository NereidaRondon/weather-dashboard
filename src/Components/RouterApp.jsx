import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import BigMap from './BigMap.jsx';
import Dashboard from './Dashboard';

export default function Router() {
  return (
    <Routes>
      <Route path='map' element={<BigMap />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route exact path='/' element={<Home />} />
    </Routes>
  );
}
