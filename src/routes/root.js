import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/root/AboutPage";
import PokePage from "../pages/root/PokePage";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<RootPage />} >
        <Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/poke/*" element={<PokePage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default RootRoutes;
