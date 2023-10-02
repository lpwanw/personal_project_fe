import React from "react";
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import RootRoutes from './routes/root';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIcons } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

library.add(faDiscord, faIcons);

function App() {
  return (
    <BrowserRouter basename="/personal_project_fe">
      <RootRoutes/>
    </BrowserRouter>
  );
}

export default App;
