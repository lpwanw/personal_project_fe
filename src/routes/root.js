import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import HomePage from "../pages/root/HomePage";
import AboutPage from "../pages/root/AboutPage";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootPage />} >
        <Route>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default RootRoutes;
